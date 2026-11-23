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

/**
 * Foto de src/assets/equipo/ (fuera del catálogo de obras, para que no salga en la galería). Los retratos de "Nuestro
 * equipo" ya vienen recortados a 113 : 127 con el encuadre del Canva (pág. 19), así que se muestran centrados.
 */
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
    lede: 'Desde 2012, en Tenax desarrollamos proyectos de ingeniería y construcción, combinando experiencia técnica, capacidad operativa y compromiso con la ejecución de cada obra.',
    text: 'A lo largo de nuestra trayectoria hemos participado en más de 80 proyectos, construyendo relaciones de confianza con clientes de distintos sectores productivos de la República Dominicana.',
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
          photo: await portrait('ing_ransel_de_la_rosa_nosotros', 'Ing. Ransel de la Rosa, gerente general de Tenax Construction'),
        },
        {
          name: 'Arq. Darlin Tejada',
          role: 'Gerente Administrativa',
          photo: await portrait('arq_darlin_tejada_nosotros', 'Arq. Darlin Tejada, gerente administrativa de Tenax Construction'),
        },
        {
          name: 'Arq. Gilberto Ramírez',
          role: 'Coordinador de proyectos',
          photo: await portrait('arq_gilberto_ramirez_nosotros', 'Arq. Gilberto Ramírez, coordinador de proyectos de Tenax Construction'),
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
  },
  // Textos y fotos de Misión y "Planificación y ejecución coordinadas" del diseño de Tenax en Canva (pág. 20). Las
  // fotos son verticales: `position` elige la franja que se ve en el recorte de 467 × 428.
  rows: [
    {
      image: {
        ...(await portrait('mision_2', 'Colaboradora de Tenax Construction atendiendo el teléfono en la recepción de la oficina')),
        position: 'center 78%',
      },
      imageSide: 'left',
      title: 'Nuestra Misión',
      subtitle: 'Construimos estructuras, elevamos tu proyecto',
      paragraphs: [
        [
          'Desarrollar proyectos de ingeniería y construcción mediante la coordinación de recursos, la ejecución de los procesos constructivos y el control técnico de los trabajos, atendiendo las especificaciones, condiciones y objetivos de cada proyecto.',
        ],
      ],
    },
    {
      image: {
        ...(await portrait('planificacion_y_ejecucion_coordinadas', 'Colaboradora de Tenax Construction trabajando en su escritorio de la oficina')),
        position: 'center 90%',
      },
      imageSide: 'right',
      title: 'Planificación y ejecución coordinadas',
      paragraphs: [
        [
          'El desarrollo de cada obra requiere organizar las actividades constructivas, coordinar personal, equipos y suministros, y dar seguimiento al avance de los trabajos.',
        ],
        [
          'La participación conjunta de la oficina técnica y el equipo de campo facilita la revisión de planos, cantidades de obra y condiciones de ejecución, así como la atención de ajustes durante el proceso constructivo.',
        ],
      ],
    },
  ],
  // Texto y foto del diseño de Tenax en Canva (pág. 21).
  safety: {
    id: 'seguridad-calidad-medio-ambiente',
    title: 'Seguridad, calidad y medio ambiente',
    lede: 'Control y responsabilidad durante la ejecución.',
    paragraphs: [
      'La seguridad del personal, la calidad de los trabajos y el cuidado del entorno forman parte de la planificación de las actividades en obra.',
      'El uso de equipos de protección personal, la supervisión de los frentes de trabajo y la verificación de las especificaciones técnicas contribuyen a mantener condiciones de ejecución adecuadas y reducir riesgos durante las operaciones.',
    ],
    image: obraThumb('seguridad_y_calidad'),
  },
  faqTitle: 'Preguntas Frecuentes',
  faqs,
};
