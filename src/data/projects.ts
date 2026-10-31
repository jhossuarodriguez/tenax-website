import type { ImageMetadata } from 'astro';
import type { ImageAsset } from '@/types';
import { imageVersions } from '@/data/images';

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

/**
 * Fotos de obra de Tenax (clave = nombre del archivo), con sus textos originales. Todas cuentan para los sectores,
 * pero solo tienen imagen las que se muestran (las de src/assets/tenax/).
 */
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

const tenaxMasters = import.meta.glob<{ default: ImageMetadata }>('/src/assets/tenax/*.avif', { eager: true });

/** Versiones de cada foto del sitio anterior, generadas al compilar desde su imagen única (reescalada con IA, 1600 px). */
const tenaxVersions = Object.fromEntries(
  await Promise.all(
    Object.entries(tenaxMasters).map(async ([path, image]) => [path.slice(path.lastIndexOf('/') + 1, -'.avif'.length), await imageVersions(image.default)]),
  ),
);

/**
 * Foto del sitio anterior: miniatura de 800 px con srcset hasta la original y la original para el visor. Falla el
 * build si la foto no tiene imagen en src/assets/tenax/.
 */
export const tenaxImage = (file: string, alt: string, position?: string): ImageAsset => {
  const image = tenaxVersions[file];
  if (!image) throw new Error(`Foto del sitio anterior sin imagen en src/assets/tenax/: "${file}"`);
  const { thumb, srcset, original, width, height } = image;
  return { src: thumb, srcset, fullSrc: original, alt, position, width, height };
};

/** Imagen de una foto de obra del sitio anterior, con su título como texto alternativo. */
export const projectPhoto = (id: ProjectPhotoId, position?: string): ImageAsset => tenaxImage(id, projectPhotos[id].title, position);

/** "Navieras Haina, Santo Domingo, RD" → "Navieras Haina, Santo Domingo". */
export const shortLocation = (location: string): string => location.replace(/, (RD|República Dominicana)$/, '');

/** Pie de foto de la galería: "Título — Ubicación". */
export const projectCaption = (id: ProjectPhotoId): string => `${projectPhotos[id].title} — ${shortLocation(projectPhotos[id].location)}`;
