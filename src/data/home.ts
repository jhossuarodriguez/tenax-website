import type { HomeFormField, HomeContent } from '@/types';
import { obraPhoto, obraThumb } from '@/data/obras';
import { site } from '@/data/site';

/** Contenido de la portada, con los textos del sitio de Tenax Construction. */

const img = (file: string): string => `/images/optimized/tenax/${file}.avif`;

/** "14 años de experiencia" en 2026: se recalcula en cada build a partir del año de fundación. */
const yearsOfExperience = new Date().getFullYear() - site.business.foundingYear;

export const home: HomeContent = {
  seo: {
    title: 'Constructora en Santo Domingo, RD',
    description:
      'Constructora dominicana de naves industriales, estructuras metálicas, movimiento de tierra y obras civiles, con oficina en Santo Domingo.',
  },
  hero: {
    kicker: 'Constructora industrial en República Dominicana',
    lines: ['Estructuras metálicas.', 'Movimiento de tierra.', 'Obras civiles.'],
    text: 'Especialistas en construcción industrial, estructuras metálicas, infraestructura energética, obras civiles, cimentaciones y movimiento de tierras en la República Dominicana.',
    image: obraThumb('hero-estructura-atardecer'),
    buttons: [
      { label: 'Ver proyectos', href: '/proyectos/', variant: 'brand' },
      { label: 'Nuestros servicios', href: '/servicios/', variant: 'white' },
    ],
  },
  vision: {
    visionLabel: 'Nuestra visión',
    title: 'Construimos el futuro con ingeniería y solidez, desde 2012.',
    text: [
      `TENAX Construction cuenta con ${yearsOfExperience} años de experiencia en el `,
      { highlight: 'desarrollo y ejecución de proyectos de ingeniería y construcción' },
      ', especializándose en estructuras metálicas, naves industriales, obras civiles y movimientos de tierra, con participación en los sectores ',
      { highlight: 'industrial, comercial, logístico, agroindustrial y energético' },
      '.',
    ],
    statsLabel: 'Tenax en cifras',
    stats: [
      { value: String(yearsOfExperience), label: 'Años de experiencia' },
      { value: '+80', label: 'Proyectos ejecutados' },
      { value: '5', label: 'Áreas de especialización' },
    ],
    valuesLabel: 'Nuestros valores',
    values: [
      { icon: 'compromiso', label: 'Compromiso' },
      { icon: 'excelencia', label: 'Excelencia' },
      { icon: 'seguridad', label: 'Seguridad' },
      { icon: 'integridad', label: 'Integridad' },
      { icon: 'precision', label: 'Precisión' },
      { icon: 'responsabilidad', label: 'Responsabilidad' },
    ],
  },
  earthworks: {
    eyebrow: 'Movimientos de tierra',
    title: 'Preparamos el terreno para grandes proyectos.',
    text: 'En TENAX Construction ejecutamos movimientos de tierra, excavación, nivelación y compactación, preparando las condiciones necesarias para el desarrollo de nuevas obras.',
    cta: { label: 'Conoce más', href: '/servicios/movimiento-tierra/' },
    image: obraThumb('nivelacion-terreno-2'),
  },
  projectsHeading: 'Proyectos destacados',
  projects: [
    {
      image: obraThumb('nave-industrial-bani'),
      eyebrow: 'Baní · Centro de acopio',
      title: 'Nave para exportación de mango',
      text: 'Nave industrial destinada a acopio, almacenamiento y operación logística.',
    },
    {
      image: obraThumb('nave-bodega-temporal-1'),
      eyebrow: 'Caucedo · BIT',
      title: 'Bodega de importación temporal',
      text: 'Infraestructura para almacenamiento y actividades logísticas.',
    },
    {
      image: obraThumb('escalera-emergencia-1'),
      eyebrow: 'Av. Abraham Lincoln · Rannik',
      title: 'Escalera de emergencias',
      text: 'Integración de estructura metálica a edificación existente.',
    },
    {
      image: obraThumb('movimiento-tierra-samana-1'),
      eyebrow: 'Las Terrenas · Silver Beach',
      title: 'Movimiento de tierras y nivelación de terreno',
      text: 'Preparación y conformación del terreno para el desarrollo del proyecto Silver Beach.',
    },
    {
      image: obraThumb('pavimento-1'),
      eyebrow: 'Haina · Container yard',
      title: 'Pavimento en patio operativo',
      text: 'Pavimento de concreto para container yard de una agencia naviera.',
    },
    {
      image: obraThumb('puente-alcantarillado-6'),
      eyebrow: 'Obra civil · Puente alcantarillado',
      title: 'Puente alcantarillado',
      text: 'Ejecución de infraestructura de drenaje y paso vehicular para obra civil.',
    },
  ],
  projectsCta: { label: 'Explora nuestros proyectos', href: '/proyectos/' },
  servicesHeading: 'Nuestros Servicios',
  serviceCtaLabel: 'Ver más detalles',
  solutions: {
    eyebrow: 'Tenax Construction / Nuestra forma de trabajar',
    title: 'Soluciones integrales en construcción',
    text: 'Acompañamos el desarrollo de cada obra con planificación, diseño, seguimiento y análisis técnico.',
    cta: { label: 'Conocer más', href: '/servicios/' },
    items: [
      {
        title: 'Administración de Proyectos',
        text: 'Organización de actividades, recursos y cronogramas para coordinar la ejecución de cada proyecto.',
        image: obraThumb('inicio'),
      },
      {
        title: 'Diseño y Construcción',
        text: 'Desarrollo y ejecución de soluciones constructivas, como la nave para acopio y exportación de mango en Baní.',
        image: obraThumb('nave-industrial-6'),
      },
      {
        title: 'Supervisión de Obras Civiles',
        text: 'Seguimiento de trabajos en campo, verificación de avances y control de la ejecución según especificaciones.',
        image: obraThumb('colocacion-hormigon-1'),
      },
      {
        title: 'Estudios de Viabilidad',
        text: 'Evaluación preliminar de condiciones y alternativas técnicas para orientar decisiones antes de construir.',
        image: obraThumb('galeria-1'),
      },
    ],
  },
  about: {
    heading: 'Sobre Nosotros',
    title: 'TENAX CONSTRUCTION, S.R.L.',
    paragraphs: [
      'En TENAX CONSTRUCTION somos una empresa dominicana de ingeniería, arquitectura y construcción, especializada en el desarrollo y ejecución de proyectos industriales, comerciales y de infraestructura.',
      'Nuestra trayectoria abarca la construcción de naves industriales, estructuras metálicas, cimentaciones, pavimentos de concreto, movimientos de tierra y obras civiles, con participación en proyectos de los sectores logístico, agroindustrial, energético y turístico.',
      'Contamos con personal técnico especializado, maquinaria pesada y experiencia en campo para ofrecer soluciones adaptadas a los requerimientos de cada proyecto, integrando planificación, coordinación y ejecución constructiva.',
    ],
    image: {
      src: img('arq-gilberto-ramirez'),
      srcset: `${img('arq-gilberto-ramirez-800')} 800w, ${img('arq-gilberto-ramirez')} 1437w`,
      alt: 'Arq. Gilberto Ramírez, con chaleco de seguridad, en un patio de contenedores junto a una excavadora',
    },
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
    bandImage: obraPhoto('nave-industrial-bani').src,
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

/** Tipos de proyecto y monedas del presupuesto del formulario de cotización de Tenax. */
export const projectTypes = ['Casa Residencial', 'Edificio/Apartamentos', 'Proyecto Comercial', 'Nave Industrial', 'Remodelación', 'Otro'];
// El cliente escribe el monto y elige la moneda: Tenax cotiza tanto en dólares como en pesos.
export const currencies = ['US$', 'RD$'];

export const homeFormFields: HomeFormField[] = [
  { name: 'nombre', label: 'Nombre Completo', type: 'text', placeholder: 'Nombre completo', required: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Ingresa tu correo electrónico', required: true, half: true },
  { name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: '+1 (809) 000-0000', required: true, half: true },
  { name: 'tipoProyecto', label: 'Tipo de Proyecto', type: 'select', placeholder: 'Selecciona el tipo de proyecto', options: projectTypes, required: true },
  { name: 'presupuesto', label: 'Presupuesto Estimado', type: 'text', placeholder: 'Ej. 150,000', required: false, half: true },
  { name: 'moneda', label: 'Moneda', type: 'select', placeholder: 'Selecciona la moneda', options: currencies, required: false, half: true },
  {
    name: 'descripcion',
    label: 'Descripción del Proyecto',
    type: 'textarea',
    placeholder: 'Describe tu proyecto: tipo de construcción, tamaño aproximado, características especiales, etc.',
    required: true,
  },
];
