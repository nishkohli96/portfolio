'use client';

import { useEffect } from 'react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  retry: () => void;
}

export default function ErrorPage({ error, retry }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex flex-1 flex-col items-center justify-center gap-4 px-5 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Something went wrong</h1>
      <p className="text-muted">An unexpected error occurred while loading this page.</p>
      <button
        type="button"
        onClick={() => retry()}
        className="bg-accent rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
      >
        Try again
      </button>
    </main>
  );
}
