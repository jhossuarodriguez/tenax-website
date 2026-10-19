import type { GalleryPageData, GalleryPhoto } from '@/types';
import { ctaBand } from '@/data/sectors';
import { categoryLabels, projectPhoto, projectPhotos, type ProjectPhotoId } from '@/data/projects';

/** Todas las fotos de obra de Tenax; el pie de foto es "Título — Ubicación". */
export const galleryPhotos: GalleryPhoto[] = (Object.keys(projectPhotos) as ProjectPhotoId[]).map((id) => {
  const { title, location } = projectPhotos[id];
  const caption = `${title} — ${location.replace(/, (RD|República Dominicana)$/, '')}`;
  return { image: { ...projectPhoto(id), alt: caption }, caption };
});

export const galleryPage: GalleryPageData = {
  hero: {
    breadcrumbs: [{ label: 'Inicio', href: '/' }, { label: 'Galería' }],
    eyebrow: 'Galería',
    title: 'Nuestros',
    titleEmphasis: 'Proyectos',
    subtitle: 'Explora nuestros proyectos destacados: paneles solares, naves industriales, pavimentos y cimentaciones.',
    strip: ['80 proyectos completados', '80 clientes satisfechos', '13 años en el mercado'],
  },
  photos: galleryPhotos,
  band: {
    kicker: '// Lo que construimos',
    title: 'Construimos estructuras, elevamos tu proyecto',
    text: 'Contamos con equipos especializados y maquinaria pesada de última generación para realizar proyectos con eficiencia y precisión en toda la República Dominicana.',
    tags: [...Object.values(categoryLabels), 'Hormigón Armado'],
  },
  cta: ctaBand,
};
