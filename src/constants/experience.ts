import type { ExperienceEntry } from '@/types';

export const experience: readonly ExperienceEntry[] = [
  {
    company: 'Appinventiv',
    location: 'Noida, India',
    role: 'Senior Software Engineer',
    period: 'Mar 2025 — Jun 2026',
    points: [
      "Led frontend delivery for Reeltrak, a B2B SaaS vendor & admin platform for Reel Security Corp, scaled to support FOX's FIFA World Cup operations — mentoring 10 engineers and driving technical execution.",
      'Cut form-development time ~25% across 30+ screens by integrating rhf-mui-components, an open-source library I authored.',
      'Engineered core workflows: product variant generation, multi-step forms, browser push notifications.',
    ],
  },
  {
    company: 'Kellton Tech',
    location: 'Gurgaon, India',
    role: 'Lead Engineer',
    period: 'Jan 2024 — Dec 2024',
    points: [
      "Designed ~25 Node.js microservice APIs for SonyLiv's high-traffic CMS, supporting 2,000+ content titles across an event-driven AWS stack (Lambda, SES, SQS, S3, SNS).",
      'Reduced API response times by 200–500ms via bottleneck analysis and database index optimization.',
      'Drove backend reliability to 94% test coverage with Jest, mocked DB and SQS/SNS dependencies.',
      'Contributed to the team\'s "Champion of the Quarter" award for the SonyLiv project.',
      'Led full-stack build of a Maruti Suzuki resource management portal for 500+ employees, with Azure EntraID SSO across web and mobile.',
    ],
  },
];
