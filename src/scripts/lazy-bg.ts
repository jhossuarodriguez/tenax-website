/**
 * Fondos CSS diferidos. Los background-image de CSS se descargan al cargar la página aunque estén lejos;
 * con `data-bg` (el valor completo de background-image) se aplican cuando el elemento se acerca a la pantalla.
 */

const MARGIN = '600px 0px';

const elements = document.querySelectorAll<HTMLElement>('[data-bg]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.style.backgroundImage = el.dataset.bg ?? '';
        observer.unobserve(el);
      }
    },
    { rootMargin: MARGIN },
  );
  elements.forEach((el) => observer.observe(el));
} else {
  elements.forEach((el) => (el.style.backgroundImage = el.dataset.bg ?? ''));
}
