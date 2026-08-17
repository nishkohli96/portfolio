import { ArrowUpRight, Mail } from 'lucide-react';
import Image from 'next/image';
import { profile } from '@/lib/data';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-14 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/25 blur-[100px] dark:bg-accent/20"
      />
      <div className="mx-auto max-w-3xl text-center">
        <Image
          src="/Nish_pic.jpg"
          alt={profile.name}
          width={112}
          height={112}
          priority
          className="mx-auto h-28 w-28 rounded-full object-cover ring-4 ring-surface"
        />
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg font-medium text-accent sm:text-xl">
          {profile.role}
        </p>
        <p className="mx-auto mt-5 max-w-xl text-balance text-base text-muted sm:text-lg">
          {profile.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.social.email}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-surface-border px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent"
          >
            View work
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
