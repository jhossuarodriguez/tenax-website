import type { AboutFaqItem, AboutPageData, NavItem, PortfolioCategoryId } from '@/types';
import { obraThumb } from '@/data/obras';
import { tenaxImage } from '@/data/projects';
import { categories } from '@/data/portfolio';

/** Enlace a una categoría del portafolio; falla el build si la categoría no existe. */
const sector = (id: PortfolioCategoryId): NavItem => {
  const category = categories.find((c) => c.id === id);
  if (!category) throw new Error(`Nosotros: no existe la categoría "${id}"`);
  return { label: category.title, href: category.href };
};

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
  // Banner y bloque "Somos Tenax" con los textos y fotos del diseño de Tenax en Canva (pág. 18).
  hero: {
    breadcrumbs: [{ label: 'Inicio', href: '/' }, { label: 'Nosotros' }],
    title: 'Sobre nosotros',
    lede: 'Nos enorgullece lo que hemos construido. Nos entusiasma aún más lo que queda por construir.',
    text: 'Desde 2012, Tenax Construction ha ejecutado más de 80 proyectos en la República Dominicana. Nuestra trayectoria abarca desde naves industriales y centros logísticos hasta edificaciones residenciales, comerciales e institucionales, obras del sector energético y puentes. Conoce los proyectos que han marcado nuestra historia.',
    // Provisional: el Canva pide la foto del supervisor frente al contenedor Crowley, que aún no está en el proyecto.
    photo: obraThumb('inicio'),
  },
  intro: {
    id: 'quienes-somos',
    title: 'Somos Tenax',
    lede: 'Ingeniería y construcción para proyectos industriales, edificaciones y obras de infraestructura.',
    text: 'Desde 2012, hemos ejecutado más de 80 proyectos en la República Dominicana. Nuestra experiencia abarca desde naves industriales y centros logísticos hasta edificaciones comerciales, instalaciones agroindustriales y puentes.',
    image: obraThumb('nave-industrial-6'),
    who: {
      title: '¿Quiénes somos?',
      paragraphs: [
        'Tenax Construction es una empresa dominicana de ingeniería y construcción. Integramos la oficina técnica con la ejecución en campo para coordinar los planos, la secuencia de los trabajos y el control de calidad en obra.',
        'El alcance se define según el proyecto y puede incluir la preparación del terreno, las cimentaciones, la ejecución de estructuras y la construcción de edificaciones. Cada obra plantea condiciones distintas, desde el acceso de equipos y materiales hasta la coordinación de trabajos en instalaciones en operación.',
      ],
    },
    sectors: {
      title: 'Sectores en los que trabajamos',
      items: [
        sector('industrial'),
        sector('residencial'),
        sector('comercial'),
        sector('agroindustrial'),
        sector('energia'),
        sector('logistica-almacenamiento'),
        sector('institucional-educativo'),
        sector('puentes'),
      ],
    },
    cta: { label: 'Explorar nuestros proyectos', href: '/proyectos/' },
    where: {
      title: 'Dónde trabajamos',
      text: 'Ejecutamos proyectos en la República Dominicana. Si tienes una obra en planificación, conversemos sobre su ubicación, alcance y etapa de desarrollo.',
    },
  },
  rows: [
    {
      image: tenaxImage('crane', 'Grúa torre en una obra en construcción'),
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
      image: tenaxImage('drawing', 'Diseño de planos de un proyecto'),
      id: 'equipo',
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
  // Texto provisional: Tenax tiene pendiente desarrollar esta sección.
  safety: {
    id: 'seguridad-calidad-medio-ambiente',
    title: 'Seguridad, calidad y medio ambiente',
    paragraphs: [
      'La seguridad de nuestro personal, la calidad de cada obra y el cuidado del entorno guían la forma en que planificamos y ejecutamos nuestros proyectos.',
      'Trabajamos con equipo de protección personal, supervisión en campo y control de obra en cada etapa, y fomentamos prácticas responsables con el medio ambiente.',
    ],
    cta: { label: 'Ver proyectos', href: '/proyectos/' },
    columns: [
      [obraThumb('control-acceso-1'), obraThumb('parque-fotovoltaico-calabaza'), obraThumb('estructura-acero-epp-1')],
      [obraThumb('inicio'), obraThumb('izaje-viga-1'), obraThumb('nivelacion-terreno-3')],
      [obraThumb('vallado-perimetral-3'), obraThumb('colocacion-hormigon-2'), obraThumb('parque-fotovoltaico-sabana-de-la-mar'), obraThumb('retrofit-4')],
    ],
  },
  faqTitle: 'Preguntas Frecuentes',
  faqs,
};
