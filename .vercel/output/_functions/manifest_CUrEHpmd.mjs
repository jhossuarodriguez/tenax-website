import 'kleur/colors';
import { f as decodeKey } from './chunks/astro/server_h2MVnGe2.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BgupxLq5.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/jhoss/Dev/tenax-website/","cacheDir":"file:///C:/Users/jhoss/Dev/tenax-website/node_modules/.astro/","outDir":"file:///C:/Users/jhoss/Dev/tenax-website/dist/","srcDir":"file:///C:/Users/jhoss/Dev/tenax-website/src/","publicDir":"file:///C:/Users/jhoss/Dev/tenax-website/public/","buildClientDir":"file:///C:/Users/jhoss/Dev/tenax-website/dist/client/","buildServerDir":"file:///C:/Users/jhoss/Dev/tenax-website/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":where([data-astro-image]){object-fit:var(--fit);object-position:var(--pos);height:auto}:where([data-astro-image=full-width]){width:100%}:where([data-astro-image=constrained]){max-width:100%}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}}],"site":"https://tenaxconstruction.com.do","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/jhoss/Dev/tenax-website/src/pages/projects/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/jhoss/Dev/tenax-website/src/components/Projects.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/jhoss/Dev/tenax-website/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/projects/[id]@_@astro":"pages/projects/_id_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","C:/Users/jhoss/Dev/tenax-website/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_V1qFOn_y.mjs","\u0000@astrojs-manifest":"manifest_CUrEHpmd.mjs","@astrojs/react/client.js":"_astro/client.Co0vMr8l.js","C:/Users/jhoss/Dev/tenax-website/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/handshaking.9-URNWiT.webp","/_astro/drawing.y_s9eDfb.webp","/_astro/crane.CRpk6nWx.webp","/_astro/sliderControl.DCdgHcS4.svg","/_astro/ceo_profile.DsioVjwN.webp","/_astro/grua.Dkge4Zgx.svg","/_astro/dumpDumper.dtio2qw2.svg","/_astro/hammer.BwNXI5Du.svg","/_astro/measure.DFq5ocB9.svg","/_astro/poppins-latin-ext-400-normal.by3JarPu.woff2","/_astro/poppins-latin-400-normal.cpxAROuN.woff2","/_astro/poppins-latin-600-normal.zEkxB9Mr.woff2","/_astro/poppins-devanagari-400-normal.CJDn6rn8.woff2","/_astro/poppins-devanagari-600-normal.STEjXBNN.woff2","/_astro/poppins-latin-ext-700-normal.cby-RkWa.woff2","/_astro/poppins-latin-ext-600-normal.CAhIAdZj.woff2","/_astro/poppins-devanagari-700-normal.O-jipLrW.woff2","/_astro/poppins-latin-700-normal.Qrb0O0WB.woff2","/_astro/facebook.DKJ9hHHf.svg","/_astro/instagram.-eo7Y0bb.svg","/_astro/tiktok.CtAkF1FH.svg","/_astro/linkedin.C0v0W0aW.svg","/_astro/poppins-latin-400-normal.BOb3E3N0.woff","/_astro/poppins-latin-ext-400-normal.DaBSavcJ.woff","/_astro/poppins-latin-600-normal.BJdTmd5m.woff","/_astro/poppins-devanagari-400-normal.CqVvlrh5.woff","/_astro/poppins-latin-ext-700-normal.DctTR6Tg.woff","/_astro/poppins-devanagari-600-normal.ClASKHrr.woff","/_astro/poppins-latin-ext-600-normal.Df5ffKXP.woff","/_astro/poppins-latin-700-normal.BVuQR_eA.woff","/_astro/poppins-devanagari-700-normal.fHs-vx92.woff","/favicon.webp","/logo-tenax.webp","/video.webm","/images/banner1.webp","/images/banner2.webp","/images/banner3.webp","/images/banner4.webp","/images/banner5.webp","/projects/desarrollo-comercial-mixto.webp","/projects/proyecto-edificio-residencial.webp","/projects/villa-unifamiliar-lujo.webp","/_astro/client.Co0vMr8l.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"1zollPzZydA5iJY3w92JV3hrgWmjNh6BM6kHtK8SCS8="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
