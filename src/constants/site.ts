import { formatNumber } from '@/utils';

export const SITE_URL = 'https://nishkohli96.vercel.app';
export const SITE_NAME = 'Nishant Kohli';
export const SITE_TITLE = 'Nishant Kohli — Senior Full Stack Engineer';

/** Lifetime npm downloads across all three packages. Update by hand when it grows. */
export const COMBINED_OSS_DOWNLOADS = formatNumber(30_000);

/** ISR window for GitHub / npm API data. */
export const DATA_REVALIDATE_SECONDS = 3600;

export const CORE_TECH = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'AWS',
  'Python',
  'FastAPI',
] as const;

export const SITE_DESCRIPTION = `Nishant Kohli, Senior Full Stack Engineer in Noida, India. React, Next.js, Node.js, TypeScript & AWS. Maintainer of 3 npm packages, ${COMBINED_OSS_DOWNLOADS}+ downloads.`;
export const SOCIAL_DESCRIPTION = `React, Next.js, Node.js & AWS engineer. Open-source maintainer with ${COMBINED_OSS_DOWNLOADS}+ npm downloads.`;

export const SITE_KEYWORDS = [
  'Nishant Kohli',
  'nish1896',
  'nishkohli96',
  'nishant.kohli',
  'nocturnal_nish',
  'Senior Full Stack Engineer',
  ...CORE_TECH,
  'portfolio',
] as const;
