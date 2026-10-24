import type { ImageAsset } from '@/types/common';

/** Proyecto del portafolio (tarjetas del listado de proyectos). */
export interface PortfolioProject {
  id: string;
  title: string;
  /** Etiquetas: "Uno · Dos · Tres". */
  eyebrow: string;
  description: string;
  location: string;
  cover: ImageAsset;
  gallery: ImageAsset[];
}
