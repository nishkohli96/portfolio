import { Package } from 'lucide-react';
import { GithubIcon } from '@/components/brand-icons';
import Section from '@/components/section';
import { openSource } from '@/lib/data';
import { getMonthlyDownloads, packageNameFromUrl } from '@/lib/npm';

export default async function OpenSource() {
  const npmPkgWithDownloads = await Promise.all(
    openSource.map(async pkg => ({
      ...pkg,
      downloads: await getMonthlyDownloads(packageNameFromUrl(pkg.npm)),
    })),
  );

  return (
    <Section
      id="open-source"
      eyebrow="Work samples"
      title="Open-source npm packages"
    >
      <p className="max-w-2xl text-sm text-muted sm:text-base">
        Published three packages on npm.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {npmPkgWithDownloads.map(pkg => (
          <div
            key={pkg.name}
            className="flex flex-col rounded-2xl border border-surface-border bg-surface p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-sm font-semibold">
                @nish1896/
                {pkg.name}
              </h3>
              <Package className="h-4 w-4 text-accent" />
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {pkg.description}
            </p>
            {pkg.downloads !== null && (
              <p className="mt-4 text-xs font-medium text-accent">
                {pkg.downloads.toLocaleString()}
                {' '}
                downloads / month
              </p>
            )}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {pkg.tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full border border-surface-border px-2 py-0.5 text-[11px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-3 border-t border-surface-border pt-4 text-sm">
              <a
                href={pkg.npm}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
              >
                npm
              </a>
              <a
                href={pkg.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 font-medium text-muted hover:text-foreground"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
