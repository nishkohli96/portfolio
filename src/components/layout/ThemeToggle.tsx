'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';

/** Server snapshot is `false`, so the first client render matches the server HTML (no hydration mismatch). */
const subscribe = () => () => {};
const useIsMounted = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isMounted = useIsMounted();
  const isDark = isMounted && resolvedTheme === 'dark';
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="border-surface-border bg-surface text-foreground hover:border-accent hover:text-accent inline-flex h-9 w-9 items-center justify-center rounded-full border transition"
    >
      <Icon
        className="h-4 w-4"
        aria-hidden
      />
    </button>
  );
}
