import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();

        // Validar datos requeridos
        const nombre = formData.get('nombre')?.toString();
        const email = formData.get('email')?.toString();
        const telefono = formData.get('telefono')?.toString();
        const tipoProyecto = formData.get('tipoProyecto')?.toString();
        const descripcion = formData.get('descripcion')?.toString();

        if (!nombre || !email || !telefono || !tipoProyecto || !descripcion) {
            return new Response(JSON.stringify({ error: 'Faltan campos requeridos' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Configurar transportador de email
        // NOTA: Necesitarás configurar estas variables de entorno
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com', // O tu proveedor SMTP
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER, // Email
                pass: process.env.SMTP_PASS  // Contraseña de aplicación
            }
        });

        // Crear el contenido del email
        const ubicacion = formData.get('ubicacion')?.toString() || 'No especificada';
        const presupuesto = formData.get('presupuesto')?.toString() || 'No especificado';
        const fechaInicio = formData.get('fechaInicio')?.toString() || 'No especificada';

        const htmlContent = `
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
            `;

        // Enviar email
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: 'joshuarodryguezcr@gmail.com',
            subject: `Nueva Cotización - ${tipoProyecto} - ${nombre}`,
            html: htmlContent,
            replyTo: email
        });

        // Email de confirmación al cliente
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: 'Confirmación - Solicitud de Cotización Recibida',
            html: `
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
        });

        return new Response(JSON.stringify({
            success: true,
            message: 'Cotización enviada exitosamente'
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Error procesando cotización:', error);
        return new Response(JSON.stringify({
            error: 'Error interno del servidor'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
