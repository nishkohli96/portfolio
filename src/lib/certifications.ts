import type { ComponentType, CSSProperties } from 'react';
import { FaAws } from 'react-icons/fa';
import { SiClaude, SiDocker } from 'react-icons/si';
import { LinkedinIcon } from '@/components/brand-icons';

type Certification = {
  name: string;
  issuer: string;
  year: number;
  icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  color: string;
};

export const certifications: Certification[] = [
  {
    name: 'Introduction to Model Context Protocol',
    issuer: 'Claude Academy',
    year: 2026,
    icon: SiClaude,
    color: '#D97757',
  },
  {
    name: 'Claude 101 & Claude Code 101',
    issuer: 'Claude Academy',
    year: 2026,
    icon: SiClaude,
    color: '#D97757',
  },
  {
    name: 'SEO Foundations',
    issuer: 'LinkedIn',
    year: 2023,
    icon: LinkedinIcon,
    color: '#0A66C2',
  },
  {
    name: 'GraphQL Essential Training',
    issuer: 'LinkedIn',
    year: 2023,
    icon: LinkedinIcon,
    color: '#0A66C2',
  },
  {
    name: 'AWS Certified Solutions Architect Associate',
    issuer: 'Udemy',
    year: 2021,
    icon: FaAws,
    color: '#FF9900',
  },
  {
    name: 'Docker & Kubernetes: The Complete Guide',
    issuer: 'Udemy',
    year: 2021,
    icon: SiDocker,
    color: '#2496ED',
  },
];
