import Section from '@/components/section';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <ol className="space-y-8">
        {experience.map(job => (
          <li
            key={job.company + job.period}
            className="border-surface-border bg-surface relative rounded-2xl border p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold sm:text-lg">
                {job.role}
                <span className="text-muted">
                  {' · '}
                  {job.company}
                </span>
              </h3>
              <span className="text-muted text-xs font-medium">
                {job.period}
              </span>
            </div>
            <p className="text-muted mt-1 text-xs">
              {job.location}
            </p>
            <ul className="mt-4 space-y-2">
              {job.points.map(point => (
                <li
                  key={point}
                  className="text-muted flex gap-2 text-sm leading-relaxed"
                >
                  <span className="bg-accent mt-2 h-1 w-1 shrink-0 rounded-full" />
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
