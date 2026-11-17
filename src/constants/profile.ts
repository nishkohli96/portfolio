import type { Profile } from '@/types';
import { COMBINED_OSS_DOWNLOADS } from './site';

export const profile: Profile = {
  name: 'Nishant Kohli',
  role: 'Senior Full Stack Engineer',
  location: 'Noida, India',
  tagline:
    'Building scalable web apps across OTT, e-commerce & enterprise — with Next.js, Node.js and Typescript.',
  summary: `A FullStack Developer with 7.5 years of experience shipping production web platforms for SonyLiv, Staples, and Maruti Suzuki. Led teams of up to 10 engineers, architected event-driven AWS systems, and maintaining three open-source npm packages with ${COMBINED_OSS_DOWNLOADS}+ combined downloads.`,
  email: 'nishantkohli96@gmail.com',
  phone: '+91-7975751097',
  social: {
    github: 'https://github.com/nishkohli96',
    linkedin: 'https://www.linkedin.com/in/nishkohli96/',
    instagram: 'https://instagram.com/nocturnal_nish',
    email: 'mailto:nishantkohli96@gmail.com',
  },
};
