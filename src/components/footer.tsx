import { Mail } from 'lucide-react';
import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/brand-icons';
import { profile } from '@/lib/data';

const links = [
  { href: profile.social.email, label: 'Email', icon: Mail },
  { href: profile.social.linkedin, label: 'LinkedIn', icon: LinkedinIcon },
  { href: profile.social.github, label: 'GitHub', icon: GithubIcon },
  { href: profile.social.instagram, label: 'Instagram', icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-surface-border bg-surface">
      <div className="mx-auto max-w-5xl px-5 py-14 text-center">
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Let&apos;s build something.
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
              className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-background px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted">
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          {profile.name}
        </p>
      </div>
    </footer>
  );
}
