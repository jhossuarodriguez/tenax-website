import type { ImageAsset, PageHeroData } from '@/types/common';
import type { CtaBandData } from '@/types/sectors';

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

/** Equipos con los que se ejecuta un servicio (la lista "Equipos" de su página de detalle). */
export interface ServiceEquipment {
  title: string;
  href: string;
  items: string[];
}

export interface ServiceEquipmentSection {
  kicker: string;
  title: string;
  description: string;
  services: ServiceEquipment[];
}

export interface EquipmentPageData {
  /** Título (sin el sufijo de la marca) y descripción para buscadores y redes. */
  seo: { title: string; description: string };
  hero: PageHeroData;
  machinery: MachinerySection;
  byService: ServiceEquipmentSection;
  cta: CtaBandData;
}
