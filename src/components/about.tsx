import Section from '@/components/section';
import { profile, skills, certifications } from '@/lib/data';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Who I am">
      <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
        {profile.summary}
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-2xl border border-surface-border bg-surface p-5"
          >
            <h3 className="text-sm font-semibold">
              {category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map(item => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-surface-border bg-background px-2.5 py-1 text-xs text-muted transition hover:border-accent hover:text-accent"
                >
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
