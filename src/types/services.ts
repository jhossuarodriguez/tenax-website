import type { ImageAsset, NavItem, PageHeroData } from '@/types/common';

export interface ServiceSection {
  /** Ancla de la sección (para el enlace secundario del hero). */
  id?: string;
  label: string;
  body: string;
}

/**
 * Variantes de la galería de miniaturas del detalle:
 * - `tiles`: cuadrícula auto-ajustable de cuadrados (imagen recortada).
 * - `tiles-contain`: igual, pero la imagen se muestra completa sobre fondo arena.
 * - `pair`: dos columnas 4:3 centradas (una columna en pantallas ≤ 1024px).
 */
export type ServiceGalleryLayout = 'tiles' | 'tiles-contain' | 'pair';

export interface ServiceGallery {
  layout: ServiceGalleryLayout;
  images: ImageAsset[];
}

/** Lista con viñetas del detalle (características, beneficios, equipos). */
export interface ServiceList {
  /** Ancla de la lista (destino posible del enlace secundario del hero). */
  id: string;
  label: string;
  items: string[];
}

export interface ServiceHeroLink {
  label: string;
  /** Id de la sección a la que apunta. */
  target: string;
}

export interface Service {
  slug: string;
  title: string;
  /** Categoría corta mostrada como eyebrow ("// Categoría") y en la barra lateral. */
  category: string;
  /** Línea de etiquetas de la tarjeta: "Uno · Dos · Tres". */
  tags: string;
  /** Texto de la tarjeta en el listado. */
  excerpt: string;
  /** Subtítulo del hero en la página de detalle. */
  tagline: string;
  /** Imagen de la tarjeta del listado y de la portada. */
  image: ImageAsset;
  /** Imagen panorámica (21:9) del detalle; algunos servicios solo tienen galería. */
  heroImage?: ImageAsset;
  gallery?: ServiceGallery;
  /** Enlace secundario del hero ("Ver aplicaciones ↓"). */
  heroLink: ServiceHeroLink;
  /** Descripción general, proceso, etc. */
  sections: ServiceSection[];
  lists: ServiceList[];
  /** Slugs de servicios relacionados. */
  related: string[];
  /**
   * En pantallas ≤ 1024px oculta la línea vertical y los puntos del artículo
   * (en el original solo algunas páginas lo hacían).
   */
  collapseRailOnTablet: boolean;
}

/** Textos de la página /servicios/ y del bloque de llamada a la acción del detalle. */
export interface ServicesPageContent {
  /** Título (sin el sufijo de la marca) y descripción para buscadores y redes. */
  seo: { title: string; description: string };
  hero: PageHeroData;
  heading: string;
  intro: string;
  cta: { title: string; text: string; action: NavItem };
  /** Texto de la tarjeta oscura de la barra lateral del detalle. */
  sideCtaText: string;
}
