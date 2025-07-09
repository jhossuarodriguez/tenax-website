import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_h2MVnGe2.mjs';
import 'kleur/colors';
import { P as PROJECTS_IMAGES, $ as $$Layout } from '../../chunks/Images_CAmQY9r3.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://tenaxconstruction.com.do");
const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) return Astro2.redirect("/404");
  const project = PROJECTS_IMAGES.find((project2) => project2.id === id);
  if (!project) return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex justify-center items-center w-full min-h-screen"> <img${addAttribute(id, "data-id")}${addAttribute(`/projects/${id}.webp`, "src")}${addAttribute(project?.alt, "alt")} class="object-cover flex-shrink-0" loading="lazy"${addAttribute(renderTransition($$result2, "3mdxs7la", "", `image-${id}`), "data-astro-transition-scope")}> </section> ` })}`;
}, "C:/Users/jhoss/Dev/tenax-website/src/pages/projects/[id].astro", "self");

const $$file = "C:/Users/jhoss/Dev/tenax-website/src/pages/projects/[id].astro";
const $$url = "/projects/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
