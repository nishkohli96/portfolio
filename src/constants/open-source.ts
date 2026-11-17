import { Library } from 'lucide-react';
import { SiClaude } from 'react-icons/si';
import type { OpenSourceProject } from '@/types';

export const openSource: readonly OpenSourceProject[] = [
  {
    name: 'awesome-apps-and-skills',
    description:
      'Curated apps, web tools, libraries, Claude skills and MCP servers, grouped by what you want to do — for developers, designers and marketers.',
    github: 'https://github.com/nishkohli96/awesome-apps-and-skills',
    icon: Library,
    tags: ['Awesome List', 'Claude', 'MCP', 'Productivity'],
  },
  {
    name: 'reminder-desk',
    description:
      "Claude plugin and skill for daily to-do reminders — push notifications at the start of day, each task's time, a follow-up and end of day, until you tick it off.",
    github: 'https://github.com/nishkohli96/reminder-desk',
    icon: SiClaude,
    tags: ['Claude Plugin', 'Push Notifications', 'Productivity'],
  },
  {
    name: 'rhf-mui-components',
    description:
      'React component library comprising 25+ reusable components that abstract Material UI and React Hook Form integrations into configurable building blocks.',
    npm: 'https://www.npmjs.com/package/@nish1896/rhf-mui-components',
    github: 'https://github.com/nishkohli96/rhf-mui-components',
    tags: ['React', 'MUI', 'React Hook Form', 'TypeScript'],
  },
  {
    name: 'mui-components',
    description:
      'Standalone Material UI component library, form-library-agnostic — works with React state or any form management solution.',
    npm: 'https://www.npmjs.com/package/@nish1896/mui-components',
    github: 'https://github.com/nishkohli96/mui-components',
    tags: ['React', 'MUI', 'TypeScript'],
  },
  {
    name: 'eslint-flat-config',
    description:
      'Shareable ESLint configuration supporting ESLint v8 and v9, with documentation hosted on Vercel using Docusaurus.',
    npm: 'https://www.npmjs.com/package/@nish1896/eslint-flat-config',
    github: 'https://github.com/nishkohli96/eslint-config',
    tags: ['ESLint', 'DX', 'Tooling'],
  },
];
