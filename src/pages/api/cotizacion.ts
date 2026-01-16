import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData()

  const nombre = formData.get('nombre')?.toString()
  const email = formData.get('email')?.toString()
  const telefono = formData.get('telefono')?.toString()
  const presupuesto = formData.get('presupuesto')?.toString()
  const tipoProyecto = formData.get('tipoProyecto')?.toString()
  const descripcion = formData.get('descripcion')?.toString()

  if (!nombre || !email || !telefono || !presupuesto || !tipoProyecto || !descripcion) {
    return new Response(JSON.stringify({ error: 'Todos los campos son obligatorios' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const USER = import.meta.env.SMTP_USER
  const PASS = import.meta.env.SMTP_PASS

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: USER,
      pass: PASS,
    },
  })

  const ubicacion = formData.get('ubicacion')?.toString() || 'No especificado'
  const fechaInicio = formData.get('fechaInicio')?.toString() || 'No especificado'

  const MESSAGE_RECEIVED = `
        <h2>Nueva Solicitud de Cotización</h2>
        <p><strong>Datos del Cliente:</strong></p>
        <ul>
            <li><strong>Nombre:</strong> ${nombre}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Teléfono:</strong> ${telefono}</li>
        </ul>
        
        <p><strong>Datos del Proyecto:</strong></p>
        <ul>
            <li><strong>Tipo de Proyecto:</strong> ${tipoProyecto}</li>
            <li><strong>Ubicación:</strong> ${ubicacion}</li>
            <li><strong>Presupuesto Estimado:</strong> ${presupuesto}</li>
            <li><strong>Fecha Deseada de Inicio:</strong> ${fechaInicio}</li>
        </ul>
        
        <p><strong>Descripción del Proyecto:</strong></p>
        <p>${descripcion}</p>
        
        <hr>
        <p><em>Este email fue enviado desde el formulario de cotización de tenaxconstruction.com.do</em></p>
        `

  const MESSAGE_CONFIRMATION = `
        <h2>¡Gracias por contactarnos!</h2>
        <p>Hola ${nombre},</p>
        <p>Hemos recibido tu solicitud de cotización para un proyecto de tipo <strong>${tipoProyecto}</strong>.</p>
        <p>Nuestro equipo revisará tu solicitud y te contactaremos en las próximas 24 horas.</p>
        <p>Si tienes alguna pregunta urgente, puedes contactarnos al:</p>
        <ul>
        <li>📞 +1 (809) 898-6028</li>
        <li>📧 proyectos@tenax.com.do</li>
        </ul>
        <p>¡Gracias por confiar en Tenax Construction!</p>
        `
  try {
    const mailOptionsAdmin = {
      from: `${nombre} <${email}>`,
      to: USER,
      subject: 'Nueva solicitud de cotización',
      html: MESSAGE_RECEIVED,
    };

    const mailOptionsClient = {
      from: USER,
      to: email,
      subject: 'Confirmación - Solicitud de cotización Recibida',
      html: MESSAGE_CONFIRMATION,
    };

    const [adminInfo, clientInfo] = await Promise.all([
      transporter.sendMail(mailOptionsAdmin),
      transporter.sendMail(mailOptionsClient)
    ]);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Cotización enviada exitosamente',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );

  } catch (error: unknown | any) {

    return new Response(
      JSON.stringify({
        success: false,
        message: 'Error al enviar la cotización',
        error: error.message, // Opcional: enviar el detalle del error al cliente
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}