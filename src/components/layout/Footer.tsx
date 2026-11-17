import { Mail } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ExternalLink from '@/components/ExternalLink';
import { profile } from '@/constants';
import type { IconComponent } from '@/types';
import { getCurrentYear } from '@/utils';

interface ContactLink {
  name: string;
  label: string;
  href: string;
  icon: IconComponent;
}

const CONTACT_LINKS: readonly ContactLink[] = [
  {
    name: 'Email',
    label: 'nishantkohli96',
    href: profile.social.email,
    icon: Mail
  },
  {
    name: 'LinkedIn',
    label: 'nishkohli96',
    href: profile.social.linkedin,
    icon: FaLinkedin
  },
  {
    name: 'GitHub',
    label: 'nishkohli96',
    href: profile.social.github,
    icon: FaGithub
  },
  {
    name: 'Instagram',
    label: 'nocturnal_nish',
    href: profile.social.instagram,
    icon: FaInstagram
  }
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-surface-border bg-surface border-t"
    >
      <div className="mx-auto max-w-5xl px-5 py-10 text-center">
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Let&apos;s build something.
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {CONTACT_LINKS.map(({ name, label, href, icon: Icon }) => (
            <ExternalLink
              key={name}
              href={href}
              aria-label={`${name}: ${label}`}
              className="border-surface-border bg-background hover:border-accent hover:text-accent inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition"
            >
              <Icon
                className="h-4 w-4"
                aria-hidden
              />
              {label}
            </ExternalLink>
          ))}
        </div>

        <p className="text-muted mt-10 text-xs">
          {`© ${getCurrentYear()} ${profile.name}`}
        </p>
      </div>
    </footer>
  );
}
