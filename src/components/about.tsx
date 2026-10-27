import Section from '@/components/section';
import { profile, certifications } from '@/lib/data';
import { skills } from '@/lib/skills';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Who I am">
      <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
        {profile.summary}
      </p>

      <div className="mt-10 flex flex-col gap-5">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-2xl border border-surface-border bg-surface p-5"
          >
            <h3 className="text-sm font-semibold lg:text-base">
              {category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {items.map(item => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2.5 rounded-full border border-surface-border bg-background px-4 py-2 text-sm text-muted transition hover:border-accent hover:text-accent lg:gap-3 lg:px-5 lg:py-2.5 lg:text-base"
                >
                  <item.icon
                    className="h-6 w-6 shrink-0 lg:h-7 lg:w-7"
                    style={item.color ? { color: item.color } : undefined}
                    aria-hidden
                  />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {certifications.map(cert => (
          <span
            key={cert}
            className="rounded-full bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent"
          >
            {cert}
          </span>
        ))}
      </div>
    </Section>
  );
}
