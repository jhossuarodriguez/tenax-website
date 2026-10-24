/**
 * Formularios de cotización de la portada y de Contacto: envían a su `action` (/api/cotizacion) y
 * muestran el resultado. Se incluye con <QuoteFormScript />, que lo deja en línea dentro del HTML.
 */

/** Resultado del envío del formulario de cotización. */
interface QuoteResult {
  ok: boolean;
  message: string;
}

/**
 * Envía el formulario a su `action` y devuelve si el servidor lo envió.
 * Mientras tanto deshabilita el botón para evitar envíos dobles.
 * El aviso de error viene en `data-error` del formulario (con el teléfono de WhatsApp).
 */
async function sendQuote(form: HTMLFormElement): Promise<QuoteResult> {
  const FALLBACK_ERROR = form.dataset.error ?? 'No pudimos enviar tu solicitud. Inténtalo de nuevo.';
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

// Portada: el resultado se muestra bajo el botón.
document.querySelectorAll<HTMLFormElement>('[data-home-form]').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const status = form.querySelector<HTMLElement>('[data-form-status]');
    const result = await sendQuote(form);
    if (status) {
      status.textContent = result.ok ? (form.dataset.success ?? result.message) : result.message;
      status.classList.remove('hidden');
      status.classList.toggle('text-brand-dark', !result.ok);
    }
    if (result.ok) form.reset();
  });
});

// Contacto: solo muestra el éxito si el servidor la envió.
document.querySelectorAll<HTMLFormElement>('[data-contact-form]').forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const error = form.querySelector<HTMLElement>('[data-contact-error]');
    const result = await sendQuote(form);
    if (!result.ok) {
      if (error) {
        error.textContent = result.message;
        error.hidden = false;
      }
      return;
    }
    const success = form.parentElement?.querySelector<HTMLElement>('[data-contact-success]');
    form.reset();
    form.hidden = true;
    if (success) success.hidden = false;
  });
});
