'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard next-themes SSR-safe mount check
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-surface text-foreground transition hover:border-accent hover:text-accent"
    >
      {mounted && resolvedTheme === 'dark'
        ? (
          <Sun className="h-4 w-4" />
        )
        : (
          <Moon className="h-4 w-4" />
        )}
    </button>
  );
}
