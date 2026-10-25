import type { AboutFaqItem, AboutPageData } from '@/types';

const img = (file: string): string => `/images/optimized/tenax/${file}.avif`;

/** Preguntas frecuentes de Tenax: cada respuesta es un solo párrafo. */
const faqs: AboutFaqItem[] = [
  {
    question: '¿Qué servicios de construcción ofrecen?',
    intro: 'Ofrecemos servicios completos de construcción incluyendo edificaciones residenciales, comerciales, remodelaciones, y proyectos de infraestructura.',
    points: [],
    open: true,
  },
  {
    question: '¿Cuánto tiempo toma completar un proyecto?',
    intro: 'El tiempo varía según la complejidad del proyecto. Proyectos residenciales típicamente toman 3-6 meses, mientras que proyectos comerciales pueden tomar 6-12 meses.',
    points: [],
  },
  {
    question: '¿Proporcionan presupuestos gratuitos?',
    intro: 'Sí, ofrecemos evaluaciones y presupuestos gratuitos para todos nuestros servicios. Contáctanos para programar una visita.',
    points: [],
  },
  {
    question: '¿Están licenciados y asegurados?',
    intro: 'Absolutamente. Contamos con todas las licencias necesarias y seguro completo para proteger tanto nuestros trabajadores como su propiedad.',
    points: [],
  },
  {
    question: '¿Tienen garantía en sus servicios?',
    intro: 'Sí, ofrecemos garantía en todos nuestros servicios de construcción. Nos aseguramos de que nuestros clientes estén completamente satisfechos con el trabajo realizado.',
    points: [],
  },
];

export const aboutPage: AboutPageData = {
  seo: {
    title: 'Sobre nosotros: constructora desde 2012',
    description:
      'Tenax Construction S.R.L. es una constructora dominicana fundada en 2012 que administra, construye y supervisa obras civiles y naves industriales.',
  },
  hero: {
    breadcrumbs: [{ label: 'Inicio', href: '/' }, { label: 'Nosotros' }],
    eyebrow: 'Tenax Construction, S.R.L.',
    title: 'Nuestra',
    titleEmphasis: 'Historia',
    subtitle: 'Somos una constructora dominicana comprometida con la excelencia en la administración, construcción, diseño y supervisión de obras civiles.',
    strip: ['Ingeniería', 'Arquitectura', 'Construcción'],
  },
  rows: [
    {
      image: { src: img('banner2'), alt: 'Equipo de Tenax supervisando una excavación' },
      imageSide: 'left',
      tone: 'light',
      title: 'Nuestra Historia',
      titleTone: 'brand',
      paragraphs: [
        [
          'Somos una constructora dominicana dedicada a la administración, construcción, diseño, y supervisión de obras civiles, además de realizar estudios de viabilidad socio-económico y ambiental para respaldar cada proyecto.',
        ],
        [
          'Fundada en el año 2012. Nuestra experiencia nos permite el manejo de proyectos altamente detallados, garantizando una óptima supervisión, para brindar excelentes resultados.',
        ],
      ],
    },
    {
      image: { src: img('crane'), alt: 'Grúa torre en una obra en construcción' },
      imageSide: 'right',
      tone: 'white',
      title: 'Nuestra Misión',
      titleTone: 'heading',
      subtitle: 'Construimos estructuras, elevamos tu proyecto',
      paragraphs: [
        [
          'Brindar soluciones innovadoras y de alta calidad en el sector de la construcción, adaptándonos a las necesidades de nuestros clientes y contribuyendo al desarrollo sostenible de la República Dominicana.',
        ],
        ['Contamos con equipos especializados y maquinaria pesada de última generación para realizar proyectos con eficiencia y precisión.'],
      ],
    },
    {
      image: { src: img('drawing'), alt: 'Diseño de planos de un proyecto' },
      imageSide: 'left',
      tone: 'white',
      title: '¿Por qué elegirnos?',
      titleTone: 'brand',
      paragraphs: [
        ['Experiencia local: profundo conocimiento del contexto dominicano.'],
        ['Equipo experto: profesionales altamente capacitados en diversas áreas.'],
        ['Compromiso con la sostenibilidad: fomentamos prácticas responsables con el medio ambiente.'],
        ['Resultados garantizados: entregamos proyectos que superan las expectativas.'],
        ['Explora nuestros ', { text: 'proyectos', href: '/proyectos/' }, ' y la ', { text: 'galería', href: '/galeria/' }, ' para conocer nuestro trabajo.'],
      ],
    },
  ],
  faqTitle: 'Preguntas Frecuentes',
  faqs,
  band: {
    prefix: 'Construimos estructuras, elevamos tu proyecto',
    title: '¿Tienes un proyecto en mente?',
    description: 'Contáctanos para una cotización personalizada. Nuestro equipo está listo para ayudarte a hacer realidad tu proyecto.',
    background: { src: img('banner1'), alt: '' },
  },
};
