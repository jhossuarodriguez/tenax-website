/** Tarjeta de dato de contacto (dirección, teléfono, correo). */
export interface ContactPageCard {
  title: string;
  value: string;
  href?: string;
}

export type ContactPageFieldType = 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'date';

export interface ContactPageFormField {
  name: string;
  label: string;
  placeholder: string;
  type: ContactPageFieldType;
  required: boolean;
  autocomplete?: string;
  /** Filas del textarea. */
  rows?: number;
  /** Opciones del select; el placeholder se muestra como primera opción deshabilitada. */
  options?: string[];
}

/** Fila del formulario: uno o dos campos (dos van lado a lado en escritorio). */
export type ContactPageFormRow = [ContactPageFormField] | [ContactPageFormField, ContactPageFormField];

export interface ContactPageForm {
  /** Título en dos líneas. */
  title: [string, string];
  description: string;
  /** Endpoint que envía la solicitud por correo (/api/cotizacion). */
  action: string;
  rows: ContactPageFormRow[];
  submitLabel: string;
  successMessage: string;
  /** Aviso si el envío falla; llega al script en `data-error` para no enviar `site` al navegador. */
  errorMessage: string;
}

export interface ContactPageData {
  seo: { title: string; description: string };
  intro: { title: [string, string]; subtitle: string };
  detailsTitle: string;
  cards: ContactPageCard[];
  mapLabel: string;
  mapUrl: string;
  form: ContactPageForm;
  band: { title: string; description: string };
}
