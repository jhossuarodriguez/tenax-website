import type { PortfolioCategory, PortfolioCategoryId, PortfolioProject, ProjectSpec } from '@/types';
import { obraPhotos, obraThumb, type ObraPhotoId } from '@/data/obras';
import { getService } from '@/data/services';

/** Categorías del portafolio, en el orden del menú de Proyectos definido por Tenax. */
const categorySeeds: Record<PortfolioCategoryId, { title: string; intro: string }> = {
  industrial: {
    title: 'Industrial',
    intro: 'Naves, cimentaciones, movimientos de tierras y obras civiles para plantas y espacios de producción.',
  },
  comercial: {
    title: 'Comercial',
    intro: 'Naves y edificaciones para el comercio, con estructuras metálicas, reforzamientos y obras de hormigón.',
  },
  energia: {
    title: 'Energía',
    intro: 'Movimiento de tierras, caminos, drenaje, obras civiles y vallado para parques fotovoltaicos.',
  },
  'institucional-educativo': {
    title: 'Institucional y Educativo',
    intro: 'Cubiertas y estructuras metálicas para escuelas y espacios comunitarios.',
  },
  residencial: {
    title: 'Residencial',
    intro: 'Preparación del terreno e infraestructura para nuevos desarrollos residenciales.',
  },
  agroindustrial: {
    title: 'Agroindustrial',
    intro: 'Naves e infraestructura para el acopio, la operación y la exportación de productos agrícolas.',
  },
  'logistica-almacenamiento': {
    title: 'Logística y Almacenamiento',
    intro: 'Naves de almacenaje, pavimentos, control de acceso y oficinas para puertos y centros logísticos.',
  },
  puentes: {
    title: 'Puentes',
    intro: 'Puentes alcantarillados y obras de drenaje para el paso vehicular sobre cauces.',
  },
};

export const categories: PortfolioCategory[] = (Object.keys(categorySeeds) as PortfolioCategoryId[]).map((id) => ({
  id,
  ...categorySeeds[id],
  href: `/proyectos/${id}/`,
}));

interface ProjectSeed {
  slug: string;
  category: PortfolioCategoryId;
  /** Slug del servicio: es el "tipo de obra" de la ficha. */
  servicio: string;
  /** Sin título ni ubicación se usan los de la portada en obras.ts. */
  title?: string;
  location?: string;
  lead?: string;
  body: string[];
  closing?: string[];
  specs?: ProjectSpec[];
  /** La primera es la portada y la segunda va a todo el ancho de la ficha. */
  fotos: [ObraPhotoId, ...ObraPhotoId[]];
}

/**
 * Proyectos del portafolio. Los del documento de contenido de Tenax llevan su título; el resto son las obras
 * de "FOTOS TENAX". Sin nombres de clientes ni contratistas.
 */
const seeds: ProjectSeed[] = [
  // Residencial
  {
    slug: 'silver-beach',
    category: 'residencial',
    servicio: 'movimiento-tierra',
    title: 'Silver Beach',
    location: 'Las Terrenas, Samaná',
    lead: 'Movimiento de tierras para la conformación de plataformas base para edificaciones.',
    body: [
      'TENAX Construction ejecutó los trabajos de movimiento de tierras para el desarrollo residencial Silver Beach, ubicado en Las Terrenas, Samaná, con una superficie de terminación de 49,642.71 m².',
      'El alcance comprendió la limpieza y desbroce del terreno, excavación y retiro de material inservible, excavación en roca, así como la colocación, nivelación, humectación y compactación de 73,838 m³ de relleno.',
      'Los trabajos incluyeron escarificación de superficies, conformación y perfilado de taludes, apoyados por labores de topografía, nivelación y control de obra.',
    ],
    closing: [
      'Silver Beach representa una muestra de la capacidad técnica y operativa de TENAX Construction para ejecutar movimientos de tierras de gran escala, preparando las condiciones necesarias para el desarrollo de nuevas edificaciones.',
    ],
    specs: [
      { label: 'Área de intervención', value: '49,642.71 m²' },
      { label: 'Relleno compactado', value: '73,838 m³' },
      { label: 'Estatus', value: 'Ejecutado' },
    ],
    fotos: ['movimiento-tierra-samana-1', 'movimiento-tierra-samana-4', 'movimiento-tierra-samana-2', 'movimiento-tierra-samana-3'],
  },

  // Energía
  {
    slug: 'parque-fotovoltaico-mata-de-palma',
    category: 'energia',
    servicio: 'cunetas',
    title: 'Obras de arte y drenaje en el parque fotovoltaico Mata de Palma',
    location: 'Mata de Palma',
    body: ['Obras de arte y drenaje en el parque fotovoltaico Mata de Palma, a lo largo de los caminos internos entre las filas de paneles solares.'],
    fotos: ['parque-fotovoltaico-mata-de-palma'],
  },
  {
    slug: 'parque-fotovoltaico-calabaza',
    category: 'energia',
    servicio: 'movimiento-tierra',
    title: 'Obras viales: caminos de tierra en el parque fotovoltaico Calabaza, fase I',
    body: ['Construcción de los caminos de tierra de la fase I del parque fotovoltaico Calabaza.'],
    fotos: ['parque-fotovoltaico-calabaza'],
  },
  {
    slug: 'parque-fotovoltaico-sabana-de-la-mar',
    category: 'energia',
    servicio: 'vallado-perimetral',
    title: 'Canalización eléctrica, obras civiles y vallado metálico para el parque fotovoltaico de una planta agroindustrial',
    location: 'Sabana de la Mar',
    body: ['Canalización eléctrica, obras civiles y vallado metálico para el parque fotovoltaico de una planta agroindustrial en Sabana de la Mar.'],
    fotos: ['parque-fotovoltaico-sabana-de-la-mar'],
  },
  {
    slug: 'parque-fotovoltaico-san-pedro-de-macoris',
    category: 'energia',
    servicio: 'movimiento-tierra',
    title: 'Movimiento de tierras y obras civiles para parque fotovoltaico, con vallado metálico y bases para paneles solares',
    location: 'San Pedro de Macorís',
    body: ['Movimiento de tierras y obras civiles para un parque fotovoltaico en San Pedro de Macorís, incluyendo el vallado metálico y las bases para los paneles solares.'],
    fotos: ['parque-fotovoltaico-san-pedro'],
  },

  // Comercial
  {
    slug: 'nave-comercial-ceramitejas-villa-mella',
    category: 'comercial',
    servicio: 'naves-industriales',
    title: 'Nave industrial para uso comercial Ceramitejas II',
    location: 'Villa Mella',
    body: ['Nave industrial de estructura metálica y cerramiento de lámina para uso comercial en Villa Mella.'],
    fotos: ['nave-ceramitejas-villa-mella'],
  },
  {
    slug: 'nave-comercial-supermercado-villa-mella',
    category: 'comercial',
    servicio: 'naves-industriales',
    title: 'Nave industrial para uso comercial: Supermercado Cariñoso Villa Mella 2',
    location: 'Villa Mella',
    body: ['Nave industrial para uso comercial destinada a supermercado en Villa Mella.'],
    fotos: ['supermercado-villa-mella'],
  },
  {
    slug: 'escalera-emergencia',
    category: 'comercial',
    servicio: 'estructura-metalica',
    body: ['Escalera exterior de acero con descansos y barandas en cada nivel, adosada a la fachada como ruta de evacuación del edificio.'],
    fotos: ['escalera-emergencia-1', 'escalera-emergencia-2'],
  },
  {
    slug: 'showroom',
    category: 'comercial',
    servicio: 'estructura-metalica',
    body: ['Marquesina de estructura metálica reticulada para exhibir y proteger los vehículos en la entrada de un showroom.'],
    fotos: ['showroom-1'],
  },
  {
    slug: 'retrofit',
    category: 'comercial',
    servicio: 'retrofit',
    body: ['Reforzamiento de columnas existentes con empresillado metálico (ángulos y platinas de acero) y acabado de mortero, sin demoler la estructura.'],
    fotos: ['retrofit-2', 'retrofit-1', 'retrofit-3', 'retrofit-4'],
  },
  {
    slug: 'envarillado-losa',
    category: 'comercial',
    servicio: 'hormigon-armado',
    body: ['Encofrado de madera, armado del acero de refuerzo y vaciado de la losa de una caja de ascensor en la azotea de un edificio.'],
    fotos: ['envarillado-losa-1', 'envarillado-losa-2'],
  },
  {
    slug: 'base-pavimento-hormigon',
    category: 'comercial',
    servicio: 'pavimentos',
    title: 'Preparación de base para pavimento de hormigón',
    body: ['Preparación de la base con excavadora y camiones para un pavimento de hormigón.'],
    fotos: ['pavimento-rannik'],
  },
  {
    slug: 'garita-seguridad',
    category: 'comercial',
    servicio: 'control-acceso',
    body: ['Garita de vigilancia con ventanales en la entrada de un parqueo, con baranda metálica en el acceso peatonal.'],
    fotos: ['garita-seguridad-1', 'garita-seguridad-2'],
  },

  // Logística y almacenamiento
  {
    slug: 'container-yard-haina',
    category: 'logistica-almacenamiento',
    servicio: 'pavimentos',
    title: 'Container yard: pavimento de 10,000 m²',
    location: 'Haina',
    body: ['Vaciado de pavimento rígido de hormigón en fajas, con acabado estriado antideslizante, para un patio de contenedores de tránsito pesado.'],
    specs: [{ label: 'Área de pavimento', value: '10,000 m²' }],
    fotos: ['container-yard-haina', 'pavimento-1', 'pavimento-2', 'pavimento-3', 'pavimento-4'],
  },
  {
    slug: 'garita-control-acceso-caucedo',
    category: 'logistica-almacenamiento',
    servicio: 'control-acceso',
    title: 'Estructura metálica para garita de control de acceso y seguridad en instalaciones de importación y exportación',
    location: 'Caucedo',
    body: ['Marquesina metálica sobre los carriles de entrada, con dos casetas de vigilancia en islas de hormigón.'],
    fotos: ['control-acceso-1'],
  },
  {
    slug: 'contenedor-oficina-caucedo',
    category: 'logistica-almacenamiento',
    servicio: 'estructura-metalica',
    title: 'Izaje y colocación de contenedor acondicionado como oficina',
    location: 'Caucedo',
    body: ['Izaje con grúa y colocación de un contenedor acondicionado como oficina, con plataforma, escalera y barandas metálicas.'],
    fotos: ['oficina-contenedor-1', 'izaje-contenedor-1', 'oficina-contenedor-2'],
  },
  {
    slug: 'bodega-importacion-temporal-caucedo',
    category: 'logistica-almacenamiento',
    servicio: 'naves-industriales',
    title: 'Nave industrial para bodega de importación temporal',
    location: 'Caucedo',
    body: ['Nave de almacenaje con fachada de lámina metálica y patio de maniobras de hormigón para mercancía de importación temporal.'],
    fotos: ['nave-bodega-temporal-1', 'nave-bodega-importacion-2'],
  },
  {
    slug: 'bodega-almacenamiento-temporal-caucedo',
    category: 'logistica-almacenamiento',
    servicio: 'naves-industriales',
    title: 'Nave industrial para bodega de almacenamiento temporal',
    location: 'Caucedo',
    body: ['Naves y cobertizos de estructura metálica para el almacenaje temporal de mercancía y chasis de contenedores.'],
    fotos: ['nave-bodega-temporal-2', 'nave-bodega-temporal-3'],
  },
  {
    slug: 'adoquines-parqueo-haina',
    category: 'logistica-almacenamiento',
    servicio: 'pavimentos',
    title: 'Pavimentación con adoquines en parqueo de oficinas portuarias',
    location: 'Haina',
    body: ['Parqueo de adoquines de hormigón intertrabados, asentados sobre cama de arena, junto a un patio de contenedores.'],
    fotos: ['adoquines-parqueo-1', 'adoquines-parqueo-2'],
  },
  {
    slug: 'porton-acceso',
    category: 'logistica-almacenamiento',
    servicio: 'control-acceso',
    body: ['Portón y verja metálica de barrotes en el acceso de un edificio de oficinas.'],
    fotos: ['porton-acceso-1'],
  },

  // Industrial
  {
    slug: 'nave-industrial',
    category: 'industrial',
    servicio: 'naves-industriales',
    body: [
      'Naves con pórticos de acero, cerramientos de paneles prefabricados de hormigón o bloques, cubierta de lámina metálica y piso de hormigón, desde la estructura hasta el interior terminado.',
    ],
    fotos: ['nave-industrial-6', 'nave-industrial-1', 'nave-industrial-4', 'nave-industrial-5', 'nave-industrial-7', 'nave-industrial-3'],
  },
  {
    slug: 'nave-fabrica-plasticos',
    category: 'industrial',
    servicio: 'naves-industriales',
    body: ['Estructura de columnas y vigas de hormigón armado y cerramiento de la nave de producción de una fábrica de plásticos.'],
    fotos: ['nave-fabrica-plasticos-2', 'nave-fabrica-plasticos-1'],
  },
  {
    slug: 'movimiento-tierra',
    category: 'industrial',
    servicio: 'movimiento-tierra',
    body: ['Excavación, carga y transporte de material con excavadoras y camiones volteo, y relleno de explanadas para nuevas obras.'],
    fotos: ['movimiento-tierra-3', 'movimiento-tierra-1', 'movimiento-tierra-2', 'movimiento-tierra-4'],
  },
  {
    slug: 'movimiento-tierra-pavimento',
    category: 'industrial',
    servicio: 'movimiento-tierra',
    body: ['Retiro del material inadecuado y preparación de la subrasante para un pavimento de hormigón.'],
    fotos: ['movimiento-tierra-pavimento-1'],
  },
  {
    slug: 'nivelacion-terreno',
    category: 'industrial',
    servicio: 'movimiento-tierra',
    body: ['Nivelación y compactación con rodillo vibratorio de una explanada amplia, lista para recibir el pavimento.'],
    fotos: ['nivelacion-terreno-3', 'nivelacion-terreno-1', 'nivelacion-terreno-2'],
  },
  {
    slug: 'colocacion-hormigon',
    category: 'industrial',
    servicio: 'hormigon-armado',
    body: ['Colocación del hormigón desde el camión hormigonera, extendido y nivelación de franjas sobre acero de refuerzo.'],
    fotos: ['colocacion-hormigon-2', 'colocacion-hormigon-1'],
  },
  {
    slug: 'muro-contencion-ab',
    category: 'industrial',
    servicio: 'muros-contencion',
    body: ['Muro curvo de bloques segmentados tipo AB, apilados sin mortero, con relleno compactado detrás para contener el talud.'],
    fotos: ['muro-contencion-ab-1', 'muro-contencion-ab-2'],
  },
  {
    slug: 'cunetas',
    category: 'industrial',
    servicio: 'cunetas',
    body: ['Cunetas de hormigón con malla de refuerzo a lo largo de un camino, para recoger y desviar el agua de lluvia.'],
    fotos: ['cunetas-2', 'cunetas-1'],
  },
  {
    slug: 'vallado-perimetral',
    category: 'industrial',
    servicio: 'vallado-perimetral',
    body: ['Cerca de malla ciclónica galvanizada con alambre de púas sobre postes metálicos a lo largo del perímetro y del camino de acceso.'],
    fotos: ['vallado-perimetral-1', 'vallado-perimetral-2', 'vallado-perimetral-3'],
  },

  // Agroindustrial
  {
    slug: 'nave-acopio-mango-bani',
    category: 'agroindustrial',
    servicio: 'naves-industriales',
    title: 'Nave para acopio y exportación de mango',
    body: ['Montaje de pórticos de acero a dos aguas sobre cimentación de hormigón armado para una nave de acopio, almacenamiento y operación logística.'],
    // La aérea de la nave terminada va primero: es la portada de la ficha y la foto de la portada del sitio.
    fotos: ['nave-mango-bani-aerea', 'nave-industrial-bani'],
  },

  // Institucional y educativo
  {
    slug: 'techo-tijerillas-escuela',
    category: 'institucional-educativo',
    servicio: 'estructura-metalica',
    body: ['Cubierta del comedor de una escuela sobre tijerillas de tubo de acero, que cubren todo el salón sin columnas intermedias.'],
    fotos: ['techo-tijerillas-1', 'techo-tijerillas-2'],
  },
  {
    slug: 'techo-policarbonato',
    category: 'institucional-educativo',
    servicio: 'estructura-metalica',
    body: [
      'Techo curvo de policarbonato sobre arcos metálicos en un pasillo de acceso: deja pasar la luz natural y protege de la lluvia y los rayos UV.',
    ],
    fotos: ['techo-policarbonato-1', 'techo-policarbonato-2'],
  },
  {
    slug: 'cancha-boveda-tubular',
    category: 'institucional-educativo',
    servicio: 'estructura-metalica',
    body: ['Cancha de baloncesto cubierta por una bóveda de estructura tubular de acero.'],
    fotos: ['cancha-boveda-tubular-1'],
  },

  // Puentes
  {
    slug: 'puente-alcantarillado',
    category: 'puentes',
    servicio: 'puentes-alcantarillados',
    body: [
      'Paso vehicular sobre un cauce con batería de tubos de hormigón armado, cabezales y aletas de hormigón, relleno compactado y rodadura de grava.',
    ],
    fotos: [
      'puente-alcantarillado-3',
      'puente-alcantarillado-1',
      'puente-alcantarillado-5',
      'puente-alcantarillado-8',
      'puente-alcantarillado-7',
      'puente-alcantarillado-4',
      'puente-alcantarillado-6',
      'puente-alcantarillado-2',
    ],
  },
];

const categoryById = new Map(categories.map((c) => [c.id, c]));

export const portfolio: PortfolioProject[] = seeds.map((p) => {
  const service = getService(p.servicio);
  if (!service) throw new Error(`Proyecto ${p.slug}: no existe el servicio "${p.servicio}"`);
  const category = categoryById.get(p.category)!;
  const [main, feature, ...rest] = p.fotos;
  const cover: { title: string; location?: string } = obraPhotos[main];
  const title = p.title ?? cover.title;
  const location = p.location ?? cover.location;
  return {
    slug: p.slug,
    href: `${category.href}${p.slug}/`,
    category,
    title,
    location,
    service: { title: service.title, href: `/servicios/${service.slug}/` },
    summary: p.lead ?? p.body[0],
    lead: p.lead,
    body: p.body,
    closing: p.closing ?? [],
    specs: p.specs ?? [],
    cover: obraThumb(main),
    feature: feature ? obraThumb(feature) : undefined,
    gallery: rest.map(obraThumb),
  };
});

export const projectsIn = (category: PortfolioCategoryId): PortfolioProject[] => portfolio.filter((p) => p.category.id === category);
