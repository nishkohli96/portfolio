import Section from '@/components/section';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <ol className="space-y-8">
        {experience.map(job => (
          <li
            key={job.company + job.period}
            className="relative rounded-2xl border border-surface-border bg-surface p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold sm:text-lg">
                {job.role}
                <span className="text-muted">
                  {' · '}
                  {job.company}
                </span>
              </h3>
              <span className="text-xs font-medium text-muted">
                {job.period}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted">
              {job.location}
            </p>
            <ul className="mt-4 space-y-2">
              {job.points.map(point => (
                <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
