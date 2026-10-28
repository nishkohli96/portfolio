import Section from '@/components/section';
import { certifications } from '@/lib/certifications';
import { profile } from '@/lib/data';
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

      <div className="mt-5 rounded-2xl border border-surface-border bg-surface p-5">
        <h3 className="text-sm font-semibold lg:text-base">
          Certifications
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {certifications.map(cert => (
            <li
              key={cert.name}
              className="flex items-center gap-3 rounded-xl border border-surface-border bg-background px-4 py-3 lg:gap-4"
            >
              <cert.icon
                className="h-6 w-6 shrink-0 lg:h-7 lg:w-7"
                style={{ color: cert.color }}
                aria-hidden
              />
              <div className="min-w-0">
                <p className="text-sm font-medium lg:text-base">
                  {cert.name}
                </p>
                <p className="text-xs text-muted lg:text-sm">
                  {[cert.issuer, cert.year].filter(Boolean).join(' · ')}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
