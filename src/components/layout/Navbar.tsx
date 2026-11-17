'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import ThemeToggle from '@/components/layout/ThemeToggle';
import { NAV_LINKS } from '@/constants/navigation';

const MOBILE_MENU_ID = 'mobile-menu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-surface-border bg-background/80 sticky top-0 z-50 border-b backdrop-blur">
      <nav
        aria-label="Primary"
        className="flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16 xl:px-24"
      >
        <a
          href="#top"
          aria-label="Back to top"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"
        >
          <Image
            src="/nk-logo.svg"
            alt="NK logo"
            width={30}
            height={30}
            priority
            className="rounded-md"
          />
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-muted hover:text-foreground text-sm transition"
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls={MOBILE_MENU_ID}
            onClick={() => setIsOpen(open => !open)}
            className="border-surface-border inline-flex h-9 w-9 items-center justify-center rounded-full border"
          >
            {isOpen
              ? (
                <X
                  className="h-4 w-4"
                  aria-hidden
                />
              )
              : (
                <Menu
                  className="h-4 w-4"
                  aria-hidden
                />
              )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          id={MOBILE_MENU_ID}
          className="border-surface-border bg-background absolute inset-x-0 top-full border-t md:hidden"
        >
          <div className="flex flex-col gap-1 px-5 py-3">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-muted hover:bg-surface hover:text-foreground rounded-md px-2 py-2.5 text-sm transition"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
