import type { ImageMetadata } from 'astro';
import type { ImageAsset } from '@/types';
import { imageVersions, type ImageVersions } from '@/data/images';

interface ObraPhoto {
  /** Título de la foto según su archivo original; es el pie de foto de la galería. */
  title: string;
  /** Texto alternativo: lo que se ve en la foto. */
  alt: string;
  location?: string;
}

/** Fotos de obra de la carpeta "FOTOS TENAX" (clave = nombre del AVIF en src/assets/obras/). */
export const obraPhotos = {
  inicio: {
    title: 'Supervisión de obra',
    alt: 'Ingenieros con casco y chaleco supervisan una excavadora en un patio de contenedores',
  },
  'galeria-1': { title: 'Excavación de terreno', alt: 'Excavadora abriendo camino en un terreno de material calizo' },
  'galeria-2': { title: 'Excavación en patio de contenedores', alt: 'Excavadora cargando material junto a un patio de contenedores' },
  'galeria-3': { title: 'Carga de material', alt: 'Excavadora amarilla cargando un camión volteo en un movimiento de tierras' },
  'galeria-4': { title: 'Acceso de edificio comercial', alt: 'Entrada de un edificio comercial con jardinera y escalones de acceso' },
  'galeria-5': {
    title: 'Pavimento de hormigón estriado',
    alt: 'Pavimento de hormigón con acabado estriado y pasadores de acero en un patio de contenedores',
  },
  'galeria-6': {
    title: 'Acabado de pavimento de hormigón',
    alt: 'Obreros dando acabado a una franja de pavimento de hormigón en un patio de contenedores',
  },

  'movimiento-tierra-samana-1': {
    title: 'Movimiento de tierras y nivelación de terreno',
    location: 'Las Terrenas, Samaná',
    alt: 'Vista aérea de una excavadora y un rodillo nivelando un terreno rodeado de vegetación',
  },
  'movimiento-tierra-samana-2': {
    title: 'Movimiento de tierras y nivelación de terreno',
    location: 'Las Terrenas, Samaná',
    alt: 'Vista aérea del terreno durante el corte y la nivelación con maquinaria pesada',
  },
  'movimiento-tierra-samana-3': {
    title: 'Movimiento de tierras y nivelación de terreno',
    location: 'Las Terrenas, Samaná',
    alt: 'Vista aérea de la plataforma de tierra nivelada junto a un cocotal frente al mar',
  },
  'movimiento-tierra-samana-4': {
    title: 'Movimiento de tierras y nivelación de terreno',
    location: 'Las Terrenas, Samaná',
    alt: 'Vista aérea del camino nivelado que bordea la costa entre palmeras',
  },
  'movimiento-tierra-1': { title: 'Movimiento de tierras', alt: 'Excavadora retirando la capa vegetal de una ladera' },
  'movimiento-tierra-2': { title: 'Movimiento de tierras', alt: 'Excavadora cargando material en un camión volteo' },
  'movimiento-tierra-3': { title: 'Movimiento de tierras', alt: 'Excavadora amarilla cargando un camión volteo sobre suelo arcilloso' },
  'movimiento-tierra-4': { title: 'Movimiento de tierras', alt: 'Camión volteo descargando material de relleno en una explanada' },
  'movimiento-tierra-pavimento-1': {
    title: 'Movimiento de tierras para pavimento',
    alt: 'Excavadora cargando camiones volteo en la preparación del terreno para un pavimento',
  },
  'nivelacion-terreno-1': { title: 'Nivelación de terreno', alt: 'Rodillo compactador nivelando una explanada' },
  'nivelacion-terreno-2': { title: 'Nivelación de terreno', alt: 'Rodillo compactador trabajando en la nivelación de un terreno' },
  'nivelacion-terreno-3': { title: 'Nivelación de terreno', alt: 'Explanada amplia nivelada y compactada, lista para pavimentar' },

  'nave-industrial-1': { title: 'Nave industrial', alt: 'Pórticos de acero de una nave industrial sobre la losa de piso' },
  'nave-industrial-3': {
    title: 'Nave industrial',
    alt: 'Interior terminado de una nave industrial con paredes y cubierta de lámina metálica',
  },
  'nave-industrial-4': {
    title: 'Nave industrial',
    alt: 'Pórticos de acero entre muros de paneles prefabricados de hormigón en una nave en construcción',
  },
  'nave-industrial-5': { title: 'Nave industrial', alt: 'Montaje de los pórticos de acero dentro de una nave con muros prefabricados' },
  'nave-industrial-6': {
    title: 'Nave industrial',
    alt: 'Obreros en un andamio junto a los pórticos de acero azules de una nave industrial',
  },
  'nave-industrial-7': { title: 'Nave industrial', alt: 'Estructura de acero azul de una nave industrial sobre un muro de bloques' },
  'nave-industrial-bani': {
    title: 'Nave industrial',
    location: 'Baní',
    alt: 'Pórticos de acero a dos aguas de una nave industrial en construcción',
  },
  'nave-bodega-importacion-2': {
    title: 'Nave industrial para bodega de importación',
    alt: 'Fachada terminada de una nave para bodega de importación con escalera metálica y patio de hormigón',
  },
  'nave-bodega-temporal-1': {
    title: 'Nave industrial para bodega de importación temporal',
    alt: 'Naves de lámina metálica para bodega temporal con un cobertizo abierto al centro',
  },
  'nave-bodega-temporal-2': {
    title: 'Nave industrial para bodega de importación temporal',
    alt: 'Chasis de remolques bajo la cubierta metálica de una bodega temporal',
  },
  'nave-bodega-temporal-3': {
    title: 'Nave industrial para bodega de importación temporal',
    alt: 'Cobertizo de estructura metálica azul para bodega temporal de importación',
  },
  'nave-fabrica-plasticos-1': {
    title: 'Nave industrial para fábrica de plásticos',
    location: 'Santo Domingo Oeste',
    alt: 'Columnas y vigas de hormigón apuntaladas en la nave de una fábrica de plásticos',
  },
  'nave-fabrica-plasticos-2': {
    title: 'Nave industrial para fábrica de plásticos',
    location: 'Santo Domingo Oeste',
    alt: 'Exterior de la nave terminada de una fábrica de plásticos',
  },
  'porticos-andamios-1': {
    title: 'Pórticos de acero y andamios',
    alt: 'Pórticos de acero a dos aguas con andamios rojos sobre la cimentación de una nave',
  },
  'estructura-acero-epp-1': {
    title: 'Trabajadores con EPP en estructura de acero',
    alt: 'Obreros con equipo de protección sobre los pórticos de acero de una nave, junto a una grúa',
  },
  'izaje-viga-1': {
    title: 'Trabajadores elevan una viga con grúa',
    alt: 'Obreros guían una viga de acero izada con grúa en el montaje de una estructura metálica',
  },
  'andamio-rojo-1': {
    title: 'Trabajadores en obra junto al andamio rojo',
    alt: 'Obreros sobre un andamio rojo instalan láminas metálicas en la estructura azul de una nave',
  },

  'puente-alcantarillado-1': { title: 'Puente alcantarillado', alt: 'Vista aérea del puente alcantarilla terminado sobre el cauce' },
  'puente-alcantarillado-2': {
    title: 'Puente alcantarillado',
    alt: 'Vista nocturna del paso sobre el puente alcantarilla con sus barandas',
  },
  'puente-alcantarillado-3': { title: 'Puente alcantarillado', alt: 'Puente alcantarilla de tubos de hormigón sobre un cauce crecido' },
  'puente-alcantarillado-4': {
    title: 'Puente alcantarillado',
    alt: 'Boca de una alcantarilla de tubos de hormigón con su cabezal y aletas',
  },
  'puente-alcantarillado-5': {
    title: 'Puente alcantarillado',
    alt: 'Tubos de hormigón armado acopiados a orillas del camino para la alcantarilla',
  },
  'puente-alcantarillado-6': {
    title: 'Puente alcantarillado',
    alt: 'Camino de grava sobre el puente alcantarilla terminado, con sus muros de cabezal',
  },
  'puente-alcantarillado-7': {
    title: 'Puente alcantarillado',
    alt: 'Encofrado de madera de los cabezales de un puente alcantarilla en un camino de tierra',
  },
  'puente-alcantarillado-8': {
    title: 'Puente alcantarillado',
    alt: 'Batería de tubos de hormigón con el acero de los cabezales listo para encofrar',
  },

  'pavimento-1': { title: 'Pavimento', alt: 'Obreros extendiendo el hormigón de una losa de pavimento' },
  'pavimento-2': { title: 'Pavimento', alt: 'Franja de pavimento de hormigón con acabado estriado junto a un muro perimetral' },
  'pavimento-3': { title: 'Pavimento', alt: 'Vaciado de pavimento de hormigón desde un camión hormigonera' },
  'pavimento-4': { title: 'Pavimento', alt: 'Vista desde la cabina de una máquina de la obra de pavimentación' },
  'pavimento-rannik': { title: 'Pavimento Rannik', alt: 'Excavadora preparando la base del pavimento junto a camiones y obreros' },
  'adoquines-parqueo-1': {
    title: 'Adoquines en parqueo',
    alt: 'Parqueo adoquinado con vehículos estacionados frente a un patio de contenedores',
  },
  'adoquines-parqueo-2': { title: 'Adoquines en parqueo', alt: 'Detalle del adoquín de hormigón intertrabado del parqueo' },

  'envarillado-losa-1': {
    title: 'Envarillado y vaciado de losa',
    location: 'Santo Domingo',
    alt: 'Acero de refuerzo amarrado dentro del encofrado de madera de una losa',
  },
  'envarillado-losa-2': {
    title: 'Envarillado y vaciado de losa',
    location: 'Santo Domingo',
    alt: 'Losa de hormigón recién vaciada en su encofrado de madera, con edificios de la ciudad al fondo',
  },
  'colocacion-hormigon-1': {
    title: 'Colocación de hormigón',
    alt: 'Colocación de hormigón desde la canaleta del camión hormigonera sobre acero de refuerzo',
  },
  'colocacion-hormigon-2': {
    title: 'Colocación de hormigón',
    alt: 'Obreros extendiendo y nivelando el hormigón fresco en una franja de pavimento',
  },

  'techo-tijerillas-1': {
    title: 'Techo con sistema de tijerillas en comedor de escuela',
    alt: 'Techo de tijerillas metálicas en el comedor de una escuela, visto desde el interior',
  },
  'techo-tijerillas-2': {
    title: 'Techo con sistema de tijerillas en comedor de escuela',
    alt: 'Tijerillas metálicas montadas sobre los muros del comedor de una escuela en construcción',
  },
  'techo-policarbonato-1': {
    title: 'Techo en policarbonato con estructura metálica',
    alt: 'Techo curvo de policarbonato sobre arcos metálicos azules en un pasillo',
  },
  'techo-policarbonato-2': {
    title: 'Techo en policarbonato con estructura metálica',
    alt: 'Vista del techo de policarbonato y su estructura metálica sobre el pasillo de acceso',
  },
  'cancha-boveda-tubular-1': {
    title: 'Cancha de baloncesto bajo bóveda tubular',
    alt: 'Cancha de baloncesto techada con una bóveda de estructura tubular metálica, rodeada de palmeras',
  },
  'showroom-1': { title: 'Showroom', alt: 'Marquesina de estructura metálica reticulada sobre los vehículos de un showroom' },
  'escalera-emergencia-1': {
    title: 'Escalera de emergencia',
    alt: 'Escalera de emergencia metálica adosada a la fachada de un edificio de varios niveles',
  },
  'escalera-emergencia-2': {
    title: 'Escalera de emergencia',
    alt: 'Vista lateral de la escalera de emergencia metálica con descansos en cada nivel',
  },
  'escalera-metalica-exterior-moderna': {
    title: 'Escalera metálica exterior',
    alt: 'Escalera metálica exterior pintada de azul claro, con descansos y barandas horizontales, adosada a la fachada de un edificio',
  },
  'oficina-contenedor-1': {
    title: 'Oficina en contenedor frente al agua',
    alt: 'Oficina hecha en un contenedor, sobre una plataforma con barandas naranjas frente al agua',
  },
  'oficina-contenedor-2': {
    title: 'Oficina en contenedor frente al agua',
    alt: 'Interior de la oficina en contenedor, con escritorios, sillas y una franja naranja en la pared',
  },
  'izaje-contenedor-1': {
    title: 'Izaje de contenedor en puerto industrial',
    alt: 'Camión grúa iza un contenedor mientras dos obreros con chaleco supervisan la maniobra',
  },

  'retrofit-1': { title: 'Retrofit', alt: 'Columna reforzada con ángulos y platinas de acero (empresillado metálico)' },
  'retrofit-2': { title: 'Retrofit', alt: 'Columnas con empresillado metálico en el interior de un edificio en rehabilitación' },
  'retrofit-3': { title: 'Retrofit', alt: 'Obrero aplicando mortero sobre un elemento reforzado' },
  'retrofit-4': { title: 'Retrofit', alt: 'Obrero dando el acabado de mortero a una columna reforzada' },

  'muro-contencion-ab-1': {
    title: 'Construcción de muro de contención tipo AB',
    location: 'Km 13, Autopista Duarte',
    alt: 'Muro de contención curvo de bloques segmentados con un rodillo compactador al pie',
  },
  'muro-contencion-ab-2': {
    title: 'Construcción de muro de contención tipo AB',
    location: 'Km 13, Autopista Duarte',
    alt: 'Retroexcavadora y obreros junto al muro de contención de bloques segmentados en construcción',
  },
  'cunetas-1': { title: 'Cunetas', alt: 'Cuneta de hormigón en construcción con malla de refuerzo junto a un camino de tierra' },
  'cunetas-2': {
    title: 'Cunetas',
    alt: 'Cuneta de hormigón terminada a lo largo de un camino, con excavadora y camión hormigonera al fondo',
  },

  'control-acceso-1': {
    title: 'Control de acceso',
    alt: 'Marquesina metálica de control de acceso vehicular con dos casetas de vigilancia sobre islas de hormigón',
  },
  'garita-seguridad-1': { title: 'Garita de seguridad', alt: 'Garita de seguridad a la entrada de un parqueo, junto a palmeras' },
  'garita-seguridad-2': {
    title: 'Garita de seguridad',
    alt: 'Garita de seguridad con ventanales y baranda metálica en el acceso peatonal',
  },
  'porton-acceso-1': {
    title: 'Portón de acceso',
    location: 'Navieras Haina, Santo Domingo',
    alt: 'Portón metálico azul de barrotes en el acceso de un edificio',
  },
  'vallado-perimetral-1': {
    title: 'Vallado perimetral',
    location: 'Peravia, Baní',
    alt: 'Vallado de malla ciclónica con alambre de púas a lo largo de un camino de grava',
  },
  'vallado-perimetral-2': {
    title: 'Vallado perimetral',
    location: 'Peravia, Baní',
    alt: 'Vallado perimetral de malla junto a un camino curvo recién nivelado',
  },
  'vallado-perimetral-3': {
    title: 'Vallado perimetral',
    location: 'Peravia, Baní',
    alt: 'Obreros instalando la malla ciclónica del vallado perimetral',
  },

  // Fotos del documento de contenido de Tenax (octubre de 2026).
  'hero-estructura-atardecer': {
    title: 'Montaje de estructura metálica',
    alt: 'Pórticos de acero de una nave en montaje al atardecer, con una grúa izando una viga',
  },
  'parque-fotovoltaico-mata-de-palma': {
    title: 'Obras de arte y drenaje en parque fotovoltaico',
    location: 'Mata de Palma',
    alt: 'Cuneta de hormigón a lo largo de un camino entre filas de paneles solares',
  },
  'parque-fotovoltaico-calabaza': {
    title: 'Caminos de tierra en parque fotovoltaico',
    alt: 'Vista aérea de un parque fotovoltaico con sus caminos de tierra entre colinas',
  },
  'parque-fotovoltaico-sabana-de-la-mar': {
    title: 'Obras civiles en parque fotovoltaico',
    location: 'Sabana de la Mar',
    alt: 'Paneles solares sobre bases de hormigón frente a un palmar',
  },
  'parque-fotovoltaico-san-pedro': {
    title: 'Movimiento de tierras y obras civiles para parque fotovoltaico',
    location: 'San Pedro de Macorís',
    alt: 'Vista aérea de un parque fotovoltaico con sus bloques de paneles',
  },
  'nave-ceramitejas-villa-mella': {
    title: 'Nave industrial para uso comercial',
    location: 'Villa Mella',
    alt: 'Nave de lámina metálica con mercancía y un camión de carga en el patio',
  },
  'supermercado-villa-mella': {
    title: 'Nave industrial para supermercado',
    location: 'Villa Mella',
    alt: 'Supermercado con fachada naranja y nave de lámina metálica, con su explanada de parqueo',
  },
  'nave-mango-bani-aerea': {
    title: 'Estructura y cubierta metálica de nave para planta empacadora de mango',
    location: 'Matanzas, Baní',
    alt: 'Vista aérea de la nave terminada, con techo blanco y paredes verdes, junto a su parqueo asfaltado',
  },
  'container-yard-haina': {
    title: 'Pavimento de container yard',
    location: 'Haina',
    alt: 'Patio de contenedores con pavimento terminado y contenedores azules al fondo',
  },
} satisfies Record<string, ObraPhoto>;

export type ObraPhotoId = keyof typeof obraPhotos;

const masters = import.meta.glob<{ default: ImageMetadata }>('/src/assets/obras/*.avif', { eager: true });

/**
 * Cada foto se guarda una sola vez en src/assets/obras/ (2K reescalada con IA desde el original de "FOTOS TENAX"; el
 * hero, 4K) y Astro genera al compilar las versiones más pequeñas. Falla el build si una foto no tiene imagen.
 */
const versions = Object.fromEntries(
  await Promise.all(
    (Object.keys(obraPhotos) as ObraPhotoId[]).map(async (id) => {
      const master = masters[`/src/assets/obras/${id}.avif`];
      if (!master) throw new Error(`Foto de obra sin imagen en src/assets/obras/: "${id}"`);
      return [id, await imageVersions(master.default)];
    }),
  ),
) as Record<ObraPhotoId, ImageVersions>;

/** Foto a 1600 px, para los fondos a todo lo ancho de las bandas de contacto. */
export const obraPhoto = (id: ObraPhotoId): ImageAsset => {
  const { large, width, height } = versions[id];
  return { src: large, alt: obraPhotos[id].alt, width, height };
};

/** Miniatura (800 px de ancho) para tarjetas y cuadrículas, con srcset hasta la original; el visor abre la original. */
export const obraThumb = (id: ObraPhotoId): ImageAsset => {
  const { thumb, srcset, original, width, height } = versions[id];
  return { src: thumb, srcset, fullSrc: original, alt: obraPhotos[id].alt, width, height };
};

/** Pie de foto de la galería: "Título — Ubicación". */
export const obraCaption = (id: ObraPhotoId): string => {
  const photo: ObraPhoto = obraPhotos[id];
  return photo.location ? `${photo.title} — ${photo.location}` : photo.title;
};
