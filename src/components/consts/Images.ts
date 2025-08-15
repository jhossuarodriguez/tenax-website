export interface Image {
    id: string;
    alt: string;
    title: string;
    location: string;
    description?: string;
    category?: string;
}

export const BANNER_IMAGES: Image[] = [
    {
        id: "banner1",
        alt: "Banner 1",
        title: "Banner 1",
        location: "Santo Domingo, RD",
    },
    {
        id: "banner2",
        alt: "Banner 2",
        title: "Banner 2",
        location: "Santo Domingo, RD",
    },
    {
        id: "banner3",
        alt: "Banner 3",
        title: "Banner 3",
        location: "Santo Domingo, RD",
    },
    {
        id: "banner4",
        alt: "Banner 4",
        title: "Banner 4",
        location: "Santo Domingo, RD",
    },
    {
        id: "banner5",
        alt: "Banner 5",
        title: "Banner 5",
        location: "Santo Domingo, RD",
    },
] as const

export const PROJECTS_IMAGES: Image[] = [
    //Principales
    {
        id: "Paneles-1",
        alt: "Paneles Solares Proyecto 1",
        title: "Paneles Solares en Parque Fotovoltaico Para Fabrica Agroindustrial",
        location: "El Valle, Hato Mayor, RD",
        description: "Proyecto de paneles solares en parque fotovoltaico para fábrica agroindustrial.",
        category: "paneles-solares",
    },
    {
        id: "Remodelacion-1",
        alt: "Remodelación Proyecto 1",
        title: "Remodelación de Oficina",
        location: "Santo Domingo, RD",
        description: "Proyecto de remodelación de oficina.",
        category: "",
    },
    {
        id: "villa-unifamiliar-lujo",
        alt: "Control de Acceso: Verja perimetral Metálica",
        title: "Control de Acceso: Verja perimetral Metálica",
        location: "Navieras Haina, Santo Domingo, RD",
        description: "Proyecto de control de acceso con verja perimetral metálica.",
        category: "",
    },
    {
        id: "Naves-2",
        alt: "Nave Industrial para fabrica de plásticos",
        title: "Nave Industrial para fabrica de plásticos",
        location: "Santo Domingo Oeste, República Dominicana",
        description: "Proyecto de Nave Industrial para fabrica de plásticos.",
        category: "naves-industriales",
    },

    //Paneles Solares
    {
        id: "Paneles-2",
        alt: "Proyecto 4",
        title: "Paneles Solares en Parque Fotovoltaico para Fábrica Agroindustrial",
        location: "El valle, Hato Mayor, RD",
        description: "Proyecto de paneles solares en parque fotovoltaico para fábrica agroindustrial.",
        category: "paneles-solares",
    },
    {
        id: "Paneles-3",
        alt: "Proyecto 4",
        title: "Paneles Solares en Parque Fotovoltaico para Fábrica Agroindustrial",
        location: "El Seibo, RD",
        description: "Proyecto de paneles solares en parque fotovoltaico para fábrica agroindustrial.",
        category: "paneles-solares",
    },
    {
        id: "Paneles-4",
        alt: "Proyecto 4",
        title: "Hincado, Montaje y Colocación De Paneles Solares En El KM. 23",
        location: "Autopista Duarte KM. 23, RD",
        description: "Proyecto de hincado, montaje y colocación de paneles solares en el KM. 23.",
        category: "paneles-solares",
    },

    //Naves Industriales
    {
        id: "Naves-1",
        alt: "Proyecto 4",
        title: "Envarillado y Vaciado de Losa EN CAJA DE ASENSOR",
        location: "El valle, Hato Mayor, RD",
        description: "Envarillado y Vaciado de Losa EN CAJA DE ASENSOR, El valle, Hato Mayor, RD",
        category: "naves-industriales",
    },
    {
        id: "Naves-4",
        alt: "Interior del Techado en Nave Industrial para Uso Comercial",
        title: "Interior del Techado en Nave Industrial para Uso Comercial",
        description: "Proyecto de interior del techado en nave industrial para uso comercial. Villa Mella, RD",
        location: "Villa Mella, RD",
        category: "naves-industriales",
    },
    {
        id: "Naves-3",
        alt: "Nave Industrial para Uso Comercial",
        title: "Nave Industrial para Uso Comercial",
        description: "Proyecto de nave industrial para uso comercial. Villa Mella, RD",
        location: "Villa Mella, RD",
        category: "naves-industriales",
    },

    //pavimentos-cimentaciones
    {
        id: "Pavimentos-1",
        alt: "Envarillado y Vaciado de Losa EN CAJA DE ASENSOR",
        title: "Envarillado y Vaciado de Losa EN CAJA DE ASENSOR",
        description: "Envarillado y Vaciado de Losa EN CAJA DE ASENSOR, Santo Domingo, RD",
        location: "Santo Domingo, RD",
        category: "pavimentos-cimentaciones",
    },
    {
        id: "Pavimentos-2",
        alt: "Bases Estructurales Para Paneles Solares",
        title: "Bases Estructurales Para Paneles Solares",
        description: "Bases Estructurales Para Paneles Solares, Villa Mella, RD",
        location: "Villa Mella, RD",
        category: "pavimentos-cimentaciones",
    },
    {
        id: "Pavimentos-3",
        alt: "Acceso Peatonal con Rampa Escalonada",
        title: "Acceso Peatonal con Rampa Escalonada",
        description: "Acceso peatonal con rampa escalonada. Navieras Haina, Santo Domingo, RD",
        location: "Navieras Haina, Santo Domingo, RD",
        category: "pavimentos-cimentaciones",
    },
    {
        id: "Pavimentos-4",
        alt: "Construcción de Muro de Contención Tipo AB",
        title: "Construcción de Muro de Contención Tipo AB",
        description: "Construcción de muro de contención tipo AB. KM. 13, Autopista Duarte, República Dominicana",
        location: "KM. 13, Autopista Duarte, República Dominicana",
        category: "pavimentos-cimentaciones",
    }

] as const;


