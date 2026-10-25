import { site } from '@/data/site';
import type { Breadcrumb, Service } from '@/types';

/**
 * JSON-LD (schema.org) del sitio. Las URL son absolutas a partir de `site` (astro.config.mjs).
 * La empresa lleva un @id fijo para que las demás entidades la referencien sin repetir sus datos.
 */

const abs = (path: string, base: URL): string => new URL(path, base).href;

const organizationId = (base: URL): string => abs('/#organization', base);

/** Empresa y sitio web; va en todas las páginas. */
export const siteSchema = (base: URL) => {
  const { business, contact } = site;
  return [
    {
      '@type': 'GeneralContractor',
      '@id': organizationId(base),
      name: site.name,
      legalName: business.legalName,
      description: site.description,
      url: abs('/', base),
      logo: abs(site.logo.src, base),
      image: abs(site.ogImage, base),
      telephone: contact.phoneHref,
      email: contact.email,
      foundingDate: String(business.foundingYear),
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.streetAddress,
        addressLocality: business.locality,
        addressCountry: business.country,
      },
      geo: { '@type': 'GeoCoordinates', ...business.geo },
      hasMap: contact.mapsUrl,
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: business.openingHours.days,
        opens: business.openingHours.opens,
        closes: business.openingHours.closes,
      },
      areaServed: { '@type': 'Country', name: 'República Dominicana' },
      sameAs: site.socials.map((s) => s.href),
    },
    {
      '@type': 'WebSite',
      '@id': abs('/#website', base),
      url: abs('/', base),
      name: site.name,
      inLanguage: 'es-DO',
      publisher: { '@id': organizationId(base) },
    },
  ];
};

/** Migas de pan; el último elemento (la página actual) va sin URL. */
export const breadcrumbSchema = (crumbs: Breadcrumb[], base: URL) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.label,
    ...(c.href && { item: abs(c.href, base) }),
  })),
});

export const serviceSchema = (service: Service, base: URL) => ({
  '@type': 'Service',
  name: service.title,
  serviceType: service.category,
  description: service.tagline,
  url: abs(`/servicios/${service.slug}/`, base),
  image: abs(service.image.src, base),
  provider: { '@id': organizationId(base) },
  areaServed: { '@type': 'Country', name: 'República Dominicana' },
});
