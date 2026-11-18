/**
 * Reglas del formulario de cotización. Las usan el navegador (avisos bajo cada campo antes de enviar)
 * y /api/cotizacion (que valida de nuevo: lo que llega del navegador no es de fiar).
 * Este archivo acaba en el script del navegador: por eso usa `zod/mini` (la variante de zod que solo
 * empaqueta las reglas que se usan: 8 KB comprimido frente a 24 KB) y no importa `site` ni nada del servidor.
 */
import * as z from 'zod/mini';

/** Tipos de proyecto que ofrece el desplegable. */
export const PROJECT_TYPES = ['Casa Residencial', 'Edificio/Apartamentos', 'Proyecto Comercial', 'Nave Industrial', 'Remodelación', 'Otro'] as const;

/** Monedas del presupuesto: Tenax cotiza tanto en dólares como en pesos. */
export const CURRENCIES = ['US$', 'RD$'] as const;

/** Ayer en UTC: la fecha más antigua que todavía puede ser «hoy» en alguna zona horaria. */
const earliestStartDate = (): string => new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);

/** Campo opcional: llega como '' cuando el cliente lo deja vacío. */
const orEmpty = <T extends z.ZodMiniType>(schema: T) => z.union([z.literal(''), schema]);

export const quoteSchema = z
  .object({
    nombre: z.string().check(z.minLength(2, 'Escribe tu nombre completo.'), z.maxLength(100, 'El nombre no puede pasar de 100 caracteres.')),
    email: z.email('Escribe un correo electrónico válido.').check(z.maxLength(254, 'El correo es demasiado largo.')),
    // Admite +, espacios, paréntesis, puntos y guiones; exige entre 7 y 15 dígitos (máximo de E.164).
    telefono: z.string().check(z.regex(/^\+?(?:[\s().-]*\d){7,15}[\s().-]*$/, 'Escribe un teléfono válido, por ejemplo +1 (809) 000-0000.')),
    ubicacion: z.string().check(z.maxLength(120, 'La ubicación no puede pasar de 120 caracteres.')),
    tipoProyecto: z.enum(PROJECT_TYPES, 'Selecciona el tipo de proyecto.'),
    presupuesto: orEmpty(
      z.string().check(z.regex(/^\d[\d.,\s]*$/, 'Escribe solo el monto, por ejemplo 150,000.'), z.maxLength(20, 'El monto es demasiado largo.')),
    ),
    moneda: z.enum(['', ...CURRENCIES], 'Selecciona una moneda válida.'),
    fechaInicio: orEmpty(
      z.iso
        .date('Escribe una fecha válida.')
        .check(z.refine((date) => date >= earliestStartDate(), 'La fecha de inicio no puede estar en el pasado.')),
    ),
    descripcion: z
      .string()
      .check(
        z.minLength(10, 'Describe tu proyecto con al menos 10 caracteres.'),
        z.maxLength(3000, 'La descripción no puede pasar de 3000 caracteres.'),
      ),
  })
  .check(
    z.refine((quote) => !quote.presupuesto || quote.moneda !== '', {
      path: ['moneda'],
      error: 'Selecciona la moneda del presupuesto.',
      // Por defecto zod se salta esta regla si otro campo ya falló; así el aviso sale junto con los demás.
      when: ({ value }) => typeof value === 'object' && value !== null,
    }),
  );

export type QuoteInput = z.infer<typeof quoteSchema>;
export type QuoteField = keyof QuoteInput;
/** Primer aviso de cada campo que no pasa la validación. */
export type QuoteErrors = Partial<Record<QuoteField, string>>;

export type QuoteValidation = { ok: true; data: QuoteInput } | { ok: false; errors: QuoteErrors };

const QUOTE_FIELDS = Object.keys(quoteSchema.shape) as QuoteField[];

/**
 * Valida los campos del formulario. Cada uno se lee como texto sin espacios sobrantes; los que no
 * llegan (un desplegable sin elegir no se envía) cuentan como vacíos.
 */
export function validateQuote(formData: FormData): QuoteValidation {
  const raw = Object.fromEntries(
    QUOTE_FIELDS.map((name) => {
      const value = formData.get(name);
      return [name, typeof value === 'string' ? value.trim() : ''];
    }),
  );
  const result = z.safeParse(quoteSchema, raw);
  if (result.success) return { ok: true, data: result.data };

  const errors: QuoteErrors = {};
  for (const [name, messages] of Object.entries(z.flattenError(result.error).fieldErrors)) {
    if (messages?.[0]) errors[name as QuoteField] = messages[0];
  }
  return { ok: false, errors };
}
