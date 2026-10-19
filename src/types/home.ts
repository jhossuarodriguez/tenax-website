import type { ImageAsset, NavItem } from '@/types/common';

/** Botón de la portada. `brand` (naranja) y `white` (blanco) son los dos estilos del hero. */
export interface HomeButton extends NavItem {
  variant: 'brand' | 'white';
}

export interface HomeHeroData {
  title: string;
  text: string;
  /** Video de fondo (solo escritorio/tablet): WebM ligero y MP4 de respaldo para navegadores sin WebM. */
  video: { webm: string; mp4: string };
  buttons: HomeButton[];
}


export interface HomeTechnique {
  title: string;
  text: string;
}

export interface HomeEquipmentData {
  heading: string;
  title: string;
  text: string;
  cta: NavItem;
  slides: ImageAsset[];
}

export interface HomeReason {
  number: string;
  title: string;
  text: string;
}

export interface HomeContactData {
  /** Bloque introductorio centrado. */
  introTitle: string;
  introText: string;
  /** Imagen de fondo fija entre la intro y el formulario. */
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
  hero: HomeHeroData;
  projectsHeading: string;
  projectsCta: NavItem;
  servicesHeading: string;
  serviceCtaLabel: string;
  techniquesHeading: string;
  techniquesBackground: string;
  techniques: HomeTechnique[];
  equipment: HomeEquipmentData;
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
