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
        category: "paneles-solares",
    },
    {
        id: "desarrollo-comercial-mixto",
        alt: "Paneles Solares Proyecto 2",
        title: "Paneles Solares",
        location: "Santo Domingo, RD",
        category: "naves-industriales",
    },
    {
        id: "villa-unifamiliar-lujo",
        alt: "Proyecto 3",
        title: "Proyecto 3",
        location: "Santo Domingo, RD",
        category: "pavimentos-cimentaciones",
    },
    {
        id: "desarrollo",
        alt: "Proyecto 4",
        title: "Proyecto 4",
        location: "Santo Domingo, RD",
        category: "pavimentos-cimentaciones",
    },

    //Paneles Solares
    {
        id: "Paneles-2",
        alt: "Proyecto 4",
        title: "Hincado, Montaje y Colocación De Paneles Solares En El KM. 23",
        location: "Autopista Duarte KM. 23, RD",
        category: "paneles-solares",
    }
    ,
    {
        id: "Paneles-3",
        alt: "Proyecto 4",
        title: "Paneles Solares en Parque Fotovoltaico para Fábrica Agroindustrial",
        location: "El Seibo, RD",
        category: "paneles-solares",
    },
    {
        id: "Paneles-4",
        alt: "Proyecto 4",
        title: "Hincado, Montaje y Colocación De Paneles Solares En El KM. 23",
        location: "Autopista Duarte KM. 23, RD",
        category: "paneles-solares",
    }
] as const;


