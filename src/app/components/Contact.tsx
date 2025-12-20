import { Mail, Linkedin, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-white border-b border-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="mb-8 sm:mb-12 pb-4 border-b border-gray-300">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Open to new opportunities in UI/UX design and product development. Let's discuss how we can work together.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
            {/* Direct Contact */}
            <div className="border-l-2 border-gray-300 pl-6">
              <h3 className="text-xs sm:text-sm uppercase tracking-wider mb-6 text-gray-600">Direct Contact</h3>
              <div className="space-y-4">
                <a
                  href="mailto:andrian.socialmedia@gmail.com"
                  className="flex items-start gap-3 text-sm sm:text-base hover:underline break-all group"
                >
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-600 group-hover:text-black transition-colors" />
                  <span>andrian.socialmedia@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/6287788087738?text=Hi%20Andrian%2C%20I%20found%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20project%20opportunity%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm sm:text-base hover:underline group"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 text-gray-600 group-hover:text-black transition-colors" />
                  <span>+62 877-8808-7738</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/andrian-soelistiyo-6a9324a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm sm:text-base hover:underline group"
                >
                  <Linkedin className="h-5 w-5 flex-shrink-0 text-gray-600 group-hover:text-black transition-colors" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Location & Availability */}
            <div className="border-l-2 border-gray-300 pl-6">
              <h3 className="text-xs sm:text-sm uppercase tracking-wider mb-6 text-gray-600">Location & Availability</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-600" />
                  <div className="text-sm sm:text-base">
                    <p className="font-medium">Kota Tangerang</p>
                    <p className="text-gray-600">Banten, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-600" />
                  <div className="text-sm sm:text-base">
                    <p className="font-medium">Currently Available</p>
                    <p className="text-gray-600">Open to full-time and freelance opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 pt-8 border-t border-gray-300 text-center">
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Interested in collaborating? Reach out via email or WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:andrian.socialmedia@gmail.com"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-black text-white text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </a>
              <a
                href="https://wa.me/6287788087738?text=Hi%20Andrian%2C%20I%20found%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20project%20opportunity%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 border border-gray-300 bg-white text-gray-700 text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}