import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

const EASE = 'power2.out'
// Long atmospheric reveals use a slow-fast-slow S-curve (design ref: cubic-bezier(0.455, 0.03, 0.515, 0.955)).
// GSAP eases must be named/registered eases, not a raw CSS timing-function string, so this is the closest built-in match.
const ATMOSPHERIC_EASE = 'power1.inOut'

export interface RevealOptions {
  y?: number
  duration?: number
  delay?: number
  start?: string
}

/** Fades + lifts each matched element in as it enters the viewport. */
export function revealOnScroll(selector: string | Element[], options: RevealOptions = {}) {
  const elements =
    typeof selector === 'string' ? gsap.utils.toArray<HTMLElement>(selector) : selector
  if (!elements.length) return

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: options.y ?? 32 },
      {
        autoAlpha: 1,
        y: 0,
        duration: options.duration ?? 0.5,
        delay: options.delay ?? 0,
        ease: EASE,
        scrollTrigger: {
          trigger: el,
          start: options.start ?? 'top 85%',
          once: true,
        },
      }
    )
  })
}

/** Reveals the direct children of a container with a stagger as the container enters view. */
export function staggerOnScroll(
  container: string,
  itemsSelector: string,
  options: RevealOptions & { stagger?: number } = {}
) {
  const containers = gsap.utils.toArray<HTMLElement>(container)
  containers.forEach((el) => {
    const items = el.querySelectorAll(itemsSelector)
    if (!items.length) return

    gsap.fromTo(
      items,
      { autoAlpha: 0, y: options.y ?? 32 },
      {
        autoAlpha: 1,
        y: 0,
        duration: options.duration ?? 0.5,
        stagger: options.stagger ?? 0.07,
        ease: EASE,
        scrollTrigger: {
          trigger: el,
          start: options.start ?? 'top 80%',
          once: true,
        },
      }
    )
  })
}

/** Long atmospheric entrance timeline for hero-style content, run once on load. */
export function heroReveal(selector: string, options: RevealOptions = {}) {
  const elements = gsap.utils.toArray<HTMLElement>(selector)
  if (!elements.length) return null

  return gsap.fromTo(
    elements,
    { autoAlpha: 0, y: options.y ?? 24 },
    {
      autoAlpha: 1,
      y: 0,
      duration: options.duration ?? 0.7,
      ease: ATMOSPHERIC_EASE,
      stagger: 0.08,
      delay: options.delay ?? 0.05,
    }
  )
}

/** Animates a numeric counter from 0 to its target value when scrolled into view. */
export function countUpOnScroll(selector: string) {
  const elements = gsap.utils.toArray<HTMLElement>(selector)
  elements.forEach((el) => {
    const target = Number(el.dataset.countTo ?? el.textContent ?? 0)
    const suffix = el.dataset.countSuffix ?? ''
    const counter = { value: 0 }
    el.textContent = `0${suffix}`

    gsap.to(counter, {
      value: target,
      duration: 1,
      ease: EASE,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
      onUpdate: () => {
        el.textContent = `${Math.round(counter.value)}${suffix}`
      },
    })
  })
}
