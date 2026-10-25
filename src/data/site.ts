import type { SiteConfig } from '@/types';

/** Configuración global: navegación, contacto y redes de Tenax Construction. */
export const site: SiteConfig = {
  name: 'Tenax Construction',
  description: 'Constructora dominicana experta en administración, construcción y supervisión de obras civiles y naves industriales.',
  ogImage: '/images/tenax/og-default.jpg',
  business: {
    legalName: 'Tenax Construction SRL',
    streetAddress: 'Av. 27 de Febrero, Esq. Calle el Seminario #261, Plaza Comercial APH, 3er Piso, Local 15',
    locality: 'Santo Domingo',
    country: 'DO',
    geo: { latitude: 18.465466, longitude: -69.9316248 },
    openingHours: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    foundingYear: 2012,
  },
  // 330 px de ancho: cubre el logo a 2x en escritorio (129 px) y a 3x en móvil (109 px).
  logo: {
    src: '/images/tenax/logo-tenax.webp',
    avif: '/images/tenax/logo-tenax.avif',
    alt: 'Logo Tenax Construction',
    width: 330,
    height: 133,
  },
  favicon: {
    small: '/images/tenax/favicon-32.png',
    large: '/images/tenax/favicon-192.png',
    apple: '/images/tenax/favicon-180.png',
  },
  // Orden del menú definido por Tenax (01-07); el logo enlaza al inicio.
  nav: [
    { label: 'Nosotros', href: '/sobre-nosotros/', description: 'Trayectoria, filosofía y equipo' },
    { label: 'Servicios', href: '/servicios/', description: 'Soluciones y capacidades técnicas' },
    { label: 'Proyectos', href: '/proyectos/', description: 'Casos de éxito documentados' },
    { label: 'Sectores', href: '/sectores/', description: 'Industrias que atendemos' },
    { label: 'Equipos', href: '/equipos/', description: 'Maquinaria y capacidad operativa' },
    { label: 'Galería', href: '/galeria/' },
    { label: 'Contacto', href: '/contacto/', description: 'Cotizaciones y nuevos negocios' },
  ],
  cta: { label: 'Solicitar cotización', href: '/contacto/' },
  contact: {
    address: 'Av. 27 de Febrero, Esq. Calle el Seminario #261, Plaza Comercial APH, 3er Piso, Local 15, Santo Domingo',
    phone: '+1 (809) 898-6028',
    phoneHref: '+18098986028',
    email: 'proyectos@tenax.com.do',
    whatsapp: 'https://wa.me/18098986028',
    hours: 'Lun - Vie: 9:00 AM - 6:00 PM',
    mapsUrl: 'https://maps.app.goo.gl/sa4gHQfY2zJr4QbFA',
    mapEmbedUrl: 'https://maps.google.com/maps?q=18.465466,-69.9316248&z=16&ie=UTF8&iwloc=&output=embed',
  },
  socials: [
    { network: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/Tnaxconstruction' },
    { network: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/tenaxconstruction/' },
    { network: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/tenax-construction-srl/' },
    { network: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@tenaxconstruction' },
  ],
};
