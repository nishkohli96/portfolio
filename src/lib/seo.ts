import { CORE_TECH, profile, SITE_URL } from '@/constants';

export function buildPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    url: SITE_URL,
    image: `${SITE_URL}/Nish_pic.jpg`,
    email: profile.email,
    address: { '@type': 'PostalAddress', addressLocality: 'Noida', addressCountry: 'IN' },
    sameAs: [profile.social.github, profile.social.linkedin, profile.social.instagram],
    knowsAbout: CORE_TECH,
  };
}
