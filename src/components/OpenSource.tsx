import { Package } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Card from '@/components/Card';
import ExternalLink from '@/components/ExternalLink';
import RepoStats from '@/components/RepoStats';
import Section from '@/components/Section';
import { openSource } from '@/constants';
import { getMonthlyDownloads, getRepoStats } from '@/lib';
import type { OpenSourceProject, RepoStats as RepoStatsData } from '@/types';
import {
  formatNumber,
  hasRepoStats,
  packageNameFromUrl,
  repoSlugFromUrl
} from '@/utils';

interface ProjectWithStats {
  project: OpenSourceProject;
  downloads: number | null;
  stats: RepoStatsData | null;
}

async function loadProject(project: OpenSourceProject): Promise<ProjectWithStats> {
  const [downloads, stats] = await Promise.all([
    project.npm ? getMonthlyDownloads(packageNameFromUrl(project.npm)) : null,
    getRepoStats(repoSlugFromUrl(project.github)),
  ]);

  return {
    project,
    downloads: downloads?.ok ? downloads.value : null,
    stats: stats.ok ? stats.value : null,
  };
}

function OpenSourceCard({ project, downloads, stats }: ProjectWithStats) {
  const Icon = project.icon ?? Package;

  return (
    <Card className="flex flex-col p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-mono text-sm font-semibold">
          {project.npm && '@nish1896/'}
          {project.name}
        </h3>
        <Icon
          className="text-accent h-4 w-4"
          aria-hidden
        />
      </div>
      <p className="text-muted mt-3 flex-1 text-sm leading-relaxed">
        {project.description}
      </p>
      {downloads !== null && (
        <p className="text-accent mt-4 text-xs font-medium">
          {`${formatNumber(downloads)} downloads / month`}
        </p>
      )}
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map(tag => (
          <li
            key={tag}
            className="border-surface-border text-muted rounded-full border px-2 py-0.5 text-[11px]"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="border-surface-border mt-5 flex items-center gap-3 border-t pt-4 text-sm">
        <ExternalLink
          href={project.github}
          className="text-muted hover:text-foreground inline-flex items-center gap-1.5 font-medium"
        >
          <FaGithub
            className="h-3.5 w-3.5"
            aria-hidden
          />
          Source
        </ExternalLink>
        {hasRepoStats(stats) && <RepoStats stats={stats} />}
        {project.npm && (
          <ExternalLink
            href={project.npm}
            className="text-accent inline-flex items-center gap-1.5 font-medium hover:underline"
          >
            npm
          </ExternalLink>
        )}
      </div>
    </Card>
  );
}

export default async function OpenSource() {
  const projects = await Promise.all(openSource.map(loadProject));

  return (
    <Section
      id="open-source"
      eyebrow="Work samples"
      title="Open source"
    >
      <p className="text-muted max-w-2xl text-sm sm:text-base">
        Three npm packages, plus curated lists and Claude tooling on GitHub.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(entry => (
          <OpenSourceCard
            key={entry.project.name}
            {...entry}
          />
        ))}
      </div>
    </Section>
  );
}
