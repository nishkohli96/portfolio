import type { ElementType } from 'react';
import { GitFork, Library, Package, Star } from 'lucide-react';
import { SiClaude } from 'react-icons/si';
import { GithubIcon } from '@/components/brand-icons';
import Section from '@/components/section';
import { openSource } from '@/lib/data';
import { getRepoStats, repoSlugFromUrl } from '@/lib/github';
import { getMonthlyDownloads, packageNameFromUrl } from '@/lib/npm';

const iconByName: Record<string, ElementType> = {
  'awesome-apps-and-skills': Library,
  'reminder-desk': SiClaude,
};

export default async function OpenSource() {
  const projects = await Promise.all(
    openSource.map(async project => {
      const [downloads, stats] = await Promise.all([
        project.npm
          ? getMonthlyDownloads(packageNameFromUrl(project.npm))
          : null,
        getRepoStats(repoSlugFromUrl(project.github)),
      ]);
      return { ...project, downloads, stats };
    }),
  );

  return (
    <Section
      id="open-source"
      eyebrow="Work samples"
      title="Open source"
    >
      <p className="max-w-2xl text-sm text-muted sm:text-base">
        Three npm packages, plus curated lists and Claude tooling on GitHub.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => {
          const Icon = iconByName[project.name] ?? Package;
          return (
            <div
              key={project.name}
              className="flex flex-col rounded-2xl border border-surface-border bg-surface p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-sm font-semibold">
                  {project.npm && '@nish1896/'}
                  {project.name}
                </h3>
                <Icon className="h-4 w-4 text-accent" />
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              {project.downloads !== null && (
                <p className="mt-4 text-xs font-medium text-accent">
                  {project.downloads.toLocaleString()}
                  {' '}
                  downloads / month
                </p>
              )}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full border border-surface-border px-2 py-0.5 text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3 border-t border-surface-border pt-4 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 font-medium text-muted hover:text-foreground"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  Source
                </a>
                {project.stats && project.stats.stars > 0 && (
                  <span className="inline-flex items-center gap-1 text-xs text-muted">
                    <Star className="h-3.5 w-3.5" />
                    {project.stats.stars}
                  </span>
                )}
                {project.stats && project.stats.forks > 0 && (
                  <span className="inline-flex items-center gap-1 text-xs text-muted">
                    <GitFork className="h-3.5 w-3.5" />
                    {project.stats.forks}
                  </span>
                )}
                {project.npm && (
                  <a
                    href={project.npm}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
                  >
                    npm
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
