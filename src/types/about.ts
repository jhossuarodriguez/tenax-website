import type { ImageAsset, PageHeroData } from '@/types/common';

/** Fragmento de texto enriquecido: texto plano o enlace en línea. */
export type AboutRichSegment = string | { text: string; href: string };

/** Párrafo compuesto por segmentos (permite enlaces dentro del texto). */
export type AboutRichParagraph = AboutRichSegment[];

/** Fila "imagen + tarjeta con cuadrícula" de Sobre nosotros. */
export interface AboutFeatureRow {
  image: ImageAsset;
  /** Lado en el que va la imagen; también define el orden al apilarse en móvil. */
  imageSide: 'left' | 'right';
  /** light: fondo gris muy claro. white: fondo blanco. */
  tone: 'light' | 'white';
  title: string;
  /** brand: título rojo. heading: título gris oscuro. */
  titleTone: 'brand' | 'heading';
  subtitle?: string;
  paragraphs: AboutRichParagraph[];
}

export interface AboutFaqPoint {
  label: string;
  text: string;
}

export interface AboutFaqItem {
  question: string;
  intro: string;
  points: AboutFaqPoint[];
  /** Abierta al cargar la página. */
  open?: boolean;
}

/** Banda "Trabajemos juntos" con imagen de fondo oscurecida. */
export interface AboutConnectBand {
  prefix: string;
  title: string;
  description: string;
  background: ImageAsset;
}

export interface AboutPageData {
  seo: { title: string; description: string };
  hero: PageHeroData;
  rows: AboutFeatureRow[];
  faqTitle: string;
  faqs: AboutFaqItem[];
  band: AboutConnectBand;
}
