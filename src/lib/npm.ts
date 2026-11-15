import { z } from 'zod';
import { DATA_REVALIDATE_SECONDS } from '@/constants';
import type { Result } from '@/types';
import { fetchJson } from './http';
import { toResult } from './result';

const downloadsSchema = z
  .object({ downloads: z.number() })
  .transform(({ downloads }) => downloads);

export function getMonthlyDownloads(packageName: string): Promise<Result<number>> {
  return toResult(
    fetchJson(
      `https://api.npmjs.org/downloads/point/last-month/${encodeURIComponent(packageName)}`,
      downloadsSchema,
      { revalidate: DATA_REVALIDATE_SECONDS }
    ),
    `npm:${packageName}`
  );
}
