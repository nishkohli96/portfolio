import type { ReactNode } from 'react';

export default function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-14 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-8">
        {children}
      </div>
    </section>
  );
}
