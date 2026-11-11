import type { ImageAsset, NavItem, PageBannerData } from '@/types/common';

/** Fragmento de texto enriquecido: texto plano o enlace en línea. */
export type AboutRichSegment = string | { text: string; href: string };

/** Párrafo compuesto por segmentos (permite enlaces dentro del texto). */
export type AboutRichParagraph = AboutRichSegment[];

/** Fila "imagen + tarjeta con cuadrícula" de Sobre nosotros. */
export interface AboutFeatureRow {
  /** Ancla para los enlaces del submenú de Nosotros. */
  id?: string;
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

export interface AboutPageData {
  seo: { title: string; description: string };
  hero: PageBannerData;
  intro: AboutIntroData;
  rows: AboutFeatureRow[];
  safety: AboutSafetyData;
  faqTitle: string;
  faqs: AboutFaqItem[];
}

/** "Seguridad, calidad y medio ambiente": collage de fotos de obra y texto a la derecha. */
export interface AboutSafetyData {
  id: string;
  title: string;
  paragraphs: string[];
  cta: NavItem;
  /** Tres columnas de fotos, de arriba abajo. */
  columns: ImageAsset[][];
}

/** "Somos Tenax": texto y foto (como "We are Severfield") y, debajo, quiénes somos, sectores y dónde trabajamos. */
export interface AboutIntroData {
  /** Ancla para el enlace "Quiénes Somos" del submenú. */
  id: string;
  title: string;
  lede: string;
  text: string;
  image: ImageAsset;
  who: { title: string; paragraphs: string[] };
  sectors: { title: string; items: NavItem[] };
  cta: NavItem;
  where: { title: string; text: string };
}
