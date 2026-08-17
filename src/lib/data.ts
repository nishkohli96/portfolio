export const profile = {
  name: 'Nishant Kohli',
  role: 'Senior Full Stack Engineer',
  location: 'Noida, India',
  tagline:
    'Building scalable web apps across OTT, e-commerce & enterprise — with Next.js, Node.js and Typescript.',
  summary:
    '7.5 years of experience shipping production web platforms for SonyLiv, Staples, and Maruti Suzuki. Led teams of up to 10 engineers, architected event-driven AWS systems, and maintain three open-source npm packages with 23,000+ combined downloads.',
  email: 'nishantkohli96@gmail.com',
  phone: '+91-9814110843',
  social: {
    github: 'https://github.com/nishkohli96',
    linkedin: 'https://www.linkedin.com/in/nishkohli96/',
    instagram: 'https://instagram.com/nocturnal_nish',
    email: 'mailto:nishantkohli96@gmail.com',
  },
};

export const skills = {
  Frontend: [
    { name: 'React.js', url: 'https://react.dev' },
    { name: 'Next.js', url: 'https://nextjs.org' },
    { name: 'Vite', url: 'https://vite.dev' },
    { name: 'Redux', url: 'https://redux.js.org' },
    { name: 'Material UI', url: 'https://mui.com' },
    { name: 'React Hook Form', url: 'https://react-hook-form.com' },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
    { name: 'Storybook', url: 'https://storybook.js.org' },
  ],
  Backend: [
    { name: 'Node.js', url: 'https://nodejs.org' },
    { name: 'Express.js', url: 'https://expressjs.com' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
    { name: 'NestJS', url: 'https://nestjs.com' },
    { name: 'GraphQL', url: 'https://graphql.org' },
    { name: 'Algolia', url: 'https://www.algolia.com' },
    { name: 'Socket.io', url: 'https://socket.io' },
    { name: 'Redis', url: 'https://redis.io' },
  ],
  Cloud: [
    { name: 'AWS S3', url: 'https://aws.amazon.com/s3/' },
    { name: 'AWS SES', url: 'https://aws.amazon.com/ses/' },
    { name: 'AWS SNS', url: 'https://aws.amazon.com/sns/' },
    { name: 'AWS SQS', url: 'https://aws.amazon.com/sqs/' },
    { name: 'AWS Lambda', url: 'https://aws.amazon.com/lambda/' },
    { name: 'Docker', url: 'https://www.docker.com' },
    { name: 'GitHub Actions', url: 'https://github.com/features/actions' },
  ],
  DataBase: [
    { name: 'MongoDB', url: 'https://www.mongodb.com' },
    { name: 'MySQL', url: 'https://www.mysql.com' },
    { name: 'PostgreSQL', url: 'https://www.postgresql.org' },
    { name: 'Mongoose', url: 'https://mongoosejs.com' },
    { name: 'Sequelize', url: 'https://sequelize.org' },
    { name: 'Contentful', url: 'https://www.contentful.com' },
    { name: 'DatoCMS', url: 'https://www.datocms.com' },
  ],
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

export const openSource = [
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

export const certifications = [
  'SEO Foundations — LinkedIn (2023)',
  'GraphQL Essential Training — LinkedIn (2023)',
  'AWS Certified Solutions Architect Associate (2021)',
  'Docker & Kubernetes: The Complete Guide (2021)',
];
