import {
  About,
  Experience,
  Footer,
  Hero,
  OpenSource,
  Projects
} from '@/components';
import Navbar from '@/components/layout/Navbar';
import { buildPersonJsonLd } from '@/lib';

const personJsonLd = JSON.stringify(buildPersonJsonLd()).replace(/</g, '\\u003c');

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: personJsonLd }}
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
