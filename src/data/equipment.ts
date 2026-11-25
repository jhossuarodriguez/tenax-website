import type { ImageMetadata } from 'astro';
import type { EquipmentPageData, Machine, MachineCategory } from '@/types';
import { imageVersions } from '@/data/images';
import { machineSheets } from '@/data/machine-sheets';
import { services } from '@/data/services';

const photos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/equipos/*.avif', { eager: true });

/** Botones de filtro de la maquinaria (Canva, pág. 31). */
const categories = [
  { id: 'excavacion', label: 'Excavación' },
  { id: 'nivelacion-compactacion', label: 'Nivelación y compactación' },
  { id: 'transporte', label: 'Transporte' },
  { id: 'manipulacion-elevacion', label: 'Manipulación y elevación' },
  { id: 'hormigon', label: 'Hormigón' },
  { id: 'auxiliares', label: 'Equipos auxiliares' },
] as const satisfies MachineCategory[];

type CategoryId = (typeof categories)[number]['id'];

/**
 * Máquina con su ficha técnica (clave `file` en machine-sheets.ts) y su foto de src/assets/equipos/ (`photoFile`, sin
 * extensión; por defecto, la misma clave). `type` y `model` juntos forman el nombre de la imagen original de Tenax.
 * Falla el build si falta la foto o la ficha.
 */
const machine = async (type: string, model: string, file: string, category: CategoryId, photoFile = file): Promise<Machine> => {
  const photo = photos[`/src/assets/equipos/${photoFile}.avif`];
  if (!photo) throw new Error(`Equipos: falta la foto "${photoFile}" en src/assets/equipos/`);
  const sheet = machineSheets[file];
  if (!sheet) throw new Error(`Equipos: falta la ficha técnica "${file}" en src/data/machine-sheets.ts`);
  const { thumb, srcset, original, width, height } = await imageVersions(photo.default);
  const slug = file.replaceAll('_', '-');
  return {
    slug,
    href: `/equipos/${slug}/`,
    type,
    model,
    category,
    image: { src: thumb, srcset, fullSrc: original, alt: `${type} ${model}`, width, height },
    sheet,
  };
};

/**
 * Las 17 máquinas en el orden del Canva (pág. 31); los dos camiones Kia del diseño no tienen foto todavía. Siguen las
 * máquinas que no caben en el diseño, en el orden de sus fichas.
 */
const machines = await Promise.all([
  machine('Excavadora', 'Doosan DX225', 'excavadora_doosan_dx225', 'excavacion'),
  machine('Excavadora', 'Sany SY330H', 'excavadora_sany_sy330h', 'excavacion'),
  machine('Motoniveladora', 'Caterpillar 120G', 'motoniveladora_caterpillar_120g', 'nivelacion-compactacion', 'motoniveladora_caterpillar_120g_en_obra'),
  machine('Rodillo compactador', 'CAT 553', 'rodillo_compactador_cat_553', 'nivelacion-compactacion'),
  machine('Rodillo compactador', 'CAT 563', 'rodillo_compactador_cat_563', 'nivelacion-compactacion'),
  machine('Camión volteo', 'Forland', 'camion_volteo_forland', 'transporte'),
  machine('Minicargador frontal', 'Bobcat T140', 'minicargador_frontal_bobcat_t140', 'excavacion', 'cargadora_bobcat_t140_en_obra'),
  machine('Manipulador telescópico', 'VR642', 'manipulador_telescopico_vr642', 'manipulacion-elevacion'),
  machine('Manipulador telescópico', '10051', 'manipulador_telescopico_10051', 'manipulacion-elevacion'),
  machine('Camión hormigonera', 'International 7 m³', 'camion_hormigonera_international_7_m3', 'hormigon'),
  machine('Hormigonera autocargable', 'JGM 4.5', 'hormigonera_autocargable_jgm_4_5', 'hormigon'),
  machine('Bomba de arrastre', 'Putzmeister', 'bomba_de_arrastre_putzmeister', 'hormigon'),
  machine('Bomba de arrastre', 'Transcrete Alpha', 'bomba_de_arrastre_transcrete_alpha', 'hormigon'),
  machine('Compresor', 'Ingersoll Rand 185 CFM', 'compresor_ingersoll_rand_185_cfm', 'auxiliares'),
  machine('Torre de iluminación', 'Generac – 2010', 'torre_de_iluminacion_generac_2010', 'auxiliares'),
  machine('Planta eléctrica', 'Olympia 40 kVA (2010)', 'planta_electrica_olympia_40_kva_2010', 'auxiliares'),
  machine('Planta eléctrica', 'Olympian 125 kVA', 'planta_electrica_olympian_125_kva', 'auxiliares'),
]);

/** Página de Equipos: la maquinaria de Tenax (Canva, pág. 31) y los equipos de cada servicio. */
export const equipmentPage: EquipmentPageData = {
  seo: {
    title: 'Maquinaria y equipos de construcción',
    description:
      'Excavadoras hidráulicas, rodillos compactadores, camiones volteo y camiones grúa: la maquinaria con la que ejecutamos cada obra en República Dominicana.',
  },
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
    allLabel: 'Todos los equipos',
    categories,
    machines,
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
};
