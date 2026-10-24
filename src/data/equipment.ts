import type { EquipmentPageData } from '@/types';
import { obraThumb } from '@/data/obras';
import { services } from '@/data/services';
import { ctaBand } from '@/data/sectors';

/** Página de Equipos: maquinaria en obra (fotos de "FOTOS TENAX") y los equipos de cada servicio. */
export const equipmentPage: EquipmentPageData = {
  hero: {
    breadcrumbs: [{ label: 'Inicio', href: '/' }, { label: 'Equipos' }],
    eyebrow: 'Equipos',
    title: 'Maquinaria y',
    titleEmphasis: 'capacidad operativa',
    subtitle:
      'Contamos con personal técnico especializado, maquinaria pesada y experiencia en campo para ofrecer soluciones adaptadas a los requerimientos de cada proyecto.',
    strip: ['Excavadoras hidráulicas', 'Rodillos compactadores', 'Camiones volteo', 'Camiones grúa'],
  },
  machinery: {
    kicker: '// Maquinaria en obra',
    title: 'Equipos especializados y maquinaria pesada',
    description: 'Contamos con equipos especializados y maquinaria pesada de última generación para realizar proyectos con eficiencia y precisión.',
    items: [
      { image: obraThumb('movimiento-tierra-1'), caption: 'Excavadoras hidráulicas' },
      { image: obraThumb('nivelacion-terreno-2'), caption: 'Rodillos compactadores' },
      { image: obraThumb('movimiento-tierra-4'), caption: 'Camiones volteo' },
      { image: obraThumb('pavimento-3'), caption: 'Vaciado de hormigón' },
    ],
  },
  byService: {
    kicker: '// Capacidad operativa',
    title: 'Equipos por servicio',
    description: 'Los equipos con los que ejecutamos cada tipo de obra.',
    services: services.map((s) => ({
      title: s.title,
      href: `/servicios/${s.slug}/`,
      items: s.lists.find((l) => l.id === 'equipos')?.items ?? [],
    })),
  },
  cta: ctaBand,
};
