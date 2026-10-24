import type { ImageAsset, PortfolioProject } from '@/types';
import { obraPhotos, obraThumb, type ObraPhotoId } from '@/data/obras';
import { getService } from '@/data/services';

export type ProjectCategory = 'paneles-solares' | 'naves-industriales' | 'pavimentos-cimentaciones' | 'remodelacion' | 'estructura-metalica';

/** Nombres de las categorías (los filtros del sitio de Tenax, más las dos sin filtro propio). */
export const categoryLabels: Record<ProjectCategory, string> = {
  'paneles-solares': 'Paneles Solares',
  'naves-industriales': 'Naves Industriales',
  'pavimentos-cimentaciones': 'Pavimentos y Cimentaciones',
  remodelacion: 'Remodelación',
  'estructura-metalica': 'Estructura Metálica',
};

interface ProjectPhoto {
  title: string;
  location: string;
  description: string;
  category: ProjectCategory;
}

/** Fotos de obra de Tenax (clave = nombre del archivo), con sus textos originales. */
export const projectPhotos = {
  'Paneles-1': { title: 'Paneles solares en parque fotovoltaico para fábrica agroindustrial', location: 'El Valle, Hato Mayor, RD', description: 'Proyecto de paneles solares en parque fotovoltaico para fábrica agroindustrial.', category: 'paneles-solares' },
  'Paneles-2': { title: 'Paneles solares en parque fotovoltaico para fábrica agroindustrial', location: 'El Valle, Hato Mayor, RD', description: 'Proyecto de paneles solares en parque fotovoltaico para fábrica agroindustrial.', category: 'paneles-solares' },
  'Paneles-3': { title: 'Paneles solares en parque fotovoltaico para fábrica agroindustrial', location: 'El Seibo, RD', description: 'Proyecto de paneles solares en parque fotovoltaico para fábrica agroindustrial.', category: 'paneles-solares' },
  'Paneles-4': { title: 'Hincado, montaje y colocación de paneles solares en el km 23', location: 'Autopista Duarte, km 23, RD', description: 'Proyecto de hincado, montaje y colocación de paneles solares en el km 23.', category: 'paneles-solares' },
  'Remodelacion-1': { title: 'Remodelación de oficina', location: 'Santo Domingo, RD', description: 'Proyecto de remodelación de oficina.', category: 'remodelacion' },
  'villa-unifamiliar-lujo': { title: 'Control de acceso: verja perimetral metálica', location: 'Navieras Haina, Santo Domingo, RD', description: 'Proyecto de control de acceso con verja perimetral metálica.', category: 'estructura-metalica' },
  'Naves-1': { title: 'Envarillado y vaciado de losa en caja de ascensor', location: 'El Valle, Hato Mayor, RD', description: 'Proyecto de envarillado y vaciado de losa en caja de ascensor.', category: 'naves-industriales' },
  'Naves-2': { title: 'Nave industrial para fábrica de plásticos', location: 'Santo Domingo Oeste, República Dominicana', description: 'Proyecto de nave industrial para fábrica de plásticos.', category: 'naves-industriales' },
  'Naves-3': { title: 'Nave industrial para uso comercial', location: 'Villa Mella, RD', description: 'Proyecto de nave industrial para uso comercial.', category: 'naves-industriales' },
  'Naves-4': { title: 'Interior del techado en nave industrial para uso comercial', location: 'Villa Mella, RD', description: 'Proyecto del interior del techado en nave industrial para uso comercial.', category: 'naves-industriales' },
  'Pavimentos-1': { title: 'Envarillado y vaciado de losa en caja de ascensor', location: 'Santo Domingo, RD', description: 'Proyecto de envarillado y vaciado de losa en caja de ascensor.', category: 'pavimentos-cimentaciones' },
  'Pavimentos-2': { title: 'Bases estructurales para paneles solares', location: 'Villa Mella, RD', description: 'Proyecto de bases estructurales para paneles solares.', category: 'pavimentos-cimentaciones' },
  'Pavimentos-3': { title: 'Acceso peatonal con rampa escalonada', location: 'Navieras Haina, Santo Domingo, RD', description: 'Proyecto de acceso peatonal con rampa escalonada.', category: 'pavimentos-cimentaciones' },
  'Pavimentos-4': { title: 'Construcción de muro de contención tipo AB', location: 'Km 13, Autopista Duarte, República Dominicana', description: 'Proyecto de construcción de muro de contención tipo AB.', category: 'pavimentos-cimentaciones' },
} satisfies Record<string, ProjectPhoto>;

export type ProjectPhotoId = keyof typeof projectPhotos;

/** Imagen de una foto de obra (AVIF optimizado), con su título como texto alternativo. */
export const projectPhoto = (id: ProjectPhotoId, position?: string): ImageAsset => ({
  src: `/images/optimized/tenax/${id}.avif`,
  alt: projectPhotos[id].title,
  position,
});

/** "Navieras Haina, Santo Domingo, RD" → "Navieras Haina, Santo Domingo". */
export const shortLocation = (location: string): string => location.replace(/, (RD|República Dominicana)$/, '');

/** Pie de foto de la galería: "Título — Ubicación". */
export const projectCaption = (id: ProjectPhotoId): string => `${projectPhotos[id].title} — ${shortLocation(projectPhotos[id].location)}`;

interface ProjectSeed {
  id: string;
  /** Slug del servicio; su título va en las etiquetas de la tarjeta. */
  servicio: string;
  descripcion: string;
  /** La primera es la portada; el título y la ubicación salen de ella. */
  fotos: [ObraPhotoId, ...ObraPhotoId[]];
}

/** Proyectos del portafolio: las fotos de "FOTOS TENAX" con el mismo título y ubicación forman una tarjeta. */
const projects: ProjectSeed[] = [
  {
    id: 'movimiento-tierra-las-terrenas',
    servicio: 'movimiento-tierra',
    descripcion:
      'Desbroce, corte, relleno y nivelación de un terreno costero junto a la playa, con excavadora y rodillo compactador, hasta dejar a nivel la plataforma y el camino de acceso.',
    fotos: ['movimiento-tierra-samana-3', 'movimiento-tierra-samana-1', 'movimiento-tierra-samana-2', 'movimiento-tierra-samana-4'],
  },
  {
    id: 'movimiento-tierra',
    servicio: 'movimiento-tierra',
    descripcion: 'Excavación, carga y transporte de material con excavadoras y camiones volteo, y relleno de explanadas para nuevas obras.',
    fotos: ['movimiento-tierra-3', 'movimiento-tierra-1', 'movimiento-tierra-2', 'movimiento-tierra-4'],
  },
  {
    id: 'movimiento-tierra-pavimento',
    servicio: 'movimiento-tierra',
    descripcion: 'Retiro del material inadecuado y preparación de la subrasante para un pavimento de hormigón.',
    fotos: ['movimiento-tierra-pavimento-1'],
  },
  {
    id: 'nivelacion-terreno',
    servicio: 'movimiento-tierra',
    descripcion: 'Nivelación y compactación con rodillo vibratorio de una explanada amplia, lista para recibir el pavimento.',
    fotos: ['nivelacion-terreno-3', 'nivelacion-terreno-1', 'nivelacion-terreno-2'],
  },
  {
    id: 'nave-industrial',
    servicio: 'naves-industriales',
    descripcion:
      'Naves con pórticos de acero, cerramientos de paneles prefabricados de hormigón o bloques, cubierta de lámina metálica y piso de hormigón, desde la estructura hasta el interior terminado.',
    fotos: ['nave-industrial-6', 'nave-industrial-1', 'nave-industrial-4', 'nave-industrial-5', 'nave-industrial-7', 'nave-industrial-3'],
  },
  {
    id: 'nave-industrial-bani',
    servicio: 'naves-industriales',
    descripcion: 'Montaje de pórticos de acero a dos aguas sobre cimentación de hormigón armado para una nave industrial.',
    fotos: ['nave-industrial-bani'],
  },
  {
    id: 'nave-fabrica-plasticos',
    servicio: 'naves-industriales',
    descripcion: 'Estructura de columnas y vigas de hormigón armado y cerramiento de la nave de producción de una fábrica de plásticos.',
    fotos: ['nave-fabrica-plasticos-2', 'nave-fabrica-plasticos-1'],
  },
  {
    id: 'nave-bodega-importacion',
    servicio: 'naves-industriales',
    descripcion:
      'Nave de almacenaje terminada, con fachada de lámina metálica, escalera metálica de acceso a oficinas y patio de maniobras de hormigón.',
    fotos: ['nave-bodega-importacion-2'],
  },
  {
    id: 'nave-bodega-temporal',
    servicio: 'naves-industriales',
    descripcion: 'Naves y cobertizos de estructura metálica para el almacenaje temporal de mercancía y chasis de contenedores.',
    fotos: ['nave-bodega-temporal-1', 'nave-bodega-temporal-3', 'nave-bodega-temporal-2'],
  },
  {
    id: 'puente-alcantarillado',
    servicio: 'puentes-alcantarillados',
    descripcion:
      'Paso vehicular sobre un cauce con batería de tubos de hormigón armado, cabezales y aletas de hormigón, relleno compactado y rodadura de grava.',
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
  {
    id: 'pavimento',
    servicio: 'pavimentos',
    descripcion:
      'Vaciado de pavimento rígido de hormigón en fajas, con acabado estriado antideslizante, para patios y accesos de tránsito pesado.',
    fotos: ['pavimento-1', 'pavimento-2', 'pavimento-3', 'pavimento-4'],
  },
  {
    id: 'pavimento-rannik',
    servicio: 'pavimentos',
    descripcion: 'Preparación de la base con excavadora y camiones para un pavimento de hormigón.',
    fotos: ['pavimento-rannik'],
  },
  {
    id: 'adoquines-parqueo',
    servicio: 'pavimentos',
    descripcion: 'Parqueo de adoquines de hormigón intertrabados, asentados sobre cama de arena, junto a un patio de contenedores.',
    fotos: ['adoquines-parqueo-1', 'adoquines-parqueo-2'],
  },
  {
    id: 'envarillado-losa',
    servicio: 'hormigon-armado',
    descripcion:
      'Encofrado de madera, armado del acero de refuerzo y vaciado de la losa de una caja de ascensor en la azotea de un edificio.',
    fotos: ['envarillado-losa-1', 'envarillado-losa-2'],
  },
  {
    id: 'colocacion-hormigon',
    servicio: 'hormigon-armado',
    descripcion: 'Colocación del hormigón desde el camión hormigonera, extendido y nivelación de franjas sobre acero de refuerzo.',
    fotos: ['colocacion-hormigon-2', 'colocacion-hormigon-1'],
  },
  {
    id: 'showroom',
    servicio: 'estructura-metalica',
    descripcion: 'Marquesina de estructura metálica reticulada para exhibir y proteger los vehículos en la entrada de un showroom.',
    fotos: ['showroom-1'],
  },
  {
    id: 'techo-tijerillas',
    servicio: 'estructura-metalica',
    descripcion:
      'Cubierta del comedor de una escuela sobre tijerillas de tubo de acero, que cubren todo el salón sin columnas intermedias.',
    fotos: ['techo-tijerillas-1', 'techo-tijerillas-2'],
  },
  {
    id: 'techo-policarbonato',
    servicio: 'estructura-metalica',
    descripcion:
      'Techo curvo de policarbonato sobre arcos metálicos en un pasillo de acceso: deja pasar la luz natural y protege de la lluvia y los rayos UV.',
    fotos: ['techo-policarbonato-1', 'techo-policarbonato-2'],
  },
  {
    id: 'escalera-emergencia',
    servicio: 'estructura-metalica',
    descripcion:
      'Escalera exterior de acero con descansos y barandas en cada nivel, adosada a la fachada como ruta de evacuación del edificio.',
    fotos: ['escalera-emergencia-1', 'escalera-emergencia-2'],
  },
  {
    id: 'retrofit',
    servicio: 'retrofit',
    descripcion:
      'Reforzamiento de columnas existentes con empresillado metálico (ángulos y platinas de acero) y acabado de mortero, sin demoler la estructura.',
    fotos: ['retrofit-2', 'retrofit-1', 'retrofit-3', 'retrofit-4'],
  },
  {
    id: 'muro-contencion-ab',
    servicio: 'muros-contencion',
    descripcion: 'Muro curvo de bloques segmentados tipo AB, apilados sin mortero, con relleno compactado detrás para contener el talud.',
    fotos: ['muro-contencion-ab-1', 'muro-contencion-ab-2'],
  },
  {
    id: 'cunetas',
    servicio: 'cunetas',
    descripcion: 'Cunetas de hormigón con malla de refuerzo a lo largo de un camino, para recoger y desviar el agua de lluvia.',
    fotos: ['cunetas-2', 'cunetas-1'],
  },
  {
    id: 'control-acceso',
    servicio: 'control-acceso',
    descripcion: 'Marquesina metálica sobre los carriles de entrada, con dos casetas de vigilancia en islas de hormigón.',
    fotos: ['control-acceso-1'],
  },
  {
    id: 'garita-seguridad',
    servicio: 'control-acceso',
    descripcion: 'Garita de vigilancia con ventanales en la entrada de un parqueo, con baranda metálica en el acceso peatonal.',
    fotos: ['garita-seguridad-1', 'garita-seguridad-2'],
  },
  {
    id: 'porton-acceso',
    servicio: 'control-acceso',
    descripcion: 'Portón y verja metálica de barrotes en el acceso de un edificio de oficinas.',
    fotos: ['porton-acceso-1'],
  },
  {
    id: 'vallado-perimetral',
    servicio: 'vallado-perimetral',
    descripcion:
      'Cerca de malla ciclónica galvanizada con alambre de púas sobre postes metálicos a lo largo del perímetro y del camino de acceso.',
    fotos: ['vallado-perimetral-1', 'vallado-perimetral-2', 'vallado-perimetral-3'],
  },
];

export const portfolio: PortfolioProject[] = projects.map(({ id, servicio, descripcion, fotos: [main, ...rest] }) => {
  const service = getService(servicio);
  if (!service) throw new Error(`Proyecto ${id}: no existe el servicio "${servicio}"`);
  const { title, location = 'República Dominicana' }: { title: string; location?: string } = obraPhotos[main];
  return {
    id,
    title,
    eyebrow: `${service.title} · ${location}`,
    description: descripcion,
    location,
    cover: obraThumb(main),
    gallery: rest.map(obraThumb),
  };
});
