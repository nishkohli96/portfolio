import { Bell, HardDrive, Inbox, Mail, Zap } from 'lucide-react';
import type { ComponentType, CSSProperties } from 'react';
import {
  SiAlgolia,
  SiContentful,
  SiDatocms,
  SiDocker,
  SiExpress,
  SiGithubactions,
  SiGraphql,
  SiMongodb,
  SiMongoose,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiReacthookform,
  SiRedis,
  SiRedux,
  SiSequelize,
  SiSocketdotio,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

type Skill = {
  name: string;
  url: string;
  icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  color?: string;
};

export const skills: Record<string, Skill[]> = {
  Frontend: [
    { name: 'React.js', url: 'https://react.dev', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', url: 'https://nextjs.org', icon: SiNextdotjs },
    { name: 'Vite', url: 'https://vite.dev', icon: SiVite, color: '#646CFF' },
    { name: 'Redux', url: 'https://redux.js.org', icon: SiRedux, color: '#764ABC' },
    { name: 'Material UI', url: 'https://mui.com', icon: SiMui, color: '#007FFF' },
    { name: 'React Hook Form', url: 'https://react-hook-form.com', icon: SiReacthookform, color: '#EC5990' },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Storybook', url: 'https://storybook.js.org', icon: SiStorybook, color: '#FF4785' },
  ],
  Backend: [
    { name: 'Node.js', url: 'https://nodejs.org', icon: SiNodedotjs, color: '#5FA04E' },
    { name: 'Express.js', url: 'https://expressjs.com', icon: SiExpress },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org', icon: SiTypescript, color: '#3178C6' },
    { name: 'Python', url: 'https://www.python.org', icon: SiPython, color: '#3776AB' },
    { name: 'NestJS', url: 'https://nestjs.com', icon: SiNestjs, color: '#E0234E' },
    { name: 'GraphQL', url: 'https://graphql.org', icon: SiGraphql, color: '#E10098' },
    { name: 'Algolia', url: 'https://www.algolia.com', icon: SiAlgolia, color: '#5468FF' },
    { name: 'Socket.io', url: 'https://socket.io', icon: SiSocketdotio },
    { name: 'Redis', url: 'https://redis.io', icon: SiRedis, color: '#FF4438' },
  ],
  // Simple Icons dropped the AWS brand marks: generic Lucide glyphs in AWS service-category colors.
  // Near-black brands (Next.js, Express, Socket.io) omit color so they follow the theme text color.
  Cloud: [
    { name: 'AWS S3', url: 'https://aws.amazon.com/s3/', icon: HardDrive, color: '#7AA116' },
    { name: 'AWS SES', url: 'https://aws.amazon.com/ses/', icon: Mail, color: '#DD344C' },
    { name: 'AWS SNS', url: 'https://aws.amazon.com/sns/', icon: Bell, color: '#E7157B' },
    { name: 'AWS SQS', url: 'https://aws.amazon.com/sqs/', icon: Inbox, color: '#E7157B' },
    { name: 'AWS Lambda', url: 'https://aws.amazon.com/lambda/', icon: Zap, color: '#ED7100' },
    { name: 'Docker', url: 'https://www.docker.com', icon: SiDocker, color: '#2496ED' },
    { name: 'GitHub Actions', url: 'https://github.com/features/actions', icon: SiGithubactions, color: '#2088FF' },
  ],
  'Database and CMS': [
    { name: 'MongoDB', url: 'https://www.mongodb.com', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', url: 'https://www.mysql.com', icon: SiMysql, color: '#4479A1' },
    { name: 'PostgreSQL', url: 'https://www.postgresql.org', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Prisma', url: 'https://www.prisma.io', icon: SiPrisma },
    { name: 'Mongoose', url: 'https://mongoosejs.com', icon: SiMongoose, color: '#880000' },
    { name: 'Sequelize', url: 'https://sequelize.org', icon: SiSequelize, color: '#52B0E7' },
    { name: 'Contentful', url: 'https://www.contentful.com', icon: SiContentful, color: '#2478CC' },
    { name: 'DatoCMS', url: 'https://www.datocms.com', icon: SiDatocms, color: '#FF7751' },
  ],
};
