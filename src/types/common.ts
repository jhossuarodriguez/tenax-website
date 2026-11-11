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

export type SocialNetwork = 'facebook' | 'linkedin' | 'instagram' | 'tiktok' | 'whatsapp';

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

/** Grupo de enlaces del pie, con su título. */
export interface FooterLinkGroup {
  title: string;
  links: NavItem[];
}

export interface FooterData {
  /** Llamado a contacto: la primera parte en blanco y el remate en naranja. */
  title: string;
  titleEmphasis: string;
  cta: NavItem;
  officeLabel: string;
  /** Dirección completa tal como se muestra; enlaza al mapa. */
  address: string;
  hours: string;
  whatsappLabel: string;
  socials: SocialLink[];
  /** Una entrada por columna; una columna puede apilar varios grupos. */
  columns: FooterLinkGroup[][];
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

/** Banner con panel gris, cortina naranja y foto con franjas (formato de severfield.com): Servicios. */
export interface PageBannerData {
  /** Se muestran bajo el banner y se publican como BreadcrumbList. */
  breadcrumbs: Breadcrumb[];
  title: string;
  text: string;
  /** Foto sobre la unión del panel gris y la cortina, con las franjas encima. */
  photo: ImageAsset;
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
