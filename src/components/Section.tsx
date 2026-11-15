import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  eyebrow: string;
  children: ReactNode;
}

export default function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto max-w-5xl px-5 py-8 sm:py-10"
    >
      <p className="text-accent text-xs font-semibold tracking-widest uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5">
        {children}
      </div>
    </section>
  );
}
