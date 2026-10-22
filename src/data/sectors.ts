import type { CtaBandData, MachinerySection, Sector, SectorBadgeVariant, SectorsPageData } from '@/types';
import { categoryLabels, projectPhoto, projectPhotos, type ProjectCategory, type ProjectPhotoId } from '@/data/projects';

const img = (file: string): string => `/images/optimized/tenax/${file}.avif`;

interface SectorSeed {
  id: string;
  code: string;
  title: string;
  /** Categorías de proyecto que agrupa (de ahí salen el número de proyectos y las ubicaciones). */
  categories: ProjectCategory[];
  description: string;
  image: ProjectPhotoId;
  badge: SectorBadgeVariant;
}

/** Sectores = categorías de los proyectos de Tenax; las descripciones vienen de sus servicios y proyectos. */
const seeds: SectorSeed[] = [
  {
    id: 'paneles-solares',
    code: 'PS',
    title: categoryLabels['paneles-solares'],
    categories: ['paneles-solares'],
    description: 'Hincado, montaje y colocación de paneles solares en parques fotovoltaicos para fábricas agroindustriales, desde las bases estructurales hasta la instalación final.',
    image: 'Paneles-1',
    badge: 'signal',
  },
  {
    id: 'naves-industriales',
    code: 'NI',
    title: categoryLabels['naves-industriales'],
    categories: ['naves-industriales'],
    description: 'Diseñamos, fabricamos e instalamos estructuras metálicas de alta calidad para proyectos industriales, comerciales y residenciales.',
    image: 'Naves-3',
    badge: 'caution',
  },
  {
    id: 'pavimentos-cimentaciones',
    code: 'PC',
    title: categoryLabels['pavimentos-cimentaciones'],
    categories: ['pavimentos-cimentaciones'],
    description: 'Ejecutamos obras de hormigón armado con los más altos estándares de calidad, desde cimentaciones hasta estructuras completas.',
    image: 'Pavimentos-1',
    badge: 'steel',
  },
  {
    id: 'remodelaciones',
    code: 'RE',
    title: 'Remodelaciones y Control de Acceso',
    categories: ['remodelacion', 'estructura-metalica'],
    description: 'Remodelación de oficinas y obras de control de acceso con verjas perimetrales metálicas.',
    image: 'Remodelacion-1',
    badge: 'ink',
  },
];

/** "Navieras Haina, Santo Domingo, RD" → "Navieras Haina, Santo Domingo". */
const shortLocation = (location: string): string => location.replace(/, (RD|República Dominicana)$/, '');

export const sectors: Sector[] = seeds.map((s, i) => {
  const photos = Object.values(projectPhotos).filter((p) => s.categories.includes(p.category));
  const projects = new Set(photos.map((p) => `${p.title}|${p.location}`)).size;
  return {
    id: s.id,
    code: s.code,
    number: String(i + 1).padStart(2, '0'),
    chipLabel: s.title,
    kicker: `${projects} ${projects === 1 ? 'proyecto realizado' : 'proyectos realizados'}`,
    title: s.title,
    description: s.description,
    tags: [...new Set(photos.map((p) => shortLocation(p.location)))],
    image: projectPhoto(s.image),
    badge: s.badge,
  };
});

export const machinery: MachinerySection = {
  kicker: '// Equipos',
  title: 'Equipos especializados y maquinaria pesada',
  description: 'Contamos con equipos especializados y maquinaria pesada de última generación para realizar proyectos con eficiencia y precisión.',
  items: [
    { image: { src: img('banner1'), alt: 'Excavadora hidráulica en obra' }, caption: 'Excavadoras hidráulicas' },
    { image: { src: img('crane'), alt: 'Grúa torre en una obra' }, caption: 'Grúas' },
    { image: { src: img('banner5'), alt: 'Estructura metálica de una cubierta' }, caption: 'Estructura metálica' },
    { image: { src: img('banner2'), alt: 'Supervisión técnica de una excavación' }, caption: 'Supervisión en obra' },
  ],
};

/** Banda de llamada a la acción compartida por Sectores y Galería. */
export const ctaBand: CtaBandData = {
  title: '¿Tienes un proyecto en mente?',
  text: 'Contáctanos para una cotización personalizada. Nuestro equipo está listo para ayudarte a hacer realidad tu proyecto.',
  button: { label: 'Solicitar cotización', href: '/contacto/' },
};

export const sectorsPage: SectorsPageData = {
  hero: {
    breadcrumbs: [{ label: 'Inicio', href: '/' }, { label: 'Sectores' }],
    eyebrow: 'Sectores',
    title: 'Nuestros',
    titleEmphasis: 'Sectores',
    subtitle: 'Paneles solares, naves industriales, pavimentos y cimentaciones, y remodelaciones en toda la República Dominicana.',
    strip: ['80 proyectos completados', '80 clientes satisfechos', '13 años en el mercado'],
  },
  sectors,
  machinery,
  cta: ctaBand,
};
