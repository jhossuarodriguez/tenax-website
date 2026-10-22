import type { GalleryPageData, GalleryPhoto } from '@/types';
import { ctaBand } from '@/data/sectors';
import { obraCaption, obraPhotos, obraThumb, type ObraPhotoId } from '@/data/obras';
import { services } from '@/data/services';

/** Fotos de obra de "FOTOS TENAX": miniatura en la cuadrícula y foto completa en el visor. */
export const galleryPhotos: GalleryPhoto[] = (Object.keys(obraPhotos) as ObraPhotoId[]).map((id) => ({
  image: obraThumb(id),
  caption: obraCaption(id),
}));

export const galleryPage: GalleryPageData = {
  hero: {
    breadcrumbs: [{ label: 'Inicio', href: '/' }, { label: 'Galería' }],
    eyebrow: 'Galería',
    title: 'Nuestros',
    titleEmphasis: 'Proyectos',
    subtitle:
      'Explora nuestras obras: movimiento de tierra, naves industriales, puentes y alcantarillados, pavimentos, estructuras metálicas y más.',
    strip: ['80 proyectos completados', '80 clientes satisfechos', '13 años en el mercado'],
  },
  photos: galleryPhotos,
  band: {
    kicker: '// Lo que construimos',
    title: 'Construimos estructuras, elevamos tu proyecto',
    text: 'Contamos con equipos especializados y maquinaria pesada de última generación para realizar proyectos con eficiencia y precisión en toda la República Dominicana.',
    tags: services.map((s) => s.title),
  },
  cta: ctaBand,
};
