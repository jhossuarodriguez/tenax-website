import type { ImageAsset, NavItem, PageBannerData } from '@/types/common';

/** Fragmento de texto enriquecido: texto plano, enlace en línea o texto destacado en negrita. */
export type AboutRichSegment = string | { text: string; href: string } | { strong: string };

/** Párrafo compuesto por segmentos (permite enlaces dentro del texto). */
export type AboutRichParagraph = AboutRichSegment[];

/** Fila de texto y foto de Sobre nosotros, con el formato de "Somos Tenax". */
export interface AboutFeatureRow {
  /** Ancla para los enlaces del submenú de Nosotros. */
  id?: string;
  image: ImageAsset;
  /** Lado en el que va la foto en escritorio; en móvil siempre va arriba. */
  imageSide: 'left' | 'right';
  /** Color del panel que va detrás de la foto, de los del banner: gris acero o naranja (brand-dark). */
  tone: 'steel' | 'brand';
  title: string;
  /** Frase destacada bajo el título. */
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
