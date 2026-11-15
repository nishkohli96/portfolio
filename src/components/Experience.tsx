import Card from '@/components/Card';
import Section from '@/components/Section';
import { experience } from '@/constants';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career"
      title="Experience"
    >
      <ol className="space-y-8">
        {experience.map(({ company, location, role, period, points }) => (
          <Card
            as="li"
            key={`${company}-${period}`}
            className="relative p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold sm:text-lg">
                {role}
                <span className="text-muted">
                  {` · ${company}`}
                </span>
              </h3>
              <span className="text-muted text-xs font-medium">
                {period}
              </span>
            </div>
            <p className="text-muted mt-1 text-xs">
              {location}
            </p>
            <ul className="mt-4 space-y-2">
              {points.map(point => (
                <li
                  key={point}
                  className="text-muted flex gap-2 text-sm leading-relaxed"
                >
                  <span
                    className="bg-accent mt-2 h-1 w-1 shrink-0 rounded-full"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </ol>
    </Section>
  );
}
