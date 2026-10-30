import type { ImageAsset } from '@/types/common';

export type PortfolioCategoryId =
  | 'industrial'
  | 'comercial'
  | 'energia'
  | 'institucional-educativo'
  | 'residencial'
  | 'agroindustrial'
  | 'logistica-almacenamiento'
  | 'puentes';

/** Categoría del portafolio: tiene su propia página con la cuadrícula de proyectos. */
export interface PortfolioCategory {
  id: PortfolioCategoryId;
  title: string;
  intro: string;
  href: string;
}

/** Dato técnico de la ficha ("Área de intervención: 49,642.71 m²"). */
export interface ProjectSpec {
  label: string;
  value: string;
}

/** Proyecto del portafolio: tarjeta en su categoría y ficha propia. */
export interface PortfolioProject {
  slug: string;
  href: string;
  category: PortfolioCategory;
  title: string;
  /** Sin el país; la ficha añade "República Dominicana". */
  location?: string;
  /** Tipo de obra: el servicio de Tenax al que corresponde. */
  service: { title: string; href: string };
  /** Resumen de una línea para la meta descripción. */
  summary: string;
  /** Titular naranja de la ficha. */
  lead?: string;
  body: string[];
  /** Texto bajo la segunda foto. */
  closing: string[];
  specs: ProjectSpec[];
  cover: ImageAsset;
  /** Segunda foto, a todo el ancho de la ficha. */
  feature?: ImageAsset;
  /** Resto de fotos del proceso constructivo. */
  gallery: ImageAsset[];
}
