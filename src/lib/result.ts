import type { Result } from '@/types';
import { toError } from './errors';

/** Turns a rejecting promise into a `Result`, logging the failure once with `label`. */
export async function toResult<T>(promise: Promise<T>, label: string): Promise<Result<T>> {
  try {
    return { ok: true, value: await promise };
  } catch (cause) {
    const error = toError(cause);
    console.error(`[${label}] ${error.message}`);
    return { ok: false, error };
  }
}
