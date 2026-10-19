import type { HomeFormField, HomeContent } from '@/types';

/** Contenido de la portada, con los textos del sitio de Tenax Construction. */

const img = (file: string): string => `/images/optimized/tenax/${file}.avif`;

export const home: HomeContent = {
  hero: {
    title: 'Bienvenido a Tenax Construction',
    text: 'Construimos estructuras, elevamos tu proyecto. Somos una constructora dominicana dedicada a la administración, construcción, diseño y supervisión de obras civiles.',
    video: { webm: '/videos/tenax.webm', mp4: '/videos/tenax.mp4' },
    buttons: [
      { label: 'Ver proyectos', href: '/proyectos/', variant: 'brand' },
      { label: 'Nuestros servicios', href: '/servicios/', variant: 'white' },
    ],
  },
  projectsHeading: 'Nuestros Proyectos',
  projectsCta: { label: 'Explora nuestros proyectos', href: '/proyectos/' },
  servicesHeading: 'Nuestros Servicios',
  serviceCtaLabel: 'Ver más detalles',
  techniquesHeading: 'Soluciones integrales en construcción',
  techniquesBackground: img('banner4'),
  techniques: [
    {
      title: 'Administración de Proyectos',
      text: 'Planificación y gestión eficiente de recursos. Coordinación integral para cumplir con los objetivos de tiempo y presupuesto.',
    },
    {
      title: 'Diseño y Construcción',
      text: 'Desarrollo de diseños funcionales y estéticamente atractivos. Construcción con altos estándares de calidad y seguridad.',
    },
    {
      title: 'Supervisión de Obras Civiles',
      text: 'Garantizamos el cumplimiento de las normativas vigentes. Seguimiento detallado para asegurar resultados óptimos.',
    },
    {
      title: 'Estudios de Viabilidad',
      text: 'Análisis socioeconómico y ambiental. Evaluaciones completas para determinar la factibilidad de proyectos.',
    },
  ],
  equipment: {
    heading: 'Sobre Nosotros',
    title: 'En Tenax Construction',
    text: 'Brindamos soluciones innovadoras y de alta calidad en el sector de la construcción, adaptándonos a las necesidades de nuestros clientes y contribuyendo al desarrollo sostenible de la República Dominicana. Contamos con equipos especializados y maquinaria pesada de última generación para realizar proyectos con eficiencia y precisión.',
    cta: { label: 'Conoce nuestra historia', href: '/sobre-nosotros/' },
    slides: [
      { src: img('about-image'), alt: 'Proyecto de paneles solares de Tenax Construction' },
      { src: img('banner2'), alt: 'Supervisión de excavación en obra' },
      { src: img('banner1'), alt: 'Excavadora en trabajos de movimiento de tierra' },
    ],
  },
  reasonsHeading: '¿Por qué elegirnos?',
  reasons: [
    { number: '01', title: 'Experiencia Local', text: 'Profundo conocimiento del contexto dominicano.' },
    { number: '02', title: 'Equipo Experto', text: 'Profesionales altamente capacitados en diversas áreas.' },
    { number: '03', title: 'Compromiso con la Sostenibilidad', text: 'Fomentamos prácticas responsables con el medio ambiente.' },
    { number: '04', title: 'Resultados Garantizados', text: 'Entregamos proyectos que superan las expectativas.' },
  ],
  contact: {
    introTitle: 'Números que hablan',
    introText:
      'Más de 80 proyectos completados, 80 clientes satisfechos y 13 años en el mercado: nuestra trayectoria refleja nuestro compromiso y éxito en el sector de la construcción.',
    bandImage: img('about-bg'),
    title: 'Solicita tu cotización',
    text: 'Completa el formulario y te contactaremos en las próximas 24 horas.',
  },
  ctaBand: {
    eyebrow: 'Construimos estructuras, elevamos tu proyecto',
    title: '¿Tienes un proyecto en mente?',
    text: 'Contáctanos para una cotización personalizada. Nuestro equipo está listo para ayudarte a hacer realidad tu proyecto.',
    image: img('banner2'),
  },
};

/** Tipos de proyecto y rangos de presupuesto del formulario de cotización de Tenax. */
export const projectTypes = ['Casa Residencial', 'Edificio/Apartamentos', 'Proyecto Comercial', 'Nave Industrial', 'Remodelación', 'Otro'];
export const budgetRanges = ['$50,000 - $100,000', '$100,000 - $250,000', '$250,000 - $500,000', '$500,000 - $1,000,000', 'Más de $1,000,000'];

export const homeFormFields: HomeFormField[] = [
  { name: 'nombre', label: 'Nombre Completo', type: 'text', placeholder: 'Nombre completo', required: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Ingresa tu correo electrónico', required: true, half: true },
  { name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: '+1 (809) 000-0000', required: true, half: true },
  { name: 'tipoProyecto', label: 'Tipo de Proyecto', type: 'select', placeholder: 'Selecciona el tipo de proyecto', options: projectTypes, required: true, half: true },
  { name: 'presupuesto', label: 'Presupuesto Estimado', type: 'select', placeholder: 'Selecciona un rango', options: budgetRanges, required: false, half: true },
  {
    name: 'descripcion',
    label: 'Descripción del Proyecto',
    type: 'textarea',
    placeholder: 'Describe tu proyecto: tipo de construcción, tamaño aproximado, características especiales, etc.',
    required: true,
  },
];
