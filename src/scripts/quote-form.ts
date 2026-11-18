/**
 * Formulario de cotización de Contacto: valida con el mismo esquema zod que el servidor, monta el
 * reto anti-bots de Turnstile, envía a su `action` (/api/cotizacion) y muestra el resultado.
 * Se incluye con <QuoteFormScript />.
 */
import { validateQuote, type QuoteErrors, type QuoteField } from '@/lib/quote-schema';

const TURNSTILE_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
const TURNSTILE_FIELD = 'cf-turnstile-response';
const TURNSTILE_PENDING = 'Espera a que termine la verificación de seguridad e inténtalo de nuevo.';
/** Ancho del widget normal (300 × 65); en pantallas donde no cabe se usa el compacto (150 × 140). */
const TURNSTILE_WIDTH = 300;

/** Parte de la API de Turnstile que usa el formulario. */
interface TurnstileApi {
  render(
    container: HTMLElement,
    options: { sitekey: string; language: string; theme: 'light' | 'dark' | 'auto'; size: 'normal' | 'compact' },
  ): string;
  reset(widgetId: string): void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

/** Resultado del envío del formulario de cotización. */
interface QuoteResult {
  ok: boolean;
  message: string;
  /** Avisos por campo cuando el servidor rechaza los datos. */
  errors?: QuoteErrors;
}

/** Reto de Turnstile de un formulario. */
interface Challenge {
  /** El script de Cloudflare no cargó (sin red o bloqueado por una extensión). */
  blocked: boolean;
  /** Pide un token nuevo: cada token solo vale para un envío. */
  reset(): void;
}

/** Carga el script de Turnstile y dibuja el widget en `container`, que trae la clave pública en `data-sitekey`. */
function mountChallenge(container: HTMLElement): Challenge {
  let widgetId: string | undefined;
  const challenge: Challenge = {
    blocked: false,
    reset() {
      if (widgetId) window.turnstile?.reset(widgetId);
    },
  };

  const script = document.createElement('script');
  script.src = TURNSTILE_SRC;
  script.async = true;
  script.addEventListener('load', () => {
    widgetId = window.turnstile?.render(container, {
      sitekey: container.dataset.sitekey ?? '',
      language: 'es',
      theme: 'light',
      size: container.clientWidth < TURNSTILE_WIDTH ? 'compact' : 'normal',
    });
  });
  script.addEventListener('error', () => {
    challenge.blocked = true;
  });
  document.head.append(script);
  return challenge;
}

/**
 * Pinta el aviso de cada campo y marca los controles con `aria-invalid`.
 * Con `onlyVisible` solo toca los avisos que ya se ven: mientras el cliente escribe se quitan o
 * cambian los que va corrigiendo, sin sacar avisos nuevos de campos que aún no ha tocado.
 */
function showFieldErrors(form: HTMLFormElement, errors: QuoteErrors, onlyVisible = false): void {
  form.querySelectorAll<HTMLElement>('[data-field-error]').forEach((slot) => {
    if (onlyVisible && slot.hidden) return;
    const name = slot.dataset.fieldError as QuoteField;
    const message = errors[name] ?? '';
    slot.textContent = message;
    slot.hidden = !message;
    const control = form.querySelector<HTMLElement>(`[name="${name}"]`);
    if (message) control?.setAttribute('aria-invalid', 'true');
    else control?.removeAttribute('aria-invalid');
  });
}

/**
 * Envía los datos al `action` del formulario y devuelve si el servidor los envió.
 * Mientras tanto deshabilita el botón para evitar envíos dobles.
 */
async function sendQuote(form: HTMLFormElement, formData: FormData, fallbackError: string): Promise<QuoteResult> {
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const label = button?.textContent ?? '';
  if (button) {
    button.disabled = true;
    button.textContent = 'Enviando…';
  }
  try {
    const response = await fetch(form.action, { method: 'POST', body: formData });
    const body: { message?: string; errors?: QuoteErrors } = await response.json().catch(() => ({}));
    if (response.ok) return { ok: true, message: body.message ?? '' };
    // Los 4xx traen un motivo útil (campos que revisar, verificación fallida); el resto, el aviso genérico.
    const rejected = response.status >= 400 && response.status < 500;
    return { ok: false, message: rejected && body.message ? body.message : fallbackError, errors: body.errors };
  } catch {
    return { ok: false, message: fallbackError };
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = label;
    }
  }
}

document.querySelectorAll<HTMLFormElement>('[data-contact-form]').forEach((form) => {
  // El aviso de error genérico viene en `data-error` del formulario (con el teléfono de WhatsApp).
  const fallbackError = form.dataset.error ?? 'No pudimos enviar tu solicitud. Inténtalo de nuevo.';
  const errorBox = form.querySelector<HTMLElement>('[data-contact-error]');
  const challengeBox = form.querySelector<HTMLElement>('[data-turnstile]');
  const challenge = challengeBox ? mountChallenge(challengeBox) : undefined;

  const showError = (message: string): void => {
    if (!errorBox) return;
    errorBox.textContent = message;
    errorBox.hidden = !message;
  };
  const showInvalid = (errors: QuoteErrors): void => {
    showFieldErrors(form, errors);
    form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
  };

  // Los avisos salen de zod, en español y bajo cada campo, en lugar de los globos del navegador.
  form.noValidate = true;

  // El calendario no deja elegir días pasados (el esquema también lo comprueba).
  const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60_000).toISOString().slice(0, 10);
  form.querySelectorAll<HTMLInputElement>('input[type="date"]').forEach((input) => {
    input.min = today;
  });

  form.addEventListener('input', () => {
    const check = validateQuote(new FormData(form));
    showFieldErrors(form, check.ok ? {} : check.errors, true);
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    showError('');

    const formData = new FormData(form);
    const check = validateQuote(formData);
    if (!check.ok) {
      showInvalid(check.errors);
      return;
    }
    showFieldErrors(form, {});

    if (challenge && !formData.get(TURNSTILE_FIELD)) {
      showError(challenge.blocked ? fallbackError : TURNSTILE_PENDING);
      return;
    }

    // Solo se muestra el éxito si el servidor la envió.
    const result = await sendQuote(form, formData, fallbackError);
    if (!result.ok) {
      challenge?.reset();
      if (result.errors) showInvalid(result.errors);
      showError(result.message);
      return;
    }
    const success = form.parentElement?.querySelector<HTMLElement>('[data-contact-success]');
    form.reset();
    form.hidden = true;
    if (success) success.hidden = false;
  });
});
