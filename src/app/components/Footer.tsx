import { trackNavigation } from '../../utils/analytics';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId: string) => {
    trackNavigation(sectionId, 'footer');
  };

  return (
    <footer className="bg-white border-t-2 border-black py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-300">
            <div>
              <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Andrian Soelistiyo
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Senior UI/UX Designer specializing in enterprise design systems and end-to-end product design.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 text-gray-600">Sections</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="#about" className="hover:underline" onClick={() => handleNavClick('about')}>
                    Background
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:underline" onClick={() => handleNavClick('portfolio')}>
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:underline" onClick={() => handleNavClick('skills')}>
                    Skills & Tools
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline" onClick={() => handleNavClick('contact')}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 text-gray-600">Contact</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="break-all">andrian.socialmedia@gmail.com</li>
                <li>+62 877-8808-7738</li>
                <li>Kota Tangerang, Banten</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-gray-600">
            <p>&copy; {currentYear} Andrian Soelistiyo. All rights reserved.</p>
            <p className="uppercase tracking-wider text-center">
              Last updated: December 19, 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}