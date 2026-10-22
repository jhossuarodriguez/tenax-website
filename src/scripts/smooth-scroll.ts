import Lenis from 'lenis';

/**
 * Scroll suave de toda la página con Lenis.
 * - `anchors`: los enlaces `#id` de la misma página también se desplazan suave.
 * - Lenis ya respeta `prefers-reduced-motion` (en ese caso el scroll es nativo).
 * - Para que una zona con scroll propio (modales, listas) no la controle Lenis, ponle `data-lenis-prevent`.
 */
export const lenis = new Lenis({
  autoRaf: true,
  anchors: true,
});
