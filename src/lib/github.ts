import { z } from 'zod';
import { DATA_REVALIDATE_SECONDS } from '@/constants';
import type { RepoStats, Result } from '@/types';
import { fetchJson } from './http';
import { toResult } from './result';

const repoSchema = z
  .object({ stargazers_count: z.number(), forks_count: z.number() })
  .transform(({ stargazers_count, forks_count }): RepoStats => ({
    stars: stargazers_count,
    forks: forks_count,
  }));

export function getRepoStats(repoSlug: string): Promise<Result<RepoStats>> {
  return toResult(
    fetchJson(`https://api.github.com/repos/${repoSlug}`, repoSchema, {
      headers: { Accept: 'application/vnd.github+json' },
      revalidate: DATA_REVALIDATE_SECONDS,
    }),
    `github:${repoSlug}`
  );
}
