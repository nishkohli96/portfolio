import {
  Navbar,
  Hero,
  About,
  Experience,
  OpenSource,
  Projects,
  Footer
} from '@/components';
import { profile, siteUrl } from '@/lib/data';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  url: siteUrl,
  image: `${siteUrl}/Nish_pic.jpg`,
  email: profile.email,
  address: { '@type': 'PostalAddress', addressLocality: 'Noida', addressCountry: 'IN' },
  sameAs: [profile.social.github, profile.social.linkedin, profile.social.instagram],
  knowsAbout: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'Python', 'FastAPI'],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <OpenSource />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
