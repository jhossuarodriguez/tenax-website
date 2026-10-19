import type { SiteConfig } from '@/types';

/** Configuración global: navegación, contacto y redes de Tenax Construction. */
export const site: SiteConfig = {
  name: 'Tenax Construction',
  description: 'Constructora dominicana experta en administración, construcción y supervisión de obras civiles y naves industriales.',
  logo: { src: '/images/tenax/logo-tenax.webp', alt: 'Logo Tenax Construction', width: 786, height: 317 },
  favicon: {
    small: '/images/tenax/favicon-32.png',
    large: '/images/tenax/favicon-192.png',
    apple: '/images/tenax/favicon-180.png',
  },
  nav: [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/sobre-nosotros/' },
    { label: 'Servicios', href: '/servicios/' },
    { label: 'Proyectos', href: '/proyectos/' },
    { label: 'Sectores', href: '/sectores/' },
    { label: 'Galería', href: '/galeria/' },
  ],
  cta: { label: 'Solicitar cotización', href: '/contacto/' },
  contact: {
    address: 'Av. 27 de Febrero, Esq. Calle el Seminario #261, Plaza Comercial APH, 4to Piso, Santo Domingo',
    phone: '+1 (809) 898-6028',
    phoneHref: '+18098986028',
    email: 'proyectos@tenax.com.do',
    whatsapp: 'https://wa.me/18098986028',
    hours: 'Lun - Vie: 8:00 AM - 5:00 PM',
    mapsUrl: 'https://maps.app.goo.gl/sa4gHQfY2zJr4QbFA',
    mapEmbedUrl: 'https://maps.google.com/maps?q=18.468494,-69.939223&z=16&ie=UTF8&iwloc=&output=embed',
  },
  socials: [
    { network: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/Tnaxconstruction' },
    { network: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/tenaxconstruction/' },
    { network: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/tenax-construction-srl/' },
    { network: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@tenaxconstruction' },
  ],
};
