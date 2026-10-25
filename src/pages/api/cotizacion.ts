import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { site } from '@/data/site';

// Se ejecuta en el servidor (función de Vercel); el resto del sitio es estático.
export const prerender = false;

const REQUIRED = ['nombre', 'email', 'telefono', 'tipoProyecto', 'descripcion'] as const;

/** Escapa el texto del cliente antes de insertarlo en el HTML del correo. */
const escapeHtml = (value: string): string =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const json = (body: object, status: number): Response =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const field = (name: string): string => formData.get(name)?.toString().trim() ?? '';

  if (REQUIRED.some((name) => !field(name))) {
    return json({ success: false, message: 'Completa todos los campos obligatorios.' }, 400);
  }

  const email = field('email');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ success: false, message: 'El correo electrónico no es válido.' }, 400);
  }

  // RESEND_FROM debe usar un dominio verificado en Resend; QUOTE_TO_EMAIL es el buzón que recibe las cotizaciones.
  const apiKey = import.meta.env.RESEND_API_KEY;
  const from = import.meta.env.RESEND_FROM;
  const to = import.meta.env.QUOTE_TO_EMAIL;
  if (!apiKey || !from || !to) {
    console.error('cotizacion: faltan las variables RESEND_API_KEY / RESEND_FROM / QUOTE_TO_EMAIL');
    return json({ success: false, message: 'Error al enviar la cotización.' }, 500);
  }

  const data = {
    nombre: escapeHtml(field('nombre')),
    email: escapeHtml(email),
    telefono: escapeHtml(field('telefono')),
    tipoProyecto: escapeHtml(field('tipoProyecto')),
    ubicacion: escapeHtml(field('ubicacion') || 'No especificado'),
    // El monto y la moneda llegan en campos separados; sin monto no se muestra la moneda.
    presupuesto: escapeHtml(field('presupuesto') ? [field('moneda'), field('presupuesto')].filter(Boolean).join(' ') : 'No especificado'),
    fechaInicio: escapeHtml(field('fechaInicio') || 'No especificado'),
    descripcion: escapeHtml(field('descripcion')).replace(/\n/g, '<br>'),
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
