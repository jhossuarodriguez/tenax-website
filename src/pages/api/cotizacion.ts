import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { site } from '@/data/site';
import { validateQuote } from '@/lib/quote-schema';
import { TURNSTILE_FIELD, verifyTurnstile } from '@/lib/turnstile';

// Se ejecuta en el servidor (función de Vercel); el resto del sitio es estático.
export const prerender = false;

/** Escapa el texto del cliente antes de insertarlo en el HTML del correo. */
const escapeHtml = (value: string): string =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const json = (body: object, status: number): Response =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    // Cuerpo que no es un formulario (JSON, vacío…).
    return json({ success: false, message: 'Solicitud no válida.' }, 400);
  }

  // Mismas reglas que aplica el navegador; `errors` trae el aviso de cada campo que falla.
  const quote = validateQuote(formData);
  if (!quote.ok) {
    return json({ success: false, message: 'Revisa los campos marcados.', errors: quote.errors }, 400);
  }

  // Anti-bots: sin TURNSTILE_SECRET_KEY el formulario sigue funcionando, pero sin protección.
  const turnstileSecret = import.meta.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const token = formData.get(TURNSTILE_FIELD);
    const verified = await verifyTurnstile(typeof token === 'string' ? token : '', turnstileSecret, clientAddress);
    if (!verified) {
      return json({ success: false, message: 'No pudimos verificar que eres una persona. Inténtalo de nuevo.' }, 403);
    }
  } else {
    console.warn('cotizacion: falta TURNSTILE_SECRET_KEY; el formulario se acepta sin verificación anti-bots');
  }

  // RESEND_FROM debe usar un dominio verificado en Resend; QUOTE_TO_EMAIL es el buzón que recibe las cotizaciones.
  const apiKey = import.meta.env.RESEND_API_KEY;
  const from = import.meta.env.RESEND_FROM;
  const to = import.meta.env.QUOTE_TO_EMAIL;
  if (!apiKey || !from || !to) {
    console.error('cotizacion: faltan las variables RESEND_API_KEY / RESEND_FROM / QUOTE_TO_EMAIL');
    return json({ success: false, message: 'Error al enviar la cotización.' }, 500);
  }

  const { email } = quote.data;
  const data = {
    nombre: escapeHtml(quote.data.nombre),
    email: escapeHtml(email),
    telefono: escapeHtml(quote.data.telefono),
    tipoProyecto: escapeHtml(quote.data.tipoProyecto),
    ubicacion: escapeHtml(quote.data.ubicacion || 'No especificado'),
    // El monto y la moneda llegan en campos separados; el esquema exige la moneda cuando hay monto.
    presupuesto: escapeHtml(quote.data.presupuesto ? `${quote.data.moneda} ${quote.data.presupuesto}` : 'No especificado'),
    fechaInicio: escapeHtml(quote.data.fechaInicio || 'No especificado'),
    descripcion: escapeHtml(quote.data.descripcion).replace(/\n/g, '<br>'),
  };

  const messageReceived = `
    <h2>Nueva Solicitud de Cotización</h2>
    <p><strong>Datos del Cliente:</strong></p>
    <ul>
      <li><strong>Nombre:</strong> ${data.nombre}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Teléfono:</strong> ${data.telefono}</li>
    </ul>
    <p><strong>Datos del Proyecto:</strong></p>
    <ul>
      <li><strong>Tipo de Proyecto:</strong> ${data.tipoProyecto}</li>
      <li><strong>Ubicación:</strong> ${data.ubicacion}</li>
      <li><strong>Presupuesto Estimado:</strong> ${data.presupuesto}</li>
      <li><strong>Fecha Deseada de Inicio:</strong> ${data.fechaInicio}</li>
    </ul>
    <p><strong>Descripción del Proyecto:</strong></p>
    <p>${data.descripcion}</p>
    <hr>
    <p><em>Este email fue enviado desde el formulario de cotización de tenaxconstruction.com.do</em></p>
  `;

  const messageConfirmation = `
    <h2>¡Gracias por contactarnos!</h2>
    <p>Hola ${data.nombre},</p>
    <p>Hemos recibido tu solicitud de cotización para un proyecto de tipo <strong>${data.tipoProyecto}</strong>.</p>
    <p>Nuestro equipo revisará tu solicitud y te contactaremos en las próximas 24 horas.</p>
    <p>Si tienes alguna pregunta urgente, puedes contactarnos al:</p>
    <ul>
      <li>📞 ${site.contact.phone}</li>
      <li>📧 ${site.contact.email}</li>
    </ul>
    <p>¡Gracias por confiar en ${site.name}!</p>
  `;

  const resend = new Resend(apiKey);

  try {
    // En modo estricto (por defecto), si un correo no es válido Resend no envía ninguno de los dos.
    const { error } = await resend.batch.send([
      {
        from,
        to,
        // Responder desde el buzón de Tenax contesta directo al cliente.
        replyTo: email,
        subject: 'Nueva solicitud de cotización',
        html: messageReceived,
      },
      {
        from,
        to: email,
        replyTo: to,
        subject: 'Confirmación - Solicitud de cotización recibida',
        html: messageConfirmation,
      },
    ]);
    if (error) {
      console.error('cotizacion: Resend rechazó el envío', error);
      return json({ success: false, message: 'Error al enviar la cotización.' }, 500);
    }
    return json({ success: true, message: 'Cotización enviada exitosamente.' }, 200);
  } catch (error) {
    // Errores de red o de la propia petición (Resend no lanza por errores de la API).
    console.error('cotizacion: error al contactar con Resend', error);
    return json({ success: false, message: 'Error al enviar la cotización.' }, 500);
  }
};
