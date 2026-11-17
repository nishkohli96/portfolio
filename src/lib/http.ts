import type { z } from 'zod';
import { AppError } from './errors';

const DEFAULT_TIMEOUT_MS = 5000;

function isTimeoutError(cause: unknown): boolean {
  return cause instanceof DOMException && cause.name === 'TimeoutError';
}

export interface FetchJsonOptions {
  headers?: HeadersInit;
  /** Next.js data-cache revalidation window, in seconds. */
  revalidate?: number;
  timeoutMs?: number;
}

/**
 * Typed `fetch` wrapper: timeout via AbortSignal, JSON parsing and runtime
 * validation of the response. Throws `AppError` with a typed `code`.
 */
export async function fetchJson<S extends z.ZodType>(
  url: string,
  schema: S,
  { headers, revalidate, timeoutMs = DEFAULT_TIMEOUT_MS }: FetchJsonOptions = {}
): Promise<z.infer<S>> {
  const init: RequestInit = { signal: AbortSignal.timeout(timeoutMs) };
  if (headers) {
    init.headers = headers;
  }
  if (revalidate !== undefined) {
    init.next = { revalidate };
  }

  let response: Response;
  try {
    response = await fetch(url, init);
  } catch (cause) {
    throw isTimeoutError(cause)
      ? new AppError('TIMEOUT', `Request to ${url} timed out after ${timeoutMs}ms`, { cause })
      : new AppError('NETWORK_ERROR', `Request to ${url} failed`, { cause });
  }

  if (!response.ok) {
    throw new AppError('HTTP_ERROR', `Request to ${url} failed with status ${response.status}`);
  }

  let body: unknown;
  try {
    body = await response.json();
  } catch (cause) {
    // The timeout signal also covers reading the body, so it can fire here too.
    throw isTimeoutError(cause)
      ? new AppError('TIMEOUT', `Reading ${url} timed out after ${timeoutMs}ms`, { cause })
      : new AppError('INVALID_RESPONSE', `Response from ${url} is not valid JSON`, { cause });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    throw new AppError('INVALID_RESPONSE', `Response from ${url} has an unexpected shape`, {
      cause: parsed.error,
    });
  }
  return parsed.data;
}
