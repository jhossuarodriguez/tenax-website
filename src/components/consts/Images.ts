export interface Image {
  id: string
  alt: string
  title: string
  location: string
  description?: string
  category?: string
}

export const BANNER_IMAGES: Image[] = [
  {
    id: 'banner1',
    alt: 'Banner 1',
    title: 'Banner 1',
    location: 'Santo Domingo, RD',
  },
  {
    id: 'banner2',
    alt: 'Banner 2',
    title: 'Banner 2',
    location: 'Santo Domingo, RD',
  },
  {
    id: 'banner3',
    alt: 'Banner 3',
    title: 'Banner 3',
    location: 'Santo Domingo, RD',
  },
  {
    id: 'banner4',
    alt: 'Banner 4',
    title: 'Banner 4',
    location: 'Santo Domingo, RD',
  },
  {
    id: 'banner5',
    alt: 'Banner 5',
    title: 'Banner 5',
    location: 'Santo Domingo, RD',
  },
] as const

export const PROJECTS_IMAGES: Image[] = [
  //Principales
  {
    id: 'Paneles-1',
    alt: 'Paneles solares proyecto 1',
    title: 'Paneles solares en parque fotovoltaico para fábrica agroindustrial',
    location: 'El Valle, Hato Mayor, RD',
    description: 'Proyecto de paneles solares en parque fotovoltaico para fábrica agroindustrial.',
    category: 'paneles-solares',
  },
  {
    id: 'Remodelacion-1',
    alt: 'Remodelación proyecto 1',
    title: 'Remodelación de oficina',
    location: 'Santo Domingo, RD',
    description: 'Proyecto de remodelación de oficina.',
    category: '',
  },
  {
    id: 'villa-unifamiliar-lujo',
    alt: 'Control de acceso: verja perimetral metálica',
    title: 'Control de acceso: verja perimetral metálica',
    location: 'Navieras Haina, Santo Domingo, RD',
    description: 'Proyecto de control de acceso con verja perimetral metálica.',
    category: '',
  },
  {
    id: 'Naves-2',
    alt: 'Nave industrial para fábrica de plásticos',
    title: 'Nave industrial para fábrica de plásticos',
    location: 'Santo Domingo Oeste, República Dominicana',
    description: 'Proyecto de nave industrial para fábrica de plásticos.',
    category: 'naves-industriales',
  },

  // Paneles solares
  {
    id: 'Paneles-2',
    alt: 'Proyecto 4',
    title: 'Paneles solares en parque fotovoltaico para fábrica agroindustrial',
    location: 'El Valle, Hato Mayor, RD',
    description: 'Proyecto de paneles solares en parque fotovoltaico para fábrica agroindustrial.',
    category: 'paneles-solares',
  },
  {
    id: 'Paneles-3',
    alt: 'Proyecto 4',
    title: 'Paneles solares en parque fotovoltaico para fábrica agroindustrial',
    location: 'El Seibo, RD',
    description: 'Proyecto de paneles solares en parque fotovoltaico para fábrica agroindustrial.',
    category: 'paneles-solares',
  },
  {
    id: 'Paneles-4',
    alt: 'Proyecto 4',
    title: 'Hincado, montaje y colocación de paneles solares en el km 23',
    location: 'Autopista Duarte, km 23, RD',
    description: 'Proyecto de hincado, montaje y colocación de paneles solares en el km 23.',
    category: 'paneles-solares',
  },

  // Naves industriales
  {
    id: 'Naves-1',
    alt: 'Envarillado y vaciado de losa en caja de ascensor',
    title: 'Envarillado y vaciado de losa en caja de ascensor',
    location: 'El Valle, Hato Mayor, RD',
    description: 'Proyecto de envarillado y vaciado de losa en caja de ascensor.',
    category: 'naves-industriales',
  },
  {
    id: 'Naves-4',
    alt: 'Interior del techado en nave industrial para uso comercial',
    title: 'Interior del techado en nave industrial para uso comercial',
    location: 'Villa Mella, RD',
    description: 'Proyecto del interior del techado en nave industrial para uso comercial.',
    category: 'naves-industriales',
  },
  {
    id: 'Naves-3',
    alt: 'Nave industrial para uso comercial',
    title: 'Nave industrial para uso comercial',
    location: 'Villa Mella, RD',
    description: 'Proyecto de nave industrial para uso comercial.',
    category: 'naves-industriales',
  },

  // Pavimentos y cimentaciones
  {
    id: 'Pavimentos-1',
    alt: 'Envarillado y vaciado de losa en caja de ascensor',
    title: 'Envarillado y vaciado de losa en caja de ascensor',
    location: 'Santo Domingo, RD',
    description: 'Proyecto de envarillado y vaciado de losa en caja de ascensor.',
    category: 'pavimentos-cimentaciones',
  },
  {
    id: 'Pavimentos-2',
    alt: 'Bases estructurales para paneles solares',
    title: 'Bases estructurales para paneles solares',
    location: 'Villa Mella, RD',
    description: 'Proyecto de bases estructurales para paneles solares.',
    category: 'pavimentos-cimentaciones',
  },
  {
    id: 'Pavimentos-3',
    alt: 'Acceso peatonal con rampa escalonada',
    title: 'Acceso peatonal con rampa escalonada',
    location: 'Navieras Haina, Santo Domingo, RD',
    description: 'Proyecto de acceso peatonal con rampa escalonada.',
    category: 'pavimentos-cimentaciones',
  },
  {
    id: 'Pavimentos-4',
    alt: 'Construcción de muro de contención tipo AB',
    title: 'Construcción de muro de contención tipo AB',
    location: 'Km 13, Autopista Duarte, República Dominicana',
    description: 'Proyecto de construcción de muro de contención tipo AB.',
    category: 'pavimentos-cimentaciones',
  },
] as const
