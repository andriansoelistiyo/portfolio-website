import { Linkedin, Github, Mail, Phone } from 'lucide-react';
import { trackContactClick, trackNavigation } from '../../utils/analytics';

export function Hero() {
  const scrollToContact = () => {
    trackNavigation('contact', 'hero_cta_button');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    trackNavigation('portfolio', 'hero_cta_button');
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-white border-b border-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Category badge */}
          <div className="mb-6 sm:mb-8">
            <span className="text-xs uppercase tracking-widest text-gray-600 border-b border-black pb-1">
              Design & Technology
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 sm:mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif", lineHeight: '1.1' }}>
            From Concept to Code: AI-Powered End-to-End Design Solutions
          </h1>

          {/* Byline */}
          <div className="flex items-center gap-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-300">
            <div className="text-sm">
              <p className="mb-1">
                By <span className="underline">Andrian Soelistiyo</span>
              </p>
              <p className="text-gray-600 text-xs">
                Senior UI/UX Designer — Kota Tangerang, Banten, Indonesia
              </p>
            </div>
          </div>

          {/* Lead paragraph */}
          <div className="grid md:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="md:col-span-8">
              <p className="text-lg sm:text-xl leading-relaxed mb-4 sm:mb-6" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                Senior UI/UX Designer with 6+ years of experience creating complete end-to-end products from initial 
                design to production-ready code using AI. Specializing in enterprise and ERP systems, I leverage 
                cutting-edge tools like Figma Make, ChatGPT, and AI-powered design-to-code platforms to deliver 
                fully functional websites in record time.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Pioneering a revolutionary workflow where design seamlessly transforms into production code—no manual 
                handoff required. From wireframes to live websites, I utilize AI to handle everything: responsive 
                layouts, component architecture, interactions, and deployment. This approach reduces development time 
                by 70% while maintaining enterprise-grade quality and scalability.
              </p>
            </div>

            <div className="md:col-span-4">
              <div className="border-l-2 border-gray-300 pl-4 sm:pl-6">
                <h3 className="text-sm uppercase tracking-wider mb-4 text-gray-600">Contact</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/6287788087738?text=Hi%20Andrian%2C%20I%20found%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20project%20opportunity%20with%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackContactClick('whatsapp', 'hero_sidebar')}
                    className="flex items-center gap-2 text-sm hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    +62 877-8808-7738
                  </a>
                  <a
                    href="mailto:andrian.socialmedia@gmail.com"
                    onClick={() => trackContactClick('email', 'hero_sidebar')}
                    className="flex items-center gap-2 text-sm hover:underline break-all"
                  >
                    <Mail className="h-4 w-4" />
                    andrian.socialmedia@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/andrian-soelistiyo-6a9324a1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackContactClick('linkedin', 'hero_sidebar')}
                    className="flex items-center gap-2 text-sm hover:underline"
                  >
                    <Linkedin className="h-4 w-4" />
                    Andrian Soelistiyo
                  </a>
                </div>

                <button
                  onClick={scrollToContact}
                  className="mt-6 w-full px-4 py-3 bg-black text-white text-sm hover:bg-gray-800 transition-colors"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>

          {/* Featured image */}
          <figure className="mb-4">
            <img
              src="https://images.unsplash.com/photo-1563019589-7e7db5152430?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzY2MTMzMjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Designer workspace"
              className="w-full grayscale"
              loading="lazy"
            />
            <figcaption className="text-xs text-gray-600 mt-2">
              A modern workspace where enterprise design systems come to life.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}