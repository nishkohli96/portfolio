import type { Project } from '@/types';

export const projects: readonly Project[] = [
  {
    name: 'client-server-libs',
    description:
      'Demonstrates libraries for client-server interaction — AWS, Socket.io, Sequelize.',
    github: 'https://github.com/nishkohli96/client-server-libs',
  },
  {
    name: 'nextjs-template',
    description: 'Next.js v15 & v16 template preconfigured with Material UI.',
    github: 'https://github.com/nishkohli96/nextjs-template',
  },
  {
    name: 'react-node-ts-monorepo',
    description:
      'Pre-configured, highly customizable React + Node monorepo template with TypeScript.',
    github: 'https://github.com/nishkohli96/react-node-ts-monorepo',
  },
  {
    name: 'react-libs',
    description: 'A collection of demos of various libraries in React.',
    github: 'https://github.com/nishkohli96/react-libs',
  },
];
