export interface Image {
    image: string;
    alt: string;
    title: string;
    location: string;
}

export const BANNER_IMAGES: Image[] = [
    {
        image: "/images/banner1.webp",
        alt: "Banner 1",
        title: "Banner 1",
        location: "Santo Domingo, RD",
    },
    {
        image: "/images/banner2.webp",
        alt: "Banner 2",
        title: "Banner 2",
        location: "Santo Domingo, RD",
    },
    {
        image: "/images/banner3.webp",
        alt: "Banner 3",
        title: "Banner 3",
        location: "Santo Domingo, RD",
    },
    {
        image: "/images/banner4.webp",
        alt: "Banner 4",
        title: "Banner 4",
        location: "Santo Domingo, RD",
    },
    {
        image: "/images/banner5.webp",
        alt: "Banner 5",
        title: "Banner 5",
        location: "Santo Domingo, RD",
    },
] as const

export const PROJECTS_IMAGES: Image[] = [
    {
        image: "/projects/1.webp",
        alt: "Proyecto 1",
        title: "Proyecto 1",
        location: "Santo Domingo, RD",
    },
    {
        image: "/projects/2.webp",
        alt: "Proyecto 2",
        title: "Proyecto 2",
        location: "Santo Domingo, RD",
    },
    {
        image: "/projects/3.webp",
        alt: "Proyecto 3",
        title: "Proyecto 3",
        location: "Santo Domingo, RD",
    },
] as const;


