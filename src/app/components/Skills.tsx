const coreExpertise = [
  'Product Design (End-to-End)',
  'User Research & User Testing',
  'Information Architecture',
  'User Flow & Wireframing',
  'High-Fidelity UI Design',
  'Design System',
  'Prototyping',
  'AI-Assisted Design & Workflow Optimization',
];

const supportingSkills = [
  'Frontend Development (HTML, CSS, JavaScript)',
  'Vue.js, Nuxt.js (JavaScript), Flutter',
  'Data Visualization & Analytics',
  'AI-Powered Design-to-Code Transformation',
];

const designTools = [
  'Figma',
  'Figma Make',
  'OverFlow',
  'Draw.io',
  'Mural',
  'Miro',
  'Maze',
  'Useberry',
  'Lookback',
  'ChatGPT',
  'Claude AI',
  'Midjourney',
];

const developmentTools = [
  'Visual Studio Code',
  'GitHub',
  'GitLab',
  'SVN',
  'Postman',
];

const analyticsTools = [
  'Jira',
  'Trello',
  'Notion',
  'Google Analytics',
  'Google Data Studio',
];

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 bg-gray-50 border-b border-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-8 sm:mb-12 pb-4 border-b border-gray-300">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Skills & Tools
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
              A comprehensive toolkit combining design expertise with technical capabilities, developed through years of hands-on experience.
            </p>
          </div>

          {/* Core Expertise */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl mb-6 pb-3 border-b-2 border-black" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Core Expertise
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {coreExpertise.map((skill) => (
                <div
                  key={skill}
                  className="py-3 sm:py-4 px-4 sm:px-5 bg-white border-l-4 border-black hover:shadow-md transition-shadow"
                >
                  <p className="text-sm sm:text-base">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting Skills */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl mb-6 pb-3 border-b-2 border-black" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Supporting Skills
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {supportingSkills.map((skill) => (
                <div
                  key={skill}
                  className="py-3 sm:py-4 px-4 sm:px-5 bg-white border-l-4 border-gray-400 hover:border-black hover:shadow-md transition-all"
                >
                  <p className="text-sm sm:text-base">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="border-t border-gray-300 pt-8 sm:pt-12">
            <h3 className="text-xl sm:text-2xl mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Tools & Technologies
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
              {/* Design & Research */}
              <div>
                <h4 className="text-sm uppercase tracking-wider mb-4 text-gray-600 pb-2 border-b border-gray-300">
                  Design & Research
                </h4>
                <ul className="space-y-2">
                  {designTools.map((tool) => (
                    <li key={tool} className="text-sm sm:text-base py-1 pl-4 relative before:content-['•'] before:absolute before:left-0">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Development */}
              <div>
                <h4 className="text-sm uppercase tracking-wider mb-4 text-gray-600 pb-2 border-b border-gray-300">
                  Development
                </h4>
                <ul className="space-y-2">
                  {developmentTools.map((tool) => (
                    <li key={tool} className="text-sm sm:text-base py-1 pl-4 relative before:content-['•'] before:absolute before:left-0">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project & Analytics */}
              <div>
                <h4 className="text-sm uppercase tracking-wider mb-4 text-gray-600 pb-2 border-b border-gray-300">
                  Project & Analytics
                </h4>
                <ul className="space-y-2">
                  {analyticsTools.map((tool) => (
                    <li key={tool} className="text-sm sm:text-base py-1 pl-4 relative before:content-['•'] before:absolute before:left-0">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-300">
            <p className="text-sm text-gray-600 italic">
              Last updated: December 19, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}