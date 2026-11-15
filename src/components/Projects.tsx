import { FaGithub } from 'react-icons/fa';
import ExternalLink from '@/components/ExternalLink';
import RepoStats from '@/components/RepoStats';
import Section from '@/components/Section';
import { profile, projects } from '@/constants';
import { getRepoStats } from '@/lib';
import { hasRepoStats, repoSlugFromUrl } from '@/utils';

export default async function Projects() {
  const projectsWithStats = await Promise.all(
    projects.map(async project => {
      const result = await getRepoStats(repoSlugFromUrl(project.github));
      return { ...project, stats: result.ok ? result.value : null };
    })
  );

  return (
    <Section
      id="projects"
      eyebrow="More work"
      title="Notable projects"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {projectsWithStats.map(({ name, description, github, stats }) => (
          <ExternalLink
            key={name}
            href={github}
            className="group border-surface-border bg-surface hover:border-accent flex flex-col rounded-2xl border p-6 transition"
          >
            <div className="flex items-center justify-between">
              <h3 className="group-hover:text-accent font-mono text-sm font-semibold">
                {name}
              </h3>
              {hasRepoStats(stats)
                ? (
                  <RepoStats stats={stats} />
                )
                : (
                  <FaGithub
                    className="text-muted h-4 w-4"
                    aria-hidden
                  />
                )}
            </div>
            <p className="text-muted mt-3 text-sm leading-relaxed">
              {description}
            </p>
          </ExternalLink>
        ))}
      </div>
      <ExternalLink
        href={profile.social.github}
        className="text-accent mt-6 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
      >
        <FaGithub
          className="h-4 w-4"
          aria-hidden
        />
        View all repositories on GitHub
      </ExternalLink>
    </Section>
  );
}
