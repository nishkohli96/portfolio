import Card from '@/components/Card';
import ExternalLink from '@/components/ExternalLink';
import Section from '@/components/Section';
import { certifications, profile, skillGroups } from '@/constants';

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Who I am"
    >
      <p className="text-muted max-w-3xl text-base leading-relaxed sm:text-lg">
        {profile.summary}
      </p>

      <div className="mt-10 flex flex-col gap-5">
        {skillGroups.map(({ category, items }) => (
          <Card
            key={category}
            className="p-5"
          >
            <h3 className="text-sm font-semibold lg:text-base">
              {category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {items.map(({ name, url, icon: Icon, color }) => (
                <ExternalLink
                  key={name}
                  href={url}
                  className="border-surface-border bg-background text-muted hover:border-accent hover:text-accent inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm transition lg:gap-3 lg:px-5 lg:py-2.5 lg:text-base"
                >
                  <Icon
                    className="h-6 w-6 shrink-0 lg:h-7 lg:w-7"
                    style={color ? { color } : undefined}
                    aria-hidden
                  />
                  {name}
                </ExternalLink>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-5 p-5">
        <h3 className="text-sm font-semibold lg:text-base">Certifications</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {certifications.map(({ name, issuer, year, icon: Icon, color }) => (
            <li
              key={name}
              className="border-surface-border bg-background flex items-center gap-3 rounded-xl border px-4 py-3 lg:gap-4"
            >
              <Icon
                className="h-6 w-6 shrink-0 lg:h-7 lg:w-7"
                style={{ color }}
                aria-hidden
              />
              <div className="min-w-0">
                <p className="text-sm font-medium lg:text-base">
                  {name}
                </p>
                <p className="text-muted text-xs lg:text-sm">
                  {`${issuer} · ${year}`}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </Section>
  );
}
