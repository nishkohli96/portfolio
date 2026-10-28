export const siteUrl = 'https://nishkohli96.vercel.app';

export const combinedOSSDownloads = (29000).toLocaleString('en-US');

export const profile = {
  name: 'Nishant Kohli',
  role: 'Senior Full Stack Engineer',
  location: 'Noida, India',
  tagline:
    'Building scalable web apps across OTT, e-commerce & enterprise — with Next.js, Node.js and Typescript.',
  summary:
    `A FullStack Developer with 7.5 years of experience shipping production web platforms for SonyLiv, Staples, and Maruti Suzuki. Led teams of up to 10 engineers, architected event-driven AWS systems, and maintaining three open-source npm packages with ${combinedOSSDownloads}+ combined downloads.`,
  email: 'nishantkohli96@gmail.com',
  phone: '+91-7975751097',
  social: {
    github: 'https://github.com/nishkohli96',
    linkedin: 'https://www.linkedin.com/in/nishkohli96/',
    instagram: 'https://instagram.com/nocturnal_nish',
    email: 'mailto:nishantkohli96@gmail.com',
  },
};

export const experience = [
  {
    company: 'Appinventiv',
    location: 'Noida, India',
    role: 'Senior Software Engineer',
    period: 'Mar 2025 — Jun 2026',
    points: [
      'Led frontend delivery for Reeltrak, a B2B SaaS vendor & admin platform for Reel Security Corp, scaled to support FOX\'s FIFA World Cup operations — mentoring 10 engineers and driving technical execution.',
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
      'Designed ~25 Node.js microservice APIs for SonyLiv\'s high-traffic CMS, supporting 2,000+ content titles across an event-driven AWS stack (Lambda, SES, SQS, S3, SNS).',
      'Reduced API response times by 200–500ms via bottleneck analysis and database index optimization.',
      'Drove backend reliability to 94% test coverage with Jest, mocked DB and SQS/SNS dependencies.',
      'Contributed to the team\'s "Champion of the Quarter" award for the SonyLiv project.',
      'Led full-stack build of a Maruti Suzuki resource management portal for 500+ employees, with Azure EntraID SSO across web and mobile.',
    ],
  },
];

type OpenSourceProject = {
  name: string;
  description: string;
  npm?: string;
  github: string;
  tags: string[];
};

export const openSource: OpenSourceProject[] = [
  {
    name: 'awesome-apps-and-skills',
    description:
      'Curated apps, web tools, libraries, Claude skills and MCP servers, grouped by what you want to do — for developers, designers and marketers.',
    github: 'https://github.com/nishkohli96/awesome-apps-and-skills',
    tags: ['Awesome List', 'Claude', 'MCP', 'Productivity'],
  },
  {
    name: 'reminder-desk',
    description:
      'Claude plugin and skill for daily to-do reminders — push notifications at the start of day, each task\'s time, a follow-up and end of day, until you tick it off.',
    github: 'https://github.com/nishkohli96/reminder-desk',
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

export const projects = [
  {
    name: 'client-server-libs',
    description: 'Demonstrates libraries for client-server interaction — AWS, Socket.io, Sequelize.',
    github: 'https://github.com/nishkohli96/client-server-libs',
  },
  {
    name: 'nextjs-template',
    description: 'Next.js v15 & v16 template preconfigured with Material UI.',
    github: 'https://github.com/nishkohli96/nextjs-template',
  },
  {
    name: 'react-node-ts-monorepo',
    description: 'Pre-configured, highly customizable React + Node monorepo template with TypeScript.',
    github: 'https://github.com/nishkohli96/react-node-ts-monorepo',
  },
  {
    name: 'react-libs',
    description: 'A collection of demos of various libraries in React.',
    github: 'https://github.com/nishkohli96/react-libs',
  },
];
