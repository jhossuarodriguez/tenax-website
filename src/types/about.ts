import type { ImageAsset, NavItem, PageBannerData } from '@/types/common';

/** Fragmento de texto enriquecido: texto plano o enlace en línea. */
export type AboutRichSegment = string | { text: string; href: string };

/** Párrafo compuesto por segmentos (permite enlaces dentro del texto). */
export type AboutRichParagraph = AboutRichSegment[];

/** Fila de texto y foto con franjas de Sobre nosotros (Misión y "Planificación y ejecución coordinadas"). */
export interface AboutFeatureRow {
  /** Ancla para los enlaces del submenú de Nosotros. */
  id?: string;
  image: ImageAsset;
  /** Lado en el que va la foto en escritorio; en móvil siempre va arriba. */
  imageSide: 'left' | 'right';
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

/** Integrante de "Nuestro equipo": retrato, nombre con su título y cargo. */
export interface AboutTeamMember {
  name: string;
  role: string;
  photo: ImageAsset;
}

/**
 * Bajo el banner (Canva, pág. 19): "¿Quiénes somos?" y "Nuestro equipo" en dos columnas y la banda de sectores con
 * el botón a los proyectos.
 */
export interface AboutIntroData {
  /** Ancla para el enlace "Quiénes Somos" del submenú. */
  id: string;
  who: { title: string; paragraphs: string[] };
  team: {
    /** Ancla para el enlace "Nuestro Equipo" del submenú. */
    id: string;
    title: string;
    text: string;
    members: AboutTeamMember[];
  };
  sectors: { title: string; items: NavItem[] };
  cta: NavItem;
}
