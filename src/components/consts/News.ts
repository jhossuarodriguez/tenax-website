export interface News {
    imageUrl: string,
    title: string,
    description: string,
    author: string,
    date: string,
}

export const NEWS: News[] = [
    {
        imageUrl: "/images/banner1.webp",
        title: "Nueva Ley de Vivienda en RD",
        description: "La nueva ley de vivienda en República Dominicana busca fomentar el acceso a viviendas dignas y asequibles para todos los ciudadanos.",
        author: "Shana Lora",
        date: "2023-10-01",
    },
    {
        imageUrl: "/images/banner1.webp",
        title: "Impacto de la Construcción Sostenible",
        description: "La construcción sostenible está revolucionando el sector inmobiliario, promoviendo prácticas que benefician al medio ambiente y a la sociedad.",
        author: "Yuliana de la Cruz",
        date: "2023-10-02",
    },
    {
        imageUrl: "/images/banner1.webp",
        title: "Tendencias del Mercado Inmobiliario 2023",
        description: "Exploramos las tendencias más relevantes del mercado inmobiliario en 2023, desde la digitalización hasta la sostenibilidad.",
        author: "Milkiara Gonzalez",
        date: "2023-10-03",
    },
    {
        imageUrl: "/images/banner1.webp",
        title: "Financiamiento de Proyectos Inmobiliarios",
        description: "Analizamos las diferentes opciones de financiamiento disponibles para proyectos inmobiliarios en República Dominicana.",
        author: "Yuliana de la Cruz",
        date: "2023-10-04",
    }

] as const