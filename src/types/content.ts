import type { IconComponent } from './icon';

export enum SkillCategory {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Cloud = 'Cloud',
  DatabaseAndCms = 'Database and CMS',
}

export interface Skill {
  name: string;
  url: string;
  icon: IconComponent;
  color?: string;
}

export interface SkillGroup {
  category: SkillCategory;
  items: readonly Skill[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  icon: IconComponent;
  color: string;
}

export interface ExperienceEntry {
  company: string;
  location: string;
  role: string;
  period: string;
  points: readonly string[];
}

export interface Project {
  name: string;
  description: string;
  github: string;
}

export interface OpenSourceProject extends Project {
  npm?: string;
  tags: readonly string[];
  icon?: IconComponent;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  social: {
    github: string;
    linkedin: string;
    instagram: string;
    email: string;
  };
}

export interface RepoStats {
  stars: number;
  forks: number;
}
