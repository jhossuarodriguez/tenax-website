import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
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

  const user = import.meta.env.SMTP_USER;
  const pass = import.meta.env.SMTP_PASS;
  if (!user || !pass) {
    console.error('cotizacion: faltan las variables SMTP_USER / SMTP_PASS');
    return json({ success: false, message: 'Error al enviar la cotización.' }, 500);
  }

  const data = {
    nombre: escapeHtml(field('nombre')),
    email: escapeHtml(email),
    telefono: escapeHtml(field('telefono')),
    tipoProyecto: escapeHtml(field('tipoProyecto')),
    ubicacion: escapeHtml(field('ubicacion') || 'No especificado'),
    presupuesto: escapeHtml(field('presupuesto') || 'No especificado'),
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

  const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user, pass } });

  try {
    await Promise.all([
      transporter.sendMail({
        // Gmail envía siempre desde la cuenta autenticada; replyTo permite responder directo al cliente.
        from: `${field('nombre').replace(/[\r\n"<>]/g, '')} <${user}>`,
        replyTo: email,
        to: user,
        subject: 'Nueva solicitud de cotización',
        html: messageReceived,
      }),
      transporter.sendMail({
        from: `${site.name} <${user}>`,
        to: email,
        subject: 'Confirmación - Solicitud de cotización recibida',
        html: messageConfirmation,
      }),
    ]);
    return json({ success: true, message: 'Cotización enviada exitosamente.' }, 200);
  } catch (error) {
    console.error('cotizacion: error al enviar el correo', error);
    return json({ success: false, message: 'Error al enviar la cotización.' }, 500);
  }
};
