import { GitFork, Star } from 'lucide-react';
import type { RepoStats as RepoStatsData } from '@/types';

interface RepoStatsProps {
  stats: RepoStatsData;
}

/** Star and fork counts; each is shown only when it is at least 1. */
export default function RepoStats({ stats }: RepoStatsProps) {
  const items = [
    { label: 'stars', value: stats.stars, Icon: Star },
    { label: 'forks', value: stats.forks, Icon: GitFork },
  ].filter(item => item.value > 0);

  return (
    <span className="text-muted inline-flex items-center gap-3 text-xs">
      {items.map(({ label, value, Icon }) => (
        <span
          key={label}
          className="inline-flex items-center gap-1"
        >
          <Icon
            className="h-3.5 w-3.5"
            aria-hidden
          />
          {value}
          <span className="sr-only">
            {label}
          </span>
        </span>
      ))}
    </span>
  );
}
