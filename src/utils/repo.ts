import type { RepoStats } from '@/types';

/** True when there is at least one star or fork worth showing. */
export function hasRepoStats(stats: RepoStats | null): stats is RepoStats {
  return stats !== null && (stats.stars > 0 || stats.forks > 0);
}
