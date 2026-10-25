import type { GalleryPageData, GalleryPhoto } from '@/types';
import { ctaBand } from '@/data/sectors';
import { obraCaption, obraPhotos, obraThumb, type ObraPhotoId } from '@/data/obras';
import { projectCaption, projectPhoto, type ProjectPhotoId } from '@/data/projects';
import { services } from '@/data/services';

const img = (file: string): string => `/images/optimized/tenax/${file}.avif`;

/** Fotos de obra de "FOTOS TENAX": miniatura en la cuadrícula y foto completa en el visor. */
const obras: GalleryPhoto[] = (Object.keys(obraPhotos) as ObraPhotoId[]).map((id) => ({
  image: obraThumb(id),
  caption: obraCaption(id),
}));

/**
 * Fotos del portafolio del sitio anterior que no salían en ninguna página.
 * Naves-1 y Naves-2 no van: son las mismas fotos que nave-industrial-1 y nave-fabrica-plasticos-2.
 */
const portfolioIds: ProjectPhotoId[] = [
  'Naves-4',
  'Paneles-2',
  'Paneles-3',
  'Paneles-4',
  'Pavimentos-2',
  'Pavimentos-3',
  'Pavimentos-4',
  'villa-unifamiliar-lujo',
];

/** Fotos de los banners del sitio anterior; no tienen ubicación registrada. */
const banners: GalleryPhoto[] = [
  {
    image: { src: img('banner3'), alt: 'Marquesina metálica y casetas de contenedores en el acceso vehicular de un patio de contenedores' },
    caption: 'Control de acceso en patio de contenedores',
  },
  {
    image: { src: img('banner4'), alt: 'Nave de estructura metálica con cerramientos azules y vehículos estacionados al frente' },
    caption: 'Nave con estructura metálica',
  },
  {
    image: { src: img('banner5'), alt: 'Cubierta de lámina sobre vigas de acero vista desde abajo, sobre una estructura azul' },
    caption: 'Cubierta de estructura metálica',
  },
  {
    image: { src: img('about-image'), alt: 'Render de un parqueo con techos de paneles solares sobre los vehículos y una caseta de vigilancia' },
    caption: 'Render de parqueo con paneles solares',
  },
];

export const galleryPhotos: GalleryPhoto[] = [
  ...obras,
  ...portfolioIds.map((id) => ({ image: projectPhoto(id), caption: projectCaption(id) })),
  ...banners,
];

export const galleryPage: GalleryPageData = {
  seo: {
    title: 'Galería de obras',
    description:
      'Fotos de nuestras obras en República Dominicana: movimiento de tierra, naves industriales, puentes, pavimentos y estructuras metálicas.',
  },
  hero: {
    breadcrumbs: [{ label: 'Inicio', href: '/' }, { label: 'Galería' }],
    eyebrow: 'Galería',
    title: 'Nuestras',
    titleEmphasis: 'Obras',
    subtitle:
      'Explora nuestras obras: movimiento de tierra, naves industriales, puentes y alcantarillados, pavimentos, estructuras metálicas y más.',
    strip: ['Naves industriales', 'Estructuras metálicas', 'Cimentaciones', 'Pavimentos', 'Movimiento de tierras', 'Obras civiles'],
  },
  photos: galleryPhotos,
  band: {
    kicker: '// Lo que construimos',
    title: 'Construimos estructuras, elevamos tu proyecto',
    text: 'Contamos con equipos especializados y maquinaria pesada de última generación para realizar proyectos con eficiencia y precisión en toda la República Dominicana.',
    tags: services.map((s) => s.title),
  },
  cta: ctaBand,
};
