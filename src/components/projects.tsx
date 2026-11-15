import { GitFork, Star } from 'lucide-react';
import { GithubIcon } from '@/components/brand-icons';
import Section from '@/components/section';
import { projects, profile } from '@/lib/data';
import { getRepoStats, repoSlugFromUrl } from '@/lib/github';

export default async function Projects() {
  const projectsWithStarts = await Promise.all(
    projects.map(async project => ({
      ...project,
      stats: await getRepoStats(repoSlugFromUrl(project.github)),
    }))
  );

  return (
    <Section id="projects" eyebrow="More work" title="Notable projects">
      <div className="grid gap-5 sm:grid-cols-2">
        {projectsWithStarts.map(project => (
          <a
            key={project.name}
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="group border-surface-border bg-surface hover:border-accent flex flex-col rounded-2xl border p-6 transition"
          >
            <div className="flex items-center justify-between">
              <h3 className="group-hover:text-accent font-mono text-sm font-semibold">
                {project.name}
              </h3>
              {(project.stats?.stars || project.stats?.forks)
                ? (
                  <span className="text-muted inline-flex items-center gap-3 text-xs">
                    {project.stats.stars > 0 && (
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-3.5 w-3.5" />
                        {project.stats.stars}
                      </span>
                    )}
                    {project.stats.forks > 0 && (
                      <span className="inline-flex items-center gap-1">
                        <GitFork className="h-3.5 w-3.5" />
                        {project.stats.forks}
                      </span>
                    )}
                  </span>
                )
                : (
                  <GithubIcon className="text-muted h-4 w-4" />
                )}
            </div>
            <p className="text-muted mt-3 text-sm leading-relaxed">
              {project.description}
            </p>
          </a>
        ))}
      </div>
      <a
        href={profile.social.github}
        target="_blank"
        rel="noreferrer noopener"
        className="text-accent mt-6 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
      >
        <GithubIcon className="h-4 w-4" />
        View all repositories on GitHub
      </a>
    </Section>
  );
}
