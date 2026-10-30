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

/** Fragmento de párrafo; `highlight` va en naranja. */
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

/** Tarjeta de "Proyectos destacados": foto, ubicación, título y alcance de la obra. */
export interface HomeProject {
  image: ImageAsset;
  /** Ubicación y cliente o tipo de obra: "Baní · Centro de acopio". */
  eyebrow: string;
  title: string;
  text: string;
}

/** Tarjeta numerada de "Soluciones integrales en construcción". */
export interface HomeSolution {
  title: string;
  text: string;
  image: ImageAsset;
}

export interface HomeSolutionsData {
  eyebrow: string;
  title: string;
  text: string;
  /** Enlace "Conocer más" de las tarjetas. */
  cta: NavItem;
  items: HomeSolution[];
}

/** Bloque "Sobre Nosotros": imagen principal y presentación de la empresa. */
export interface HomeAboutData {
  heading: string;
  title: string;
  paragraphs: string[];
  image: ImageAsset;
  /** Fotos del carrusel, desactivado (comentado) en HomeAbout.astro. */
  slides: ImageAsset[];
}

export interface HomeReason {
  number: string;
  title: string;
  text: string;
}

export interface HomeContactData {
  /** Imagen de fondo fija sobre el formulario. */
  bandImage: string;
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
  projectsHeading: string;
  projects: HomeProject[];
  projectsCta: NavItem;
  servicesHeading: string;
  serviceCtaLabel: string;
  solutions: HomeSolutionsData;
  about: HomeAboutData;
  reasonsHeading: string;
  reasons: HomeReason[];
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
