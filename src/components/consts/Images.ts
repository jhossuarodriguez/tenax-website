export interface Image {
    image: string;
    alt: string;
    title: string;
    location: string;
}

export const IMAGES: Image[] = [
    {
        image: "/images/banner1.webp",
        alt: "Proyecto 1",
        title: "Proyecto 1",
        location: "Santo Domingo, RD",
    },
    {
        image: "/images/banner2.webp",
        alt: "Proyecto 2",
        title: "Proyecto 2",
        location: "Santo Domingo, RD",
    },
    {
        image: "/images/banner3.webp",
        alt: "Proyecto 3",
        title: "Proyecto 3",
        location: "Santo Domingo, RD",
    },
    {
        image: "/images/banner4.webp",
        alt: "Proyecto 4",
        title: "Proyecto 4",
        location: "Santo Domingo, RD",
    },
    {
        image: "/images/banner5.webp",
        alt: "Proyecto 5",
        title: "Proyecto 5",
        location: "Santo Domingo, RD",
    },
] as const


