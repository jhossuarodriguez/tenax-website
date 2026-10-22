import { site } from '@/data/site';

/** Resultado del envío del formulario de cotización. */
export interface QuoteResult {
  ok: boolean;
  message: string;
}

const FALLBACK_ERROR = `No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos por WhatsApp al ${site.contact.phone}.`;

/**
 * Envía el formulario a su `action` (/api/cotizacion) y devuelve si el servidor lo envió.
 * Mientras tanto deshabilita el botón para evitar envíos dobles.
 */
export async function sendQuote(form: HTMLFormElement): Promise<QuoteResult> {
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const label = button?.textContent ?? '';
  if (button) {
    button.disabled = true;
    button.textContent = 'Enviando…';
  }
  try {
    const response = await fetch(form.action, { method: 'POST', body: new FormData(form) });
    const body: { message?: string } = await response.json().catch(() => ({}));
    if (response.ok) return { ok: true, message: body.message ?? '' };
    // Los 400 traen un motivo útil (campo vacío, email inválido); el resto, el aviso genérico.
    return { ok: false, message: response.status === 400 && body.message ? body.message : FALLBACK_ERROR };
  } catch {
    return { ok: false, message: FALLBACK_ERROR };
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = label;
    }
  }
}
