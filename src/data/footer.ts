import type { FooterData, NavItem, PortfolioCategoryId, SocialNetwork } from '@/types';
import { categories } from '@/data/portfolio';
import { site } from '@/data/site';

/** Pie de página, con los textos y el orden del diseño de Tenax en Canva (pág. 12). */

/** Enlace a una categoría del portafolio; falla el build si la categoría no existe. */
const sector = (id: PortfolioCategoryId): NavItem => {
  const category = categories.find((c) => c.id === id);
  if (!category) throw new Error(`Pie: no existe la categoría "${id}"`);
  return { label: category.title, href: category.href };
};

/** Red social de la configuración global; falla el build si no está. */
const social = (network: SocialNetwork) => {
  const link = site.socials.find((s) => s.network === network);
  if (!link) throw new Error(`Pie: falta la red "${network}" en site.socials`);
  return link;
};

export const footer: FooterData = {
  title: '¿Tienes un proyecto?',
  titleEmphasis: 'Hablemos de él.',
  cta: { label: 'Contáctanos', href: '/contacto/' },
  officeLabel: 'Oficina principal',
  address: `${site.contact.address}, República Dominicana.`,
  hours: 'Lunes a viernes: 9:00 AM – 6:00 PM',
  whatsappLabel: 'Escríbenos por WhatsApp',
  socials: [{ network: 'whatsapp', label: 'WhatsApp', href: site.contact.whatsapp }, social('linkedin'), social('instagram')],
  columns: [
    [
      {
        title: 'Proyectos por sector',
        links: [
          sector('industrial'),
          sector('residencial'),
          sector('comercial'),
          sector('agroindustrial'),
          sector('energia'),
          sector('logistica-almacenamiento'),
          sector('institucional-educativo'),
          sector('puentes'),
        ],
      },
    ],
    [
      {
        title: 'Nuestras especialidades',
        links: [
          { label: 'Energía solar', href: '/proyectos/energia/' },
          { label: 'Estructuras metálicas', href: '/servicios/estructura-metalica/' },
          { label: 'Cimentaciones y pavimentos', href: '/servicios/pavimentos/' },
          { label: 'Remodelaciones', href: '/servicios/retrofit/' },
          { label: 'Movimientos de tierra', href: '/servicios/movimiento-tierra/' },
        ],
      },
      {
        title: 'Ubicaciones',
        links: [
          { label: 'Oficina principal', href: site.contact.mapsUrl },
          { label: 'Proyectos en ejecución', href: '/proyectos/' },
          { label: 'Cobertura nacional', href: '/sectores/' },
        ],
      },
    ],
    [
      {
        title: 'Sobre Tenax',
        links: [
          { label: 'Quiénes somos', href: '/sobre-nosotros/#quienes-somos' },
          { label: 'Trayectoria', href: '/sobre-nosotros/#trayectoria' },
          { label: 'Equipo', href: '/sobre-nosotros/#equipo' },
        ],
      },
    ],
  ],
};
