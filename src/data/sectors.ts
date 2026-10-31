import type { CtaBandData, ImageAsset, Sector, SectorBadgeVariant, SectorsPageData } from '@/types';
import { obraThumb } from '@/data/obras';
import { categoryLabels, projectPhoto, projectPhotos, shortLocation, type ProjectCategory } from '@/data/projects';

interface SectorSeed {
  id: string;
  code: string;
  title: string;
  /** Categorías de proyecto que agrupa (de ahí salen el número de proyectos y las ubicaciones). */
  categories: ProjectCategory[];
  description: string;
  /** Foto de obra de "FOTOS TENAX" si la hay; si no, la del sitio anterior. */
  image: ImageAsset;
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
    image: projectPhoto('Paneles-1'),
    badge: 'signal',
  },
  {
    id: 'naves-industriales',
    code: 'NI',
    title: categoryLabels['naves-industriales'],
    categories: ['naves-industriales'],
    description: 'Diseñamos, fabricamos e instalamos estructuras metálicas de alta calidad para proyectos industriales, comerciales y residenciales.',
    image: obraThumb('nave-industrial-3'),
    badge: 'caution',
  },
  {
    id: 'pavimentos-cimentaciones',
    code: 'PC',
    title: categoryLabels['pavimentos-cimentaciones'],
    categories: ['pavimentos-cimentaciones'],
    description: 'Ejecutamos obras de hormigón armado con los más altos estándares de calidad, desde cimentaciones hasta estructuras completas.',
    image: obraThumb('envarillado-losa-1'),
    badge: 'steel',
  },
  {
    id: 'remodelaciones',
    code: 'RE',
    title: 'Remodelaciones y Control de Acceso',
    categories: ['remodelacion', 'estructura-metalica'],
    description: 'Remodelación de oficinas y obras de control de acceso con verjas perimetrales metálicas.',
    image: projectPhoto('Remodelacion-1'),
    badge: 'ink',
  },
];

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
    image: s.image,
    badge: s.badge,
  };
});

/** Banda de llamada a la acción compartida por Sectores, Equipos y Galería. */
export const ctaBand: CtaBandData = {
  title: '¿Tienes un proyecto en mente?',
  text: 'Contáctanos para una cotización personalizada. Nuestro equipo está listo para ayudarte a hacer realidad tu proyecto.',
  button: { label: 'Solicitar cotización', href: '/contacto/' },
};

export const sectorsPage: SectorsPageData = {
  seo: {
    title: 'Sectores que atendemos',
    description:
      'Paneles solares, naves industriales, pavimentos y cimentaciones, remodelaciones y control de acceso: los sectores en los que construimos en toda la RD.',
  },
  hero: {
    breadcrumbs: [{ label: 'Inicio', href: '/' }, { label: 'Sectores' }],
    eyebrow: 'Sectores',
    title: 'Nuestros',
    titleEmphasis: 'Sectores',
    subtitle: 'Paneles solares, naves industriales, pavimentos y cimentaciones, y remodelaciones en toda la República Dominicana.',
    strip: ['Logístico', 'Agroindustrial', 'Energético', 'Turístico'],
  },
  sectors,
  cta: ctaBand,
};
