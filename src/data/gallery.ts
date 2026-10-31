import type { GalleryPageData, GalleryPhoto } from '@/types';
import { ctaBand } from '@/data/sectors';
import { obraCaption, obraPhotos, obraThumb, type ObraPhotoId } from '@/data/obras';
import { projectCaption, projectPhoto, tenaxImage, type ProjectPhotoId } from '@/data/projects';
import { services } from '@/data/services';

/** Fotos de obra de "FOTOS TENAX": miniatura en la cuadrícula y foto completa en el visor. */
const obras: GalleryPhoto[] = (Object.keys(obraPhotos) as ObraPhotoId[]).map((id) => ({
  image: obraThumb(id),
  caption: obraCaption(id),
}));

/**
 * Fotos del portafolio del sitio anterior que no salían en ninguna página.
 * No van las que ya están en las de obra a mejor calidad: Naves-1, Naves-2, Pavimentos-4 y villa-unifamiliar-lujo
 * son nave-industrial-1, nave-fabrica-plasticos-2, muro-contencion-ab-2 y porton-acceso-1.
 */
const portfolioIds: ProjectPhotoId[] = [
  'Naves-4',
  'Paneles-2',
  'Paneles-3',
  'Paneles-4',
  'Pavimentos-2',
  'Pavimentos-3',
];

/** Fotos de los banners del sitio anterior; no tienen ubicación registrada. */
const banners: GalleryPhoto[] = [
  {
    image: tenaxImage('banner3', 'Marquesina metálica y casetas de contenedores en el acceso vehicular de un patio de contenedores'),
    caption: 'Control de acceso en patio de contenedores',
  },
  {
    image: tenaxImage('banner4', 'Nave de estructura metálica con cerramientos azules y vehículos estacionados al frente'),
    caption: 'Nave con estructura metálica',
  },
  {
    image: tenaxImage('banner5', 'Cubierta de lámina sobre vigas de acero vista desde abajo, sobre una estructura azul'),
    caption: 'Cubierta de estructura metálica',
  },
  {
    image: tenaxImage('about-image', 'Render de un parqueo con techos de paneles solares sobre los vehículos y una caseta de vigilancia'),
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
      'Fotos de nuestras obras en República Dominicana: movimiento de tierras, naves industriales, puentes, pavimentos y estructuras metálicas.',
  },
  hero: {
    breadcrumbs: [{ label: 'Inicio', href: '/' }, { label: 'Galería' }],
    eyebrow: 'Galería',
    title: 'Nuestras',
    titleEmphasis: 'Obras',
    subtitle:
      'Explora nuestras obras: movimiento de tierras, naves industriales, puentes y alcantarillados, pavimentos, estructuras metálicas y más.',
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
