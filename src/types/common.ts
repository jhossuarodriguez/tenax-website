/** Tipos compartidos por todo el sitio. */

export interface ImageAsset {
  src: string;
  /** Versión grande para el visor cuando `src` es una miniatura. */
  fullSrc?: string;
  /** Anchos disponibles ("url 400w, url 800w, …"); cada componente pone su `sizes`. */
  srcset?: string;
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

/** Entrada del menú principal; la descripción se muestra en el menú móvil. */
export interface MainNavItem extends NavItem {
  description?: string;
  /** Panel desplegable en escritorio (lista de enlaces y foto); en móvil, sublista bajo la entrada. */
  submenu?: { items: NavItem[]; image: ImageAsset };
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

/** Datos de la empresa que solo se usan en el JSON-LD. */
export interface BusinessInfo {
  legalName: string;
  streetAddress: string;
  locality: string;
  /** Código ISO del país. */
  country: string;
  /** Coordenadas de la ficha de Google Business Profile. */
  geo: { latitude: number; longitude: number };
  /** Horario en formato schema.org (días en inglés, horas de 24 h). */
  openingHours: { days: string[]; opens: string; closes: string };
  foundingYear: number;
}

export interface SiteConfig {
  name: string;
  description: string;
  /** Imagen para redes sociales (Open Graph): JPG de 1200x630, porque varias redes no leen AVIF. */
  ogImage: string;
  business: BusinessInfo;
  /** `src` es el respaldo (WebP) para navegadores sin AVIF. */
  logo: ImageAsset & { avif: string };
  favicon: { small: string; large: string; apple: string };
  nav: MainNavItem[];
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
  /** Migas de pan de la página; se publican como BreadcrumbList. */
  breadcrumbs?: Breadcrumb[];
  /** JSON-LD propio de la página, además del de la empresa. */
  schema?: Record<string, unknown>;
  noindex?: boolean;
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
