export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-white border-b border-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="mb-8 sm:mb-12 pb-4 border-b border-gray-300">
            <h2 className="text-3xl sm:text-4xl md:text-5xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Professional Background
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-6 sm:gap-8">
            {/* Main content */}
            <div className="md:col-span-8 space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg leading-relaxed">
                As a Senior UI/UX Designer with over six years of comprehensive experience, I've dedicated my 
                career to transforming complex enterprise and ERP systems into intuitive, user-friendly experiences. 
                My expertise lies in leading end-to-end product design initiatives, from initial research and 
                wireframing to final implementation and testing—now supercharged by AI automation.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                What sets me apart is my mastery of AI-powered design-to-production workflows. Using tools like 
                Figma Make, I can transform Figma designs into fully functional, production-ready websites with 
                responsive layouts, interactive components, and clean code—all generated through AI. This isn't 
                just prototyping; these are real applications ready for deployment, complete with proper architecture, 
                accessibility, and performance optimization.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                My workflow revolutionizes traditional design-development cycles: I design in Figma, leverage AI 
                tools to generate production code (React, Tailwind, Vue.js), conduct rapid iterations based on user 
                feedback, and deploy fully functional websites—all without lengthy back-and-forth with development 
                teams. This approach has accelerated project delivery by up to 70% while maintaining the highest 
                quality standards.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Throughout my career at leading technology companies like PT. Astra Graphia Information Technology 
                and PT. Rapid Teknologi Indonesia, I've successfully designed and maintained scalable design systems 
                for web, mobile, and tablet platforms. My unique background in design, frontend development, and AI 
                automation enables me to bridge the gap between creative vision and technical implementation—delivering 
                complete products, not just mockups.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-300">
                <div>
                  <p className="text-4xl sm:text-5xl mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>6+</p>
                  <p className="text-xs sm:text-sm text-gray-600">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl sm:text-5xl mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>70%</p>
                  <p className="text-xs sm:text-sm text-gray-600">Faster Design-to-Code with AI</p>
                </div>
                <div>
                  <p className="text-4xl sm:text-5xl mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>100%</p>
                  <p className="text-xs sm:text-sm text-gray-600">Production-Ready Output</p>
                </div>
                <div>
                  <p className="text-4xl sm:text-5xl mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>50%</p>
                  <p className="text-xs sm:text-sm text-gray-600">Max Conversion Improvement</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-4 mt-6 md:mt-0">
              <div className="border-l-2 border-gray-300 pl-4 sm:pl-6 space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-sm uppercase tracking-wider mb-4 text-gray-600">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-sm sm:text-base">Bina Nusantara University</p>
                      <p className="text-xs sm:text-sm text-gray-600">Undergraduated degree, Computer Science</p>
                      <p className="text-xs text-gray-500 mt-1">2012 - 2016</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-300">
                  <h3 className="text-sm uppercase tracking-wider mb-4 text-gray-600">Languages</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm sm:text-base mb-1">Bahasa Indonesia</p>
                      <p className="text-xs text-gray-600">Native or bilingual proficiency</p>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base mb-1">English</p>
                      <p className="text-xs text-gray-600">Intermediate working proficiency</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-300">
                  <h3 className="text-sm uppercase tracking-wider mb-4 text-gray-600">Location</h3>
                  <p className="text-sm">Kota Tangerang, Banten, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}