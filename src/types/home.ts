import type { ImageAsset, NavItem } from '@/types/common';

/** Botón de la portada. `brand` (naranja) y `white` (blanco) son los dos estilos del hero. */
export interface HomeButton extends NavItem {
  variant: 'brand' | 'white';
}

export interface HomeHeroData {
  /** Primera línea del H1, pequeña: lleva la ubicación para buscadores. */
  kicker: string;
  /** Líneas grandes del H1, cada una sobre su recuadro naranja. */
  lines: string[];
  text: string;
  /** Foto de fondo; se carga con prioridad alta porque es lo primero que se ve. */
  image: ImageAsset;
  buttons: HomeButton[];
}

/** Fragmento de párrafo; `highlight` va resaltado (en naranja en la visión). */
export type RichSegment = string | { highlight: string };

export type HomeValueIcon = 'compromiso' | 'excelencia' | 'seguridad' | 'integridad' | 'precision' | 'responsabilidad';

/** Sección bajo el hero: visión, cifras y valores, cada fila con su etiqueta a la izquierda. */
export interface HomeVisionData {
  visionLabel: string;
  title: string;
  text: RichSegment[];
  statsLabel: string;
  stats: { value: string; label: string }[];
  valuesLabel: string;
  values: { icon: HomeValueIcon; label: string }[];
}

/** Banda oscura con texto a la izquierda y foto (o video) a la derecha. */
export interface HomeFeatureBandData {
  eyebrow: string;
  title: string;
  text: string;
  cta: NavItem;
  image: ImageAsset;
  /** Video opcional sobre la foto (pendiente: el del dron en Las Terrenas). */
  video?: { mp4: string; webm?: string };
}

/** Foto con pie y enlace: tarjetas de especialidades y de proyectos destacados de la portada. */
export interface HomeLinkedPhoto {
  image: ImageAsset;
  /** Pie en mayúsculas bajo la foto. */
  caption: string;
  href: string;
}

/**
 * Columna del collage de especialidades. Ancho y altos son las medidas del diseño de Tenax en Canva:
 * solo cuentan sus proporciones, para que las tres columnas terminen a la misma altura.
 */
export interface HomeCollageColumn {
  width: number;
  photos: { image: ImageAsset; height: number }[];
}

/** "Nuestras especialidades": banda oscura con collage y texto; debajo, una foto por especialidad. */
export interface HomeSpecialtiesData {
  title: string;
  lead: string;
  /** `highlight` va en negrita. */
  text: RichSegment[];
  /** Columnas del collage, de izquierda a derecha. */
  collage: HomeCollageColumn[];
  items: HomeLinkedPhoto[];
}

/** "Proyectos destacados": banda oscura con texto y foto grande; debajo, tres proyectos. */
export interface HomeShowcaseData {
  title: string;
  paragraphs: string[];
  image: ImageAsset;
  projects: HomeLinkedPhoto[];
}

export interface HomeContactData {
  title: string;
  text: string;
}

export interface HomeCtaBandData {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}

export interface HomeContent {
  /** Título (sin el sufijo de la marca) y descripción para buscadores y redes. */
  seo: { title: string; description: string };
  hero: HomeHeroData;
  vision: HomeVisionData;
  earthworks: HomeFeatureBandData;
  specialties: HomeSpecialtiesData;
  showcase: HomeShowcaseData;
  contact: HomeContactData;
  ctaBand: HomeCtaBandData;
}

/** Campo del formulario de contacto de la portada. */
export interface HomeFormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'date';
  /** En select, el placeholder es la primera opción (deshabilitada). */
  placeholder: string;
  /** Opciones del select. */
  options?: string[];
  required: boolean;
  /** Ocupa media fila en escritorio (Nombre / Apellidos). */
  half?: boolean;
}
