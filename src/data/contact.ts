import type { ContactPageData } from '@/types';
import { site } from '@/data/site';
import { budgetRanges, projectTypes } from '@/data/home';

const { contact } = site;

export const contactPage: ContactPageData = {
  seo: { title: 'Contacto', description: 'Contacta con Tenax Construction para obtener más información sobre nuestros servicios.' },
  intro: {
    title: ['¿Tienes un proyecto', 'en mente?'],
    subtitle: 'Contáctanos para una cotización personalizada. Nuestro equipo está listo para ayudarte a hacer realidad tu proyecto.',
  },
  detailsTitle: 'Información de contacto',
  cards: [
    { title: 'Dirección', value: contact.address, href: contact.mapsUrl },
    { title: 'Llámanos', value: contact.phone, href: `tel:${contact.phoneHref}` },
    { title: 'WhatsApp', value: contact.phone, href: contact.whatsapp },
    { title: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { title: 'Horario', value: contact.hours },
  ],
  mapLabel: 'Ver en Google Maps →',
  mapUrl: contact.mapsUrl,
  form: {
    title: ['Solicita tu', 'cotización'],
    description: 'Completa el formulario y te contactaremos en las próximas 24 horas.',
    action: '/api/cotizacion',
    rows: [
      [{ name: 'nombre', label: 'Nombre Completo', placeholder: 'Nombre completo', type: 'text', required: true, autocomplete: 'name' }],
      [
        { name: 'email', label: 'Email', placeholder: 'Ingresa tu correo electrónico', type: 'email', required: true, autocomplete: 'email' },
        { name: 'telefono', label: 'Teléfono', placeholder: '+1 (809) 000-0000', type: 'tel', required: true, autocomplete: 'tel' },
      ],
      [
        { name: 'ubicacion', label: 'Ubicación del Proyecto', placeholder: 'Ciudad, Sector', type: 'text', required: false, autocomplete: 'address-level2' },
        { name: 'tipoProyecto', label: 'Tipo de Proyecto', placeholder: 'Selecciona el tipo de proyecto', type: 'select', options: projectTypes, required: true },
      ],
      [
        { name: 'presupuesto', label: 'Presupuesto Estimado', placeholder: 'Selecciona un rango', type: 'select', options: budgetRanges, required: false },
        { name: 'fechaInicio', label: 'Fecha Deseada de Inicio', placeholder: '', type: 'date', required: false },
      ],
      [
        {
          name: 'descripcion',
          label: 'Descripción del Proyecto',
          placeholder: 'Describe tu proyecto: tipo de construcción, tamaño aproximado, características especiales, etc.',
          type: 'textarea',
          required: true,
          rows: 6,
        },
      ],
    ],
    submitLabel: 'Enviar Solicitud de Cotización',
    successMessage: '¡Cotización enviada exitosamente! Te contactaremos en las próximas 24 horas. Revisa tu email para la confirmación.',
  },
  band: {
    title: 'Construimos estructuras, elevamos tu proyecto',
    description: site.description,
  },
};
