import { c as createAstro, a as createComponent, d as addAttribute, h as renderScript, b as renderTemplate, m as maybeRenderHead, r as renderComponent, s as spreadAttributes, u as unescapeHTML, i as renderHead, j as renderSlot } from './astro/server_h2MVnGe2.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import './index_CCxZAn8N.mjs';
import { $ as $$ResponsiveImage } from './_astro_assets_ByNpmxQ_.mjs';

const $$Astro = createAstro("https://tenaxconstruction.com.do");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/jhoss/Dev/tenax-website/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jhoss/Dev/tenax-website/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed px-20 py-3 w-full h-auto z-50" data-astro-cid-3ef6ksr2> <div class="flex flex-row justify-between items-end" data-astro-cid-3ef6ksr2> <div class="flex justify-start md:flex-grow md:basis-0 items-center" data-astro-cid-3ef6ksr2> <a class="flex items-center hover:scale-105 transition-transform duration-200" href="/" title="Ir a la página principal de Tenax Construction" aria-label="Ir a la página principal" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$ResponsiveImage, { "class": "w-60 h-auto", "width": "240", "height": "180", "src": "/logo-tenax.webp", "alt": "Logo Tenax Construction", "format": "webp", "fetchpriority": "high", "decoding": "async", "loading": "eager", "data-astro-cid-3ef6ksr2": true })} </a> </div> <nav class="flex justify-center items-center gap-8 uppercase text-[15px] font-normal" data-astro-cid-3ef6ksr2> <a href="#inicio" class="relative inline-block hover:text-[#F46738] pb-1 group tracking-tight" title="Ir a la página de inicio" aria-label="Ir a la página de inicio" data-astro-cid-3ef6ksr2>
Inicio
<span class="absolute left-0 bottom-0 w-full h-0.5 bg-[#F46738] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" data-astro-cid-3ef6ksr2></span> </a> <a class="relative inline-block hover:text-[#F46738] pb-1 group tracking-tight" href="#nosotros" title="Ir a la página de nosotros" aria-label="Ir a la página de nosotros" data-astro-cid-3ef6ksr2>Nosotros
<span class="absolute left-0 bottom-0 w-full h-0.5 bg-[#F46738] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" data-astro-cid-3ef6ksr2></span> </a> <a class="relative inline-block text-white hover:text-[#F46738] pb-1 group tracking-tight font-medium" href="#proyectos" title="Ir a la página de proyectos" aria-label="Ir a la página de proyectos" data-astro-cid-3ef6ksr2>Proyectos
<span class="absolute left-0 bottom-0 w-full h-0.5 bg-[#F46738] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" data-astro-cid-3ef6ksr2></span> </a> <a class="relative inline-block hover:text-[#F46738] pb-1 group tracking-tight" href="#servicios" title="Ir a la página de servicios" aria-label="Ir a la página de servicios" data-astro-cid-3ef6ksr2>Servicios
<span class="absolute left-0 bottom-0 w-full h-0.5 bg-[#F46738] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" data-astro-cid-3ef6ksr2></span> </a> <a class="relative inline-block text-white hover:text-[#F46738] pb-1 group tracking-tight" href="#noticias" title="Ir a la página de noticias" aria-label="Ir a la página de noticias" data-astro-cid-3ef6ksr2>Noticias
<span class="absolute left-0 bottom-0 w-full h-0.5 bg-[#F46738] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" data-astro-cid-3ef6ksr2></span> </a> <a class="relative inline-block text-white hover:text-[#F46738] pb-1 group tracking-tight" href="#contacto" title="Ir a la página de contacto" aria-label="Ir a la página de contacto" data-astro-cid-3ef6ksr2>Contacto
<span class="absolute left-0 bottom-0 w-full h-0.5 bg-[#F46738] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" data-astro-cid-3ef6ksr2></span> </a> </nav> </div> </header> `;
}, "C:/Users/jhoss/Dev/tenax-website/src/components/Header.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const Facebook = createSvgComponent({"meta":{"src":"/_astro/facebook.DKJ9hHHf.svg","width":48,"height":48,"format":"svg"},"attributes":{"fill":"currentColor","viewBox":"0 0 48 48"},"children":"\r\n  <g clip-path=\"url(#a)\">\r\n    <path fill=\"#000\" d=\"M24 0C10.745 0 0 10.745 0 24c0 11.255 7.75 20.7 18.203 23.293V31.334h-4.95V24h4.95v-3.16c0-8.169 3.697-11.955 11.716-11.955 1.521 0 4.145.298 5.218.596v6.648c-.566-.06-1.55-.09-2.773-.09-3.935 0-5.455 1.492-5.455 5.367V24h7.84L33.4 31.334H26.91v16.49C38.793 46.39 48 36.271 48 24 48 10.745 37.255 0 24 0Z\" />\r\n  </g>\r\n  <defs>\r\n    <clipPath id=\"a\">\r\n      <path fill=\"#000\" d=\"M0 0h48v48H0z\" />\r\n    </clipPath>\r\n  </defs>\r\n"});

const Instagram = createSvgComponent({"meta":{"src":"/_astro/instagram.-eo7Y0bb.svg","width":48,"height":48,"format":"svg"},"attributes":{"fill":"none","viewBox":"0 0 48 48"},"children":"\r\n  <g fill=\"#000\" clip-path=\"url(#a)\">\r\n    <path d=\"M24 4.322c6.413 0 7.172.028 9.694.14 2.343.104 3.61.497 4.453.825 1.116.432 1.922.957 2.756 1.791.844.844 1.36 1.64 1.79 2.756.329.844.723 2.12.826 4.454.112 2.53.14 3.29.14 9.693 0 6.413-.028 7.172-.14 9.694-.103 2.344-.497 3.61-.825 4.453-.431 1.116-.957 1.922-1.79 2.756-.845.844-1.642 1.36-2.757 1.791-.844.328-2.119.722-4.453.825-2.532.112-3.29.14-9.694.14-6.413 0-7.172-.028-9.694-.14-2.343-.103-3.61-.497-4.453-.825-1.115-.431-1.922-.956-2.756-1.79-.844-.844-1.36-1.641-1.79-2.757-.329-.844-.723-2.119-.826-4.453-.112-2.531-.14-3.29-.14-9.694 0-6.412.028-7.172.14-9.694.103-2.343.497-3.609.825-4.453.431-1.115.957-1.921 1.79-2.756.845-.844 1.642-1.36 2.757-1.79.844-.329 2.119-.722 4.453-.825 2.522-.113 3.281-.141 9.694-.141ZM24 0c-6.516 0-7.331.028-9.89.14-2.55.113-4.304.526-5.822 1.116-1.585.619-2.926 1.435-4.257 2.775-1.34 1.332-2.156 2.672-2.775 4.247C.666 9.806.253 11.55.141 14.1.028 16.669 0 17.484 0 24s.028 7.331.14 9.89c.113 2.55.526 4.304 1.116 5.822.619 1.585 1.435 2.925 2.775 4.257a11.732 11.732 0 0 0 4.247 2.765c1.528.591 3.272 1.003 5.822 1.116 2.56.112 3.375.14 9.89.14 6.516 0 7.332-.028 9.891-.14 2.55-.113 4.303-.525 5.822-1.116a11.732 11.732 0 0 0 4.247-2.765 11.732 11.732 0 0 0 2.766-4.247c.59-1.528 1.003-3.272 1.115-5.822.113-2.56.14-3.375.14-9.89 0-6.516-.027-7.332-.14-9.891-.112-2.55-.525-4.303-1.115-5.822-.591-1.594-1.407-2.935-2.747-4.266a11.732 11.732 0 0 0-4.247-2.765C38.194.675 36.45.262 33.9.15 31.331.028 30.516 0 24 0Z\" />\r\n    <path d=\"M24 11.672c-6.806 0-12.328 5.522-12.328 12.328 0 6.806 5.522 12.328 12.328 12.328 6.806 0 12.328-5.522 12.328-12.328 0-6.806-5.522-12.328-12.328-12.328Zm0 20.325a7.998 7.998 0 0 1 0-15.994 7.998 7.998 0 0 1 0 15.994ZM39.694 11.184a2.879 2.879 0 1 1-2.878-2.878 2.885 2.885 0 0 1 2.878 2.878Z\" />\r\n  </g>\r\n  <defs>\r\n    <clipPath id=\"a\">\r\n      <path fill=\"#000\" d=\"M0 0h48v48H0z\" />\r\n    </clipPath>\r\n  </defs>\r\n"});

const Linkedin = createSvgComponent({"meta":{"src":"/_astro/linkedin.C0v0W0aW.svg","width":48,"height":48,"format":"svg"},"attributes":{"fill":"none","viewBox":"0 0 48 48"},"children":"\r\n  <g clip-path=\"url(#a)\">\r\n    <path fill=\"#000\" d=\"M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0ZM14.24 40.903H7.116V17.991h7.125v22.912ZM10.678 14.87a4.127 4.127 0 0 1-4.134-4.125 4.127 4.127 0 0 1 4.134-4.125 4.125 4.125 0 0 1 0 8.25Zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572Z\" />\r\n  </g>\r\n  <defs>\r\n    <clipPath id=\"a\">\r\n      <path fill=\"#000\" d=\"M0 0h48v48H0z\" />\r\n    </clipPath>\r\n  </defs>\r\n"});

const TikTok = createSvgComponent({"meta":{"src":"/_astro/tiktok.CtAkF1FH.svg","width":48,"height":48,"format":"svg"},"attributes":{"fill":"none","viewBox":"0 0 48 48"},"children":"\r\n  <path fill=\"#000\" d=\"M34.145 0h-8.09v32.696c0 3.895-3.11 7.095-6.982 7.095-3.872 0-6.984-3.2-6.984-7.095 0-3.826 3.043-6.957 6.776-7.096v-8.209C10.637 17.531 4 24.278 4 32.696 4 41.183 10.776 48 19.142 48s15.141-6.887 15.141-15.304V15.93A18.732 18.732 0 0 0 45 19.548v-8.209C38.916 11.13 34.145 6.122 34.145 0Z\" />\r\n"});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-row items-start justify-center mx-16 gap-x-28 mt-20"> <div class="flex flex-col mt-20"> <span class="text-black text-sm font-semibold uppercase">Servicios</span> <div class="flex flex-col py-6"> <ul class="flex flex-col gap-y-2"> <li> <a class="text-[#888888] hover:text-black transition-transform duration-300" href="#servicios" title="Ver servicios de excavación y movimiento de tierra" aria-label="Ver servicios de excavación y movimiento de tierra">
Excavación
</a> </li> <li> <a class="text-[#888888] hover:text-black transition-transform duration-300" href="#servicios" title="Ver servicios de perforación especializada" aria-label="Ver servicios de perforación especializada">
Perforación
</a> </li> <li> <a class="text-[#888888] hover:text-black transition-transform duration-300" href="#servicios" title="Ver servicios de transporte de materiales" aria-label="Ver servicios de transporte de materiales">
Transporte
</a> </li> </ul> </div> </div> <div class="flex flex-col mt-20"> <span class="text-black text-sm font-semibold uppercase">
Nosotros
</span> <div class="flex flex-col py-6"> <ul class="flex flex-col gap-y-2"> <li> <a class="text-[#888888] hover:text-black transition-transform duration-300" href="#preguntas-frecuentes" title="Ver preguntas frecuentes sobre nuestros servicios" aria-label="Ver preguntas frecuentes sobre nuestros servicios">
Preguntas Frecuentes
</a> </li> <li> <a class="text-[#888888] hover:text-black transition-transform duration-300" href="#noticias" title="Ver las últimas noticias de la construcción" aria-label="Ver las últimas noticias de la construcción">
Noticias del Sector
</a> </li> <li> <a class="text-[#888888] hover:text-black transition-transform duration-300" href="#contacto" title="Obtener soporte técnico" aria-label="Obtener soporte técnico">
Soporte Técnico
</a> </li> </ul> </div> </div> <div class="flex flex-col mt-20"> <span class="text-black text-sm font-semibold uppercase">Proyectos</span> <div class="flex flex-col py-6"> <ul class="flex flex-col gap-y-2"> <li> <a class="text-[#888888] hover:text-black transition-transform duration-300" href="#nosotros" title="Conocer más sobre Tenax Construction" aria-label="Conocer más sobre Tenax Construction">
Sobre Nosotros
</a> </li> <li> <a class="text-[#888888] hover:text-black transition-transform duration-300" href="#proyectos" title="Ver galería de proyectos completados" aria-label="Ver galería de proyectos completados">
Proyectos Realizados
</a> </li> <li> <a class="text-[#888888] hover:text-black transition-transform duration-300" href="#contacto" title="Formulario de contacto directo" aria-label="Formulario de contacto directo">
Contáctanos
</a> </li> </ul> </div> </div> <div class="w-[600px] flex flex-col p-10 bg-black/88 translate-x-10"> <header class="text-white font-semibold">Suscribete</header> <div class="mt-6 flex flex-row"> <input type="email" placeholder="Ingresa tu correo electrónico" class="w-full p-3 border border-gray-300 rounded text-black bg-white" aria-label="Correo electrónico para suscribirse al boletín"> <button type="submit" class="ml-2 px-4 py-3 bg-[#F46738] text-white rounded hover:bg-[#e35d2c] transition-colors duration-300 cursor-pointer" title="Suscribirse al boletín de noticias" aria-label="Suscribirse al boletín de noticias de Tenax Construction">
Suscribirse
</button> </div> <div class="mt-6 text-white text-sm"> <p class="mt-2 leading-7">
Suscribete a nuestro boletín para recibir las últimas novedades
                y actualizaciones de Tenax Construction.
</p> </div> </div> </section> <hr class="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"> <div class="flex justify-between items-center mx-16"> <div class="flex items-center gap-x-6"> <a href="#inicio"> ${renderComponent($$result, "Image", $$ResponsiveImage, { "class": "w-28 h-auto mb-5", "width": "160", "height": "120", "src": "/logo-tenax.webp", "alt": "Tenax Construction Logo", "loading": "lazy" })} </a> <span class="text-black text-sm">
© Todos los derechos reservados.
</span> </div> <div class="flex items-center gap-x-6"> <a href="#inicio" class="text-black hover:text-[#F46738] transition-colors duration-200 text-sm font-medium" title="Volver al inicio de la página" aria-label="Volver al inicio de la página">
↑ Ir arriba
</a> <a href="https://www.facebook.com/Tnaxconstruction" target="_blank" rel="noopener noreferrer" title="Tenax Construction en Facebook" aria-label="Tenax Construction en Facebook"> ${renderComponent($$result, "Facebook", Facebook, { "class": "w-6 h-6 hover:scale-110 transition-transform duration-100" })} </a> <a href="https://www.instagram.com/tenaxconstruction/" target="_blank" rel="noopener noreferrer" title="Tenax Construction en Instagram" aria-label="Tenax Construction en Instagram"> ${renderComponent($$result, "Instagram", Instagram, { "class": "w-6 h-6 hover:scale-110 transition-transform duration-100" })} </a> <a href="https://www.linkedin.com/company/tenax-construction-srl/" target="_blank" rel="noopener noreferrer" title="Tenax Construction en LinkedIn" aria-label="Tenax Construction en LinkedIn"> ${renderComponent($$result, "Linkedin", Linkedin, { "class": "w-6 h-6 hover:scale-110 transition-transform duration-100" })} </a> <a href="https://www.tiktok.com/@tenaxconstruction" target="_blank" rel="noopener noreferrer" title="Tenax Construction en TikTok" aria-label="Tenax Construction en TikTok"> ${renderComponent($$result, "TikTok", TikTok, { "class": "w-6 h-6 hover:scale-110 transition-transform duration-100", "fill": "currentColor" })} </a> </div> </div>`;
}, "C:/Users/jhoss/Dev/tenax-website/src/components/Footer.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>Tenax Construction - Constructora Dominicana</title><meta name="og:title" content="Tenax Construction"><meta name="description" content="Constructora dominicana comprometida con la excelencia en la administración, construcción, diseño y supervisión de obras civiles."><meta name="og:image" content="/logo-tenax.webp"><meta name="og:description" content="Constructora dominicana comprometida con la excelencia en la administración, construcción, diseño y supervisión de obras civiles."><meta name="og:type" content="website"><meta name="og:url" content="https://tenaxconstruction.com.do"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="/logo-tenax.webp"><meta name="twitter:title" content="Tenax Construction"><meta name="author" content="Jhossua Roa Rodriguez"><meta name="robots" content="follow, index"><link rel="icon" type="image/webp+xml" href="/favicon.webp" title="Tenax Construction favicon">${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body class="mx-auto w-full h-dvh" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "C:/Users/jhoss/Dev/tenax-website/src/layouts/Layout.astro", void 0);

const BANNER_IMAGES = [
  {
    id: "banner1",
    alt: "Banner 1",
    title: "Banner 1",
    location: "Santo Domingo, RD"
  },
  {
    id: "banner2",
    alt: "Banner 2",
    title: "Banner 2",
    location: "Santo Domingo, RD"
  },
  {
    id: "banner3",
    alt: "Banner 3",
    title: "Banner 3",
    location: "Santo Domingo, RD"
  },
  {
    id: "banner4",
    alt: "Banner 4",
    title: "Banner 4",
    location: "Santo Domingo, RD"
  },
  {
    id: "banner5",
    alt: "Banner 5",
    title: "Banner 5",
    location: "Santo Domingo, RD"
  }
];
const PROJECTS_IMAGES = [
  {
    id: "proyecto-edificio-residencial",
    alt: "Proyecto 1",
    title: "Proyecto 1",
    location: "Santo Domingo, RD",
    description: "Construcción de edificio residencial moderno con 20 apartamentos y amenidades completas incluyendo piscina y gimnasio."
  },
  {
    id: "desarrollo-comercial-mixto",
    alt: "Proyecto 2",
    title: "Proyecto 2",
    location: "Santo Domingo, RD",
    description: "Desarrollo comercial de usos mixtos con locales comerciales en planta baja y oficinas en niveles superiores."
  },
  {
    id: "villa-unifamiliar-lujo",
    alt: "Proyecto 3",
    title: "Proyecto 3",
    location: "Santo Domingo, RD",
    description: "Villa unifamiliar de lujo con diseño contemporáneo, piscina privada y amplios espacios verdes."
  }
];

export { $$Layout as $, BANNER_IMAGES as B, PROJECTS_IMAGES as P, createSvgComponent as c };
