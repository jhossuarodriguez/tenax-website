import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';

/** Anchos que Astro genera al compilar (2048 solo en las más anchas, como el hero 4K); la original es la más grande. */
const WIDTHS = [400, 800, 1600, 2048];
const QUALITY = 62;

export interface ImageVersions {
  /** Versión de 800 px (o la original, si es más estrecha): el `src` de las miniaturas. */
  thumb: string;
  /** Versión de 1600 px (o la original): fondos a todo lo ancho. */
  large: string;
  /** La imagen original, sin recomprimir: la versión más grande, para el visor. */
  original: string;
  srcset: string;
  width: number;
  height: number;
}

/**
 * Versiones de una imagen de src/assets: Astro genera en AVIF las de WIDTHS que sean más estrechas que la original, y
 * la original entra tal cual como la más grande. Así cada foto se guarda una sola vez.
 */
export const imageVersions = async (image: ImageMetadata): Promise<ImageVersions> => {
  // Una versión casi tan ancha como la original no aporta nada.
  const widths = WIDTHS.filter((width) => width < image.width * 0.9);
  const generated = await Promise.all(
    widths.map(async (width) => ({ width, url: (await getImage({ src: image, width, format: 'avif', quality: QUALITY })).src })),
  );
  const versions = [...generated, { width: image.width, url: image.src }];
  const atLeast = (width: number): string => (versions.find((v) => v.width >= width) ?? versions[versions.length - 1]).url;
  return {
    thumb: atLeast(800),
    large: atLeast(1600),
    original: image.src,
    srcset: versions.map((v) => `${v.url} ${v.width}w`).join(', '),
    width: image.width,
    height: image.height,
  };
};
