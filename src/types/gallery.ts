import type { ImageAsset, PageHeroData } from '@/types/common';
import type { CtaBandData } from '@/types/sectors';

export interface GalleryPhoto {
  image: ImageAsset;
  caption: string;
}

/** Banda oscura con etiquetas de sectores bajo la galería. */
export interface GalleryBand {
  kicker: string;
  title: string;
  text: string;
  tags: string[];
}

export interface GalleryPageData {
  /** Título (sin el sufijo de la marca) y descripción para buscadores y redes. */
  seo: { title: string; description: string };
  hero: PageHeroData;
  photos: GalleryPhoto[];
  band: GalleryBand;
  cta: CtaBandData;
}
