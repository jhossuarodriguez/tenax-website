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
    {
        id: "proyecto-edificio-residencial",
        alt: "Paneles Solares Proyecto 1",
        title: "Paneles Solares",
        location: "Santo Domingo, RD",
        description: "Construcción de edificio residencial moderno con 20 apartamentos y amenidades completas incluyendo piscina y gimnasio.",
        category: "paneles-solares",
    },
    {
        id: "desarrollo-comercial-mixto",
        alt: "Paneles Solares Proyecto 2",
        title: "Paneles Solares",
        location: "Santo Domingo, RD",
        description: "Desarrollo comercial de usos mixtos con locales comerciales en planta baja y oficinas en niveles superiores.",
        category: "naves-industriales",
    },
    {
        id: "villa-unifamiliar-lujo",
        alt: "Proyecto 3",
        title: "Proyecto 3",
        location: "Santo Domingo, RD",
        description: "Villa unifamiliar de lujo con diseño contemporáneo, piscina privada y amplios espacios verdes.",
        category: "pavimentos-cimentaciones",
    },
    {
        id: "desarrollo",
        alt: "Proyecto 4",
        title: "Proyecto 4",
        location: "Santo Domingo, RD",
        description: "Villa unifamiliar de lujo con diseño contemporáneo, piscina privada y amplios espacios verdes.",
        category: "pavimentos-cimentaciones",
    }
] as const;


