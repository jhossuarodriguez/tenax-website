import type { ImageAsset, PortfolioProject } from '@/types';

export type ProjectCategory = 'paneles-solares' | 'naves-industriales' | 'pavimentos-cimentaciones' | 'remodelacion' | 'estructura-metalica';

/** Nombres de las categorías (los filtros del sitio de Tenax, más las dos sin filtro propio). */
export const categoryLabels: Record<ProjectCategory, string> = {
  'paneles-solares': 'Paneles Solares',
  'naves-industriales': 'Naves Industriales',
  'pavimentos-cimentaciones': 'Pavimentos y Cimentaciones',
  remodelacion: 'Remodelación',
  'estructura-metalica': 'Estructura Metálica',
};

interface ProjectPhoto {
  title: string;
  location: string;
  description: string;
  category: ProjectCategory;
}

/** Fotos de obra de Tenax (clave = nombre del archivo), con sus textos originales. */
export const projectPhotos = {
  'Paneles-1': { title: 'Paneles solares en parque fotovoltaico para fábrica agroindustrial', location: 'El Valle, Hato Mayor, RD', description: 'Proyecto de paneles solares en parque fotovoltaico para fábrica agroindustrial.', category: 'paneles-solares' },
  'Paneles-2': { title: 'Paneles solares en parque fotovoltaico para fábrica agroindustrial', location: 'El Valle, Hato Mayor, RD', description: 'Proyecto de paneles solares en parque fotovoltaico para fábrica agroindustrial.', category: 'paneles-solares' },
  'Paneles-3': { title: 'Paneles solares en parque fotovoltaico para fábrica agroindustrial', location: 'El Seibo, RD', description: 'Proyecto de paneles solares en parque fotovoltaico para fábrica agroindustrial.', category: 'paneles-solares' },
  'Paneles-4': { title: 'Hincado, montaje y colocación de paneles solares en el km 23', location: 'Autopista Duarte, km 23, RD', description: 'Proyecto de hincado, montaje y colocación de paneles solares en el km 23.', category: 'paneles-solares' },
  'Remodelacion-1': { title: 'Remodelación de oficina', location: 'Santo Domingo, RD', description: 'Proyecto de remodelación de oficina.', category: 'remodelacion' },
  'villa-unifamiliar-lujo': { title: 'Control de acceso: verja perimetral metálica', location: 'Navieras Haina, Santo Domingo, RD', description: 'Proyecto de control de acceso con verja perimetral metálica.', category: 'estructura-metalica' },
  'Naves-1': { title: 'Envarillado y vaciado de losa en caja de ascensor', location: 'El Valle, Hato Mayor, RD', description: 'Proyecto de envarillado y vaciado de losa en caja de ascensor.', category: 'naves-industriales' },
  'Naves-2': { title: 'Nave industrial para fábrica de plásticos', location: 'Santo Domingo Oeste, República Dominicana', description: 'Proyecto de nave industrial para fábrica de plásticos.', category: 'naves-industriales' },
  'Naves-3': { title: 'Nave industrial para uso comercial', location: 'Villa Mella, RD', description: 'Proyecto de nave industrial para uso comercial.', category: 'naves-industriales' },
  'Naves-4': { title: 'Interior del techado en nave industrial para uso comercial', location: 'Villa Mella, RD', description: 'Proyecto del interior del techado en nave industrial para uso comercial.', category: 'naves-industriales' },
  'Pavimentos-1': { title: 'Envarillado y vaciado de losa en caja de ascensor', location: 'Santo Domingo, RD', description: 'Proyecto de envarillado y vaciado de losa en caja de ascensor.', category: 'pavimentos-cimentaciones' },
  'Pavimentos-2': { title: 'Bases estructurales para paneles solares', location: 'Villa Mella, RD', description: 'Proyecto de bases estructurales para paneles solares.', category: 'pavimentos-cimentaciones' },
  'Pavimentos-3': { title: 'Acceso peatonal con rampa escalonada', location: 'Navieras Haina, Santo Domingo, RD', description: 'Proyecto de acceso peatonal con rampa escalonada.', category: 'pavimentos-cimentaciones' },
  'Pavimentos-4': { title: 'Construcción de muro de contención tipo AB', location: 'Km 13, Autopista Duarte, República Dominicana', description: 'Proyecto de construcción de muro de contención tipo AB.', category: 'pavimentos-cimentaciones' },
} satisfies Record<string, ProjectPhoto>;

export type ProjectPhotoId = keyof typeof projectPhotos;

/** Imagen de una foto de obra (AVIF optimizado), con su título como texto alternativo. */
export const projectPhoto = (id: ProjectPhotoId, position?: string): ImageAsset => ({
  src: `/images/optimized/tenax/${id}.avif`,
  alt: projectPhotos[id].title,
  position,
});

/** Proyectos del portafolio: las fotos del mismo título y ubicación se agrupan en una tarjeta. */
const projects: { id: string; caption: string; photos: [ProjectPhotoId, ...ProjectPhotoId[]] }[] = [
  { id: 'paneles-solares-hato-mayor', caption: 'Parque fotovoltaico agroindustrial', photos: ['Paneles-1', 'Paneles-2'] },
  { id: 'remodelacion-oficina', caption: 'Remodelación de oficina', photos: ['Remodelacion-1'] },
  { id: 'verja-perimetral-haina', caption: 'Verja perimetral metálica', photos: ['villa-unifamiliar-lujo'] },
  { id: 'nave-industrial-plasticos', caption: 'Nave industrial para fábrica de plásticos', photos: ['Naves-2'] },
  { id: 'paneles-solares-el-seibo', caption: 'Parque fotovoltaico en El Seibo', photos: ['Paneles-3'] },
  { id: 'paneles-solares-km-23', caption: 'Paneles solares en el km 23', photos: ['Paneles-4'] },
  { id: 'losa-caja-ascensor-hato-mayor', caption: 'Losa en caja de ascensor', photos: ['Naves-1'] },
  { id: 'nave-industrial-villa-mella', caption: 'Nave industrial para uso comercial', photos: ['Naves-3', 'Naves-4'] },
  { id: 'losa-caja-ascensor-santo-domingo', caption: 'Losa en caja de ascensor', photos: ['Pavimentos-1'] },
  { id: 'bases-paneles-solares', caption: 'Bases para paneles solares', photos: ['Pavimentos-2'] },
  { id: 'rampa-peatonal-haina', caption: 'Acceso peatonal con rampa', photos: ['Pavimentos-3'] },
  { id: 'muro-contencion-km-13', caption: 'Muro de contención tipo AB', photos: ['Pavimentos-4'] },
];

export const portfolio: PortfolioProject[] = projects.map(({ id, caption, photos: [main, ...rest] }) => {
  const photo = projectPhotos[main];
  return {
    id,
    title: photo.title,
    caption,
    eyebrow: `${categoryLabels[photo.category]} · ${photo.location}`,
    description: photo.description,
    location: photo.location,
    cover: projectPhoto(main),
    gallery: rest.map((p) => projectPhoto(p)),
  };
});

/** Proyectos del carrusel de la portada: los destacados del sitio de Tenax. */
export const homeCarouselIds = [
  'paneles-solares-hato-mayor',
  'remodelacion-oficina',
  'verja-perimetral-haina',
  'nave-industrial-plasticos',
  'nave-industrial-villa-mella',
] as const;
