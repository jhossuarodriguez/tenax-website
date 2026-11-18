/**
 * Comprobación en el servidor del reto de Cloudflare Turnstile (anti-bots) del formulario de cotización.
 * El widget del navegador entrega un token de un solo uso; aquí se canjea con la clave secreta.
 * https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 */
import * as z from 'zod/mini';

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/** Nombre del campo oculto que el widget añade al formulario. */
export const TURNSTILE_FIELD = 'cf-turnstile-response';

/** Cloudflare garantiza que un token no pasa de 2048 caracteres. */
const MAX_TOKEN_LENGTH = 2048;

const verifyResponse = z.object({
  success: z.boolean(),
  'error-codes': z.optional(z.array(z.string())),
});

/**
 * Devuelve true solo si Cloudflare confirma el token. Cualquier fallo (token vacío, caducado o ya
 * usado, Cloudflare caído) cuenta como no verificado.
 */
export async function verifyTurnstile(token: string, secret: string, ip?: string): Promise<boolean> {
  if (!token || token.length > MAX_TOKEN_LENGTH) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set('remoteip', ip);

  try {
    const response = await fetch(VERIFY_URL, { method: 'POST', body, signal: AbortSignal.timeout(8000) });
    const result = z.safeParse(verifyResponse, await response.json());
    if (result.success && result.data.success) return true;
    console.warn('turnstile: token rechazado', result.success ? result.data['error-codes'] : 'respuesta inesperada');
    return false;
  } catch (error) {
    console.error('turnstile: no se pudo contactar con Cloudflare', error);
    return false;
  }
}
