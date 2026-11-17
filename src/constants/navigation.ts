export interface NavLink {
  href: `#${string}`;
  label: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#open-source', label: 'Open Source' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];
