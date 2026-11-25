import type { Breadcrumb, ImageAsset } from '@/types/common';

/** Botón de filtro de la maquinaria (Canva, pág. 30). */
export interface MachineCategory {
  id: string;
  label: string;
}

/** Tabla de una ficha técnica: por defecto dos columnas, "Característica" y "Especificación". */
export interface MachineSpecTable {
  title: string;
  /** Frase bajo el título (p. ej., el modelo que se toma como referencia). */
  note?: string;
  headers?: string[];
  rows: string[][];
  /** Aclaración bajo la tabla. */
  footnote?: string;
}

/** Ficha técnica de una máquina (Canva, págs. 32–37). */
export interface MachineSheet {
  /** Categoría tal como la escribe la ficha ("Excavación y movimiento de tierras"). */
  category: string;
  /** Datos del recuadro lateral, si se conocen. */
  facts: { brand?: string; year?: string };
  intro?: string;
  tables: MachineSpecTable[];
  /** "Aplicaciones en obra"; vacío si todavía no se tienen. */
  applications: string[];
}

/** Máquina de la cuadrícula de Equipos: foto de src/assets/equipos/ y el mismo nombre que su imagen. */
export interface Machine {
  /** Parte final de la URL de su ficha: /equipos/{slug}/. */
  slug: string;
  href: string;
  /** Tipo de máquina: primera línea del recuadro ("Excavadora"). */
  type: string;
  /** Marca y modelo: segunda línea ("Doosan DX225"). */
  model: string;
  /** `id` de su categoría. */
  category: string;
  image: ImageAsset;
  sheet: MachineSheet;
}

export interface MachinerySection {
  kicker: string;
  title: string;
  description: string;
  /** Etiqueta del botón que muestra todas las máquinas. */
  allLabel: string;
  categories: MachineCategory[];
  machines: Machine[];
}

/** Equipos con los que se ejecuta un servicio (la lista "Equipos" de su página de detalle). */
export interface ServiceEquipment {
  title: string;
  href: string;
  items: string[];
}

export interface ServiceEquipmentSection {
  kicker: string;
  title: string;
  description: string;
  services: ServiceEquipment[];
}

export interface EquipmentPageData {
  /** Título (sin el sufijo de la marca) y descripción para buscadores y redes. */
  seo: { title: string; description: string };
  /** La página no tiene encabezado propio: las migas solo van en los datos estructurados. */
  breadcrumbs: Breadcrumb[];
  machinery: MachinerySection;
  byService: ServiceEquipmentSection;
}
