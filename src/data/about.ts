import type { ImageMetadata } from 'astro';
import type { AboutFaqItem, AboutPageData, ImageAsset, NavItem, PortfolioCategoryId } from '@/types';
import { imageVersions } from '@/data/images';
import { obraThumb } from '@/data/obras';
import { categories } from '@/data/portfolio';

/** Enlace a una categoría del portafolio; falla el build si la categoría no existe. */
const sector = (id: PortfolioCategoryId): NavItem => {
  const category = categories.find((c) => c.id === id);
  if (!category) throw new Error(`Nosotros: no existe la categoría "${id}"`);
  return { label: category.title, href: category.href };
};

const portraits = import.meta.glob<{ default: ImageMetadata }>('/src/assets/equipo/*.avif', { eager: true });

/** Retrato de src/assets/equipo/ (fuera del catálogo de obras, para que no salga en la galería). */
const portrait = async (file: string, alt: string): Promise<ImageAsset> => {
  const image = portraits[`/src/assets/equipo/${file}.avif`];
  if (!image) throw new Error(`Nosotros: falta el retrato "${file}" en src/assets/equipo/`);
  const { thumb, srcset, width, height } = await imageVersions(image.default);
  return { src: thumb, srcset, alt, width, height };
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
  // Banner, "¿Quiénes somos?" y "Nuestro equipo" con los textos y fotos del diseño de Tenax en Canva (pág. 19).
  hero: {
    breadcrumbs: [{ label: 'Inicio', href: '/' }, { label: 'Nosotros' }],
    title: 'Sobre nosotros',
    rule: true,
    lede: 'Empresa de ingeniería y construcción con amplia experiencia en el desarrollo de proyectos de alto valor en distintos sectores del país.',
    text: 'Ejecutamos soluciones constructivas integrales, desde naves industriales y centros logísticos hasta edificaciones residenciales, comerciales, institucionales, obras del sector energético y puentes.',
    photo: obraThumb('arq_gilberto_ramirez'),
  },
  intro: {
    id: 'quienes-somos',
    who: {
      title: '¿Quiénes somos?',
      paragraphs: [
        'Firma dominicana de ingeniería y construcción que integra la oficina técnica y la ejecución en campo para coordinar el diseño, la planificación, la secuencia de trabajos y el control de calidad de cada proyecto.',
        'El alcance abarca desde la preparación del terreno y cimentaciones hasta la ejecución de estructuras y edificaciones, adaptándonos a las condiciones y requerimientos de cada obra.',
      ],
    },
    team: {
      id: 'equipo',
      title: 'Nuestro equipo',
      text: 'Profesionales con experiencia en ingeniería, arquitectura, construcción y gestión de proyectos.',
      members: [
        {
          name: 'Ing. Ransel de la Rosa',
          role: 'Gerente General',
          photo: await portrait('ransel-de-la-rosa', 'Ing. Ransel de la Rosa, gerente general de Tenax Construction'),
        },
        {
          name: 'Arq. Darlin Tejada',
          role: 'Gerente Administrativa',
          photo: await portrait('darlin-tejada', 'Arq. Darlin Tejada, gerente administrativa de Tenax Construction'),
        },
        {
          name: 'Arq. Gilberto Ramírez',
          role: 'Coordinador de proyectos',
          photo: await portrait('gilberto-ramirez', 'Arq. Gilberto Ramírez, coordinador de proyectos de Tenax Construction'),
        },
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
      image: obraThumb('movimiento-tierra-pavimento-1'),
      imageSide: 'left',
      title: 'Nuestra Misión',
      subtitle: 'Construimos estructuras, elevamos tu proyecto',
      paragraphs: [
        [
          'Brindar soluciones innovadoras y de alta calidad en el sector de la construcción, adaptándonos a las necesidades de nuestros clientes y contribuyendo al desarrollo sostenible de la República Dominicana.',
        ],
        ['Contamos con equipos especializados y maquinaria pesada de última generación para realizar proyectos con eficiencia y precisión.'],
      ],
    },
    {
      // Foto vertical: el recorte (467 × 428, como la del banner) se centra en la cuadrilla y el camión hormigonera.
      image: { ...obraThumb('pavimento-3'), position: 'center 27%' },
      imageSide: 'right',
      title: '¿Por qué elegirnos?',
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
