import {
  Navbar,
  Hero,
  About,
  Experience,
  OpenSource,
  Projects,
  Footer
} from '@/components';

export default function Home() {
  return (
    <>
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
