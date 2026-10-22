/** Tipos compartidos por todo el sitio. */

export interface ImageAsset {
  src: string;
  /** Versión grande para el visor cuando `src` es una miniatura. */
  fullSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  /** Valor CSS de object-position, p. ej. "center bottom". */
  position?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type SocialNetwork = 'facebook' | 'linkedin' | 'instagram' | 'tiktok';

export interface SocialLink {
  network: SocialNetwork;
  label: string;
  href: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  /** Valor para enlaces tel:, solo dígitos. */
  phoneHref: string;
  email: string;
  /** Enlace directo a WhatsApp (wa.me). */
  whatsapp: string;
  /** Horario de atención. */
  hours: string;
  mapsUrl: string;
  mapEmbedUrl: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  logo: ImageAsset;
  favicon: { small: string; large: string; apple: string };
  nav: NavItem[];
  cta: NavItem;
  contact: ContactInfo;
  socials: SocialLink[];
}

export interface Breadcrumb {
  label: string;
  /** Sin href se renderiza como el elemento actual. */
  href?: string;
}

export interface SeoMeta {
  title: string;
  description?: string;
  image?: string;
}

export interface PageHeroData {
  breadcrumbs: Breadcrumb[];
  eyebrow: string;
  /** Primera parte del título. */
  title: string;
  /** Parte resaltada opcional, renderizada en <em> tras el título. */
  titleEmphasis?: string;
  subtitle: string;
  strip: string[];
}
