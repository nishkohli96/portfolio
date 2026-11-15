import { ArrowUpRight, Mail } from 'lucide-react';
import Image from 'next/image';
import { profile } from '@/lib/data';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-12 pb-8 sm:pt-16">
      <div
        aria-hidden
        className="bg-accent/25 dark:bg-accent/20 pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-[100px]"
      />
      <div className="mx-auto max-w-3xl text-center">
        <Image
          src="/Nish_pic.jpg"
          alt={profile.name}
          width={112}
          height={112}
          priority
          className="ring-surface mx-auto h-28 w-28 rounded-full object-cover object-top ring-4"
        />
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {profile.name}
        </h1>
        <p className="text-accent mt-3 text-lg font-medium sm:text-xl">
          {profile.role}
        </p>
        <p className="text-muted mx-auto mt-5 max-w-xl text-base text-balance sm:text-lg">
          {profile.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.social.email}
            className="bg-accent inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
          <a
            href="#projects"
            className="border-surface-border hover:border-accent hover:text-accent inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition"
          >
            View work
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
