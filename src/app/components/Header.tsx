import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 20; // 20px extra padding
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black">
      {/* Top border accent */}
      <div className="h-1 bg-black"></div>
      
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main header */}
        <div className="flex items-center justify-between py-4 border-b border-gray-300">
          <div className="flex items-center gap-3 sm:gap-6">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 transition-colors"
            >
              <Menu size={20} />
            </button>
            <span className="text-xs uppercase tracking-wider text-gray-600 hidden sm:inline">Portfolio</span>
          </div>

          {/* Logo - Center on desktop, left on mobile */}
          <button onClick={() => scrollToSection('hero')} className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Andrian Soelistiyo
            </h1>
          </button>

          <div className="text-xs text-gray-600 hidden sm:block">
            {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>

        {/* Navigation menu */}
        <div className="hidden md:flex items-center justify-center gap-8 py-2 text-sm">
          <button onClick={() => scrollToSection('about')} className="hover:underline transition-all">
            About
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="hover:underline transition-all">
            Work
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:underline transition-all">
            Projects
          </button>
          <button onClick={() => scrollToSection('skills')} className="hover:underline transition-all">
            Skills
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:underline transition-all">
            Contact
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-300 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 hover:bg-gray-100 text-base"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left px-4 py-3 hover:bg-gray-100 text-base"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-4 py-3 hover:bg-gray-100 text-base"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left px-4 py-3 hover:bg-gray-100 text-base"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 hover:bg-gray-100 text-base"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}