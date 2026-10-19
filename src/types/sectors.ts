import type { ImageAsset, NavItem, PageHeroData } from '@/types/common';

/** Estilo del distintivo de código (badge sobre la imagen y caja del kicker). */
export type SectorBadgeVariant = 'signal' | 'caution' | 'steel' | 'ink' | 'outline';

export interface Sector {
  /** Ancla usada por los chips del hero (#id). */
  id: string;
  /** Código de dos letras mostrado en el badge. */
  code: string;
  /** Número grande con contorno ("01"). Opcional: el último sector del original no lo tiene. */
  number?: string;
  /** Etiqueta del chip del hero. */
  chipLabel: string;
  kicker: string;
  title: string;
  description: string;
  tags: string[];
  image: ImageAsset;
  badge: SectorBadgeVariant;
}

export interface MachineryItem {
  image: ImageAsset;
  caption: string;
}

export interface MachinerySection {
  kicker: string;
  title: string;
  description: string;
  items: MachineryItem[];
}

/** Banda roja de llamada a la acción al pie de Sectores y Galería. */
export interface CtaBandData {
  title: string;
  text: string;
  button: NavItem;
}

export interface SectorsPageData {
  hero: PageHeroData;
  sectors: Sector[];
  machinery: MachinerySection;
  cta: CtaBandData;
}
