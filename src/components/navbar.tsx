'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import ThemeToggle from '@/components/theme-toggle';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#open-source', label: 'Open Source' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-surface-border bg-background/80 sticky top-0 z-50 border-b backdrop-blur">
      <nav className="flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16 xl:px-24">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"
        >
          <Image
            src="/nk-logo.svg"
            alt="NK logo"
            width={30}
            height={30}
            className="rounded-md"
            priority
          />
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-foreground text-sm transition"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
            className="border-surface-border inline-flex h-9 w-9 items-center justify-center rounded-full border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-surface-border bg-background absolute inset-x-0 top-full border-t md:hidden">
          <div className="flex flex-col gap-1 px-5 py-3">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-muted hover:bg-surface hover:text-foreground rounded-md px-2 py-2.5 text-sm transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
