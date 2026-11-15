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
    })
  );

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
        {projects.map(project => {
          const Icon = iconByName[project.name] ?? Package;
          return (
            <div
              key={project.name}
              className="border-surface-border bg-surface flex flex-col rounded-2xl border p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-sm font-semibold">
                  {project.npm && '@nish1896/'}
                  {project.name}
                </h3>
                <Icon className="text-accent h-4 w-4" />
              </div>
              <p className="text-muted mt-3 flex-1 text-sm leading-relaxed">
                {project.description}
              </p>
              {project.downloads !== null && (
                <p className="text-accent mt-4 text-xs font-medium">
                  {`${project.downloads.toLocaleString()} downloads / month`}
                </p>
              )}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="border-surface-border text-muted rounded-full border px-2 py-0.5 text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="border-surface-border mt-5 flex gap-3 border-t pt-4 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-muted hover:text-foreground inline-flex items-center gap-1.5 font-medium"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  Source
                </a>
                {project.stats && project.stats.stars > 0 && (
                  <span className="text-muted inline-flex items-center gap-1 text-xs">
                    <Star className="h-3.5 w-3.5" />
                    {project.stats.stars}
                  </span>
                )}
                {project.stats && project.stats.forks > 0 && (
                  <span className="text-muted inline-flex items-center gap-1 text-xs">
                    <GitFork className="h-3.5 w-3.5" />
                    {project.stats.forks}
                  </span>
                )}
                {project.npm && (
                  <a
                    href={project.npm}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-accent inline-flex items-center gap-1.5 font-medium hover:underline"
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
