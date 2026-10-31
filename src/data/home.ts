import type { HomeFormField, HomeContent } from '@/types';
import { obraThumb } from '@/data/obras';
import { portfolio } from '@/data/portfolio';
import { site } from '@/data/site';

/** Contenido de la portada, con los textos del sitio de Tenax Construction. */

const img = (file: string): string => `/images/optimized/tenax/${file}.avif`;

/** Enlace a la ficha de un proyecto del portafolio; falla el build si el proyecto no existe. */
const projectHref = (slug: string): string => {
  const project = portfolio.find((p) => p.slug === slug);
  if (!project) throw new Error(`Portada: no existe el proyecto "${slug}"`);
  return project.href;
};

/** "14 años de experiencia" en 2026: se recalcula en cada build a partir del año de fundación. */
const yearsOfExperience = new Date().getFullYear() - site.business.foundingYear;

export const home: HomeContent = {
  seo: {
    title: 'Constructora en Santo Domingo, RD',
    description:
      'Constructora dominicana de naves industriales, estructuras metálicas, movimiento de tierras y obras civiles, con oficina en Santo Domingo.',
  },
  hero: {
    kicker: 'Constructora industrial en República Dominicana',
    lines: ['Estructuras metálicas.', 'Movimiento de tierras.', 'Obras civiles.'],
    text: 'Especialistas en construcción industrial, estructuras metálicas, infraestructura energética, obras civiles, cimentaciones y movimiento de tierras en la República Dominicana.',
    image: obraThumb('hero-estructura-atardecer'),
    buttons: [
      { label: 'Ver proyectos', href: '/proyectos/', variant: 'brand' },
      { label: 'Nuestros servicios', href: '/servicios/', variant: 'white' },
    ],
  },
  vision: {
    visionLabel: 'Nuestra visión',
    title: 'Construimos el futuro con ingeniería y solidez, desde 2012.',
    text: [
      `TENAX Construction cuenta con ${yearsOfExperience} años de experiencia en el `,
      { highlight: 'desarrollo y ejecución de proyectos de ingeniería y construcción' },
      ', especializándose en estructuras metálicas, naves industriales, obras civiles y movimientos de tierras, con participación en los sectores ',
      { highlight: 'industrial, comercial, logístico, agroindustrial y energético' },
      '.',
    ],
    statsLabel: 'Tenax en cifras',
    stats: [
      { value: String(yearsOfExperience), label: 'Años de experiencia' },
      { value: '+80', label: 'Proyectos ejecutados' },
      { value: '5', label: 'Áreas de especialización' },
    ],
    valuesLabel: 'Nuestros valores',
    values: [
      { icon: 'compromiso', label: 'Compromiso' },
      { icon: 'excelencia', label: 'Excelencia' },
      { icon: 'seguridad', label: 'Seguridad' },
      { icon: 'integridad', label: 'Integridad' },
      { icon: 'precision', label: 'Precisión' },
      { icon: 'responsabilidad', label: 'Responsabilidad' },
    ],
  },
  earthworks: {
    eyebrow: 'Movimientos de tierras',
    title: 'Preparamos el terreno para grandes proyectos.',
    text: 'En TENAX Construction ejecutamos movimientos de tierras, excavación, nivelación y compactación, preparando las condiciones necesarias para el desarrollo de nuevas obras.',
    cta: { label: 'Conoce más', href: '/servicios/movimiento-tierra/' },
    image: obraThumb('nivelacion-terreno-2'),
  },
  // Diseño de Tenax en Canva (págs. 8-12): especialidades y proyectos destacados; sale lo demás.
  specialties: {
    title: 'Nuestras Especialidades',
    lead: 'Hemos tenido la oportunidad de participar en una amplia variedad de proyectos de ingeniería y construcción.',
    text: [
      'A lo largo de nuestra trayectoria, ',
      { highlight: 'Tenax Construction' },
      ' ha desarrollado experiencia en diferentes áreas de la construcción, participando en proyectos que abarcan desde estructuras metálicas y naves industriales hasta movimientos de tierras, cimentaciones, pavimentos, remodelaciones e instalaciones para energía solar.',
    ],
    collage: [
      {
        width: 86,
        photos: [
          { image: obraThumb('inicio'), height: 48 },
          { image: obraThumb('andamio-rojo-1'), height: 136 },
          { image: obraThumb('puente-alcantarillado-6'), height: 110 },
        ],
      },
      {
        width: 91,
        photos: [
          { image: obraThumb('parque-fotovoltaico-mata-de-palma'), height: 90 },
          { image: obraThumb('galeria-1'), height: 138 },
          { image: obraThumb('nave-bodega-temporal-1'), height: 68 },
        ],
      },
      {
        width: 60,
        photos: [
          { image: obraThumb('techo-policarbonato-1'), height: 70 },
          { image: obraThumb('vallado-perimetral-3'), height: 137 },
          { image: obraThumb('colocacion-hormigon-1'), height: 89 },
        ],
      },
    ],
    items: [
      { image: obraThumb('nave-industrial-1'), caption: 'Estructuras metálicas', href: '/servicios/estructura-metalica/' },
      { image: obraThumb('parque-fotovoltaico-calabaza'), caption: 'Energía', href: '/proyectos/energia/' },
      { image: obraThumb('galeria-6'), caption: 'Pavimento y cimentaciones', href: '/servicios/pavimentos/' },
      {
        image: obraThumb('movimiento-tierra-1'),
        caption: 'Movimientos de tierras y nivelación de terreno',
        href: '/servicios/movimiento-tierra/',
      },
      { image: obraThumb('puente-alcantarillado-4'), caption: 'Obras civiles', href: '/servicios/' },
    ],
  },
  showcase: {
    title: 'Proyectos Destacados',
    paragraphs: [
      'Nuestro trabajo forma parte del desarrollo de espacios, infraestructuras y edificaciones que impulsan el crecimiento de distintos sectores.',
      'Te invitamos a conocer algunos de nuestros proyectos, donde la experiencia, la ingeniería y la construcción se materializan en obras sólidas, duraderas y que aportan valor a su entorno y a las comunidades que sirven.',
    ],
    // Pendiente: las dos fotos de la escalera pintada del diseño; mientras, las de la escalera en obra.
    image: obraThumb('escalera-emergencia-2'),
    projects: [
      {
        image: obraThumb('escalera-emergencia-1'),
        caption: 'Diseño y construcción de escalera metálica de emergencia para edificio corporativo – Av. Abraham Lincoln, Distrito Nacional, República Dominicana',
        href: projectHref('escalera-emergencia'),
      },
      {
        image: obraThumb('parque-fotovoltaico-mata-de-palma'),
        caption: 'Obras de arte y drenaje en parque fotovoltaico Mata de Palma, República Dominicana',
        href: projectHref('parque-fotovoltaico-mata-de-palma'),
      },
      {
        image: obraThumb('nave-mango-bani-aerea'),
        caption: 'Estructura y cubierta metálica de nave planta hidrotérmica y empacadora de mango en Matanzas, Baní, República Dominicana',
        href: projectHref('nave-acopio-mango-bani'),
      },
    ],
  },
  contact: {
    title: 'Solicita tu cotización',
    text: 'Completa el formulario y te contactaremos en las próximas 24 horas.',
  },
  ctaBand: {
    eyebrow: 'Construimos estructuras, elevamos tu proyecto',
    title: '¿Tienes un proyecto en mente?',
    text: 'Contáctanos para una cotización personalizada. Nuestro equipo está listo para ayudarte a hacer realidad tu proyecto.',
    image: img('banner2'),
  },
};

/** Tipos de proyecto y monedas del presupuesto del formulario de cotización de Tenax. */
export const projectTypes = ['Casa Residencial', 'Edificio/Apartamentos', 'Proyecto Comercial', 'Nave Industrial', 'Remodelación', 'Otro'];
// El cliente escribe el monto y elige la moneda: Tenax cotiza tanto en dólares como en pesos.
export const currencies = ['US$', 'RD$'];

export const homeFormFields: HomeFormField[] = [
  { name: 'nombre', label: 'Nombre Completo', type: 'text', placeholder: 'Nombre completo', required: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Ingresa tu correo electrónico', required: true, half: true },
  { name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: '+1 (809) 000-0000', required: true, half: true },
  { name: 'tipoProyecto', label: 'Tipo de Proyecto', type: 'select', placeholder: 'Selecciona el tipo de proyecto', options: projectTypes, required: true },
  { name: 'presupuesto', label: 'Presupuesto Estimado', type: 'text', placeholder: 'Ej. 150,000', required: false, half: true },
  { name: 'moneda', label: 'Moneda', type: 'select', placeholder: 'Selecciona la moneda', options: currencies, required: false, half: true },
  {
    name: 'descripcion',
    label: 'Descripción del Proyecto',
    type: 'textarea',
    placeholder: 'Describe tu proyecto: tipo de construcción, tamaño aproximado, características especiales, etc.',
    required: true,
  },
];
