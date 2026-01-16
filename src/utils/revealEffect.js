export class RevealEffect {
  constructor() {
    this.init()
  }

  init() {
    if (!('IntersectionObserver' in window)) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    document.querySelectorAll('[data-reveal]').forEach((element) => {
      observer.observe(element)
    })
  }
}

function initReveal() {
  new RevealEffect()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal)
} else {
  initReveal()
}

// Para navegación SPA
document.addEventListener('astro:page-load', initReveal)
