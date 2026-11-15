import Section from '@/components/section';
import { certifications } from '@/lib/certifications';
import { profile } from '@/lib/data';
import { skills } from '@/lib/skills';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Who I am">
      <p className="text-muted max-w-3xl text-base leading-relaxed sm:text-lg">
        {profile.summary}
      </p>

      <div className="mt-10 flex flex-col gap-5">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="border-surface-border bg-surface rounded-2xl border p-5"
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
                  className="border-surface-border bg-background text-muted hover:border-accent hover:text-accent inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm transition lg:gap-3 lg:px-5 lg:py-2.5 lg:text-base"
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

      <div className="border-surface-border bg-surface mt-5 rounded-2xl border p-5">
        <h3 className="text-sm font-semibold lg:text-base">
          Certifications
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {certifications.map(cert => (
            <li
              key={cert.name}
              className="border-surface-border bg-background flex items-center gap-3 rounded-xl border px-4 py-3 lg:gap-4"
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
                <p className="text-muted text-xs lg:text-sm">
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
