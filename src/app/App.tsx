import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { PersonalProjects } from './components/PersonalProjects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { trackScrollDepth } from '../utils/analytics';

export default function App() {
  useEffect(() => {
    const scrollDepths = [25, 50, 75, 100];
    const triggered = new Set<number>();

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop / documentHeight) * 100;

      scrollDepths.forEach((depth) => {
        if (scrollPercentage >= depth && !triggered.has(depth)) {
          triggered.add(depth);
          trackScrollDepth(depth);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <PersonalProjects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}