import type { ImageAsset } from '@/types/common';

/** Proyecto del portafolio (tarjetas del listado y carrusel de la portada). */
export interface PortfolioProject {
  id: string;
  title: string;
  /** Título corto usado en el pie de foto del carrusel de la portada. */
  caption: string;
  /** Etiquetas: "Uno · Dos · Tres". */
  eyebrow: string;
  description: string;
  location: string;
  cover: ImageAsset;
  gallery: ImageAsset[];
}
