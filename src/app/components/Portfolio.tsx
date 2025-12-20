import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 3;
  
  const experiences = [
    {
      id: 1,
      title: 'Leading ERP System Redesign for Enterprise Efficiency',
      company: 'PT. Astra Graphia Information Technology (AGIT)',
      role: 'Senior UI/UX Designer',
      period: 'Apr 2021 - Present',
      duration: '45 bulan',
      type: 'Outsourced Full Time',
      description: 'Led the comprehensive redesign of Astra Honda Motor ERP system (STAR Project) to improve usability and operational efficiency for internal users.',
      achievements: [
        'Led UX redesign of Astra Honda Motor ERP system (STAR Project)',
        'Designed and maintained a scalable design system for web, mobile, and tablet platforms',
        'Collaborated with product managers, developers, and stakeholders throughout the design and implementation process',
        'Conducted user research, usability testing, and iterative design improvements based on feedback'
      ],
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY2MDY2MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      title: 'Supporting AGIT as UI/UX Designer for Enterprise Solutions',
      company: 'PT. Rapid Teknologi Indonesia',
      role: 'Senior UI/UX Designer',
      period: 'Apr 2021 - Present',
      duration: '45 bulan',
      type: 'Full Time',
      description: 'Supported AGIT as a UI/UX Designer for the Astra Honda Motor ERP (STAR Project), working closely with cross-functional teams to align design solutions.',
      achievements: [
        'Worked closely with cross-functional teams to align design solutions with business and technical requirements',
        'Contributed to design system development and UX improvements across multiple ERP modules'
      ],
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NjYxNjU1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      title: 'Managing Projects and Delivering SEO-Driven Solutions',
      company: 'IFG Life',
      role: 'Project Manager',
      period: 'Dec 2022 - Dec 2023',
      duration: '12 bulan',
      type: 'Freelance',
      description: 'Managed internal projects including Design, Development, and SEO while facilitating agile ceremonies and ensuring project alignment.',
      achievements: [
        'Managed internal projects including Design, Development, and SEO',
        'Planned and maintained project timelines and deliverables',
        'Facilitated agile ceremonies including sprint planning, backlog grooming, and sprint retrospectives',
        'Acted as liaison between stakeholders and execution teams to ensure project alignment'
      ],
      image: 'https://images.unsplash.com/photo-1765917393290-5b458231c02c?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHByb2plY3R8ZW58MXx8fHwxNzY2MDgyMzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 4,
      title: 'Redesigning Finpedia Mobile Application for Better Usability',
      company: 'Finpedia',
      role: 'UI/UX Designer',
      period: 'Jan 2021 - Mar 2021',
      duration: '3 bulan',
      type: 'Freelance',
      description: 'Redesigned the Finpedia mobile application to improve usability and visual consistency, establishing a cohesive design system for future development.',
      achievements: [
        'Redesigned the Finpedia mobile application to improve usability and visual consistency',
        'Created a design system to support future feature development',
        'Produced high-fidelity designs and interactive prototypes'
      ],
      image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY2MTQ4MDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 5,
      title: 'Developing Compas Company Profile with Enhanced UX',
      company: 'PT. Telunjuk Komputasi Indonesia (Compas.co.id)',
      role: 'Frontend Developer and UI/UX Designer',
      period: 'Sep 2020 - Feb 2021',
      duration: '6 bulan',
      type: 'Full Time',
      description: 'Developed the Compas company profile website and internal dashboards, achieving significant conversion rate improvements through UX optimization.',
      achievements: [
        'Increased website conversion rate by up to 30% through UX improvements',
        'Developed the Compas company profile website using WordPress',
        'Built internal dashboard reports using Vue.js and Nuxt.js',
        'Created data visualization reports using Google Data Studio'
      ],
      image: 'https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjYxMjc2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 6,
      title: 'Building Telunjuk v3 with Modern Frontend Architecture',
      company: 'PT. Telunjuk Komputasi Indonesia (Telunjuk.com)',
      role: 'Frontend Developer and UI/UX Designer',
      period: 'Apr 2018 - Aug 2020',
      duration: '29 bulan',
      type: 'Full Time',
      description: 'Refactored and maintained Telunjuk v3 platform using modern frontend technologies, achieving significant performance and conversion improvements.',
      achievements: [
        'Increased organic search performance by up to 80% through UX and frontend improvements',
        'Improved conversion rate by up to 50%',
        'Created and maintained design system for Telunjuk v3',
        'Refactored Telunjuk v3 frontend using Vue.js and Nuxt.js',
        'Built data visualization reports using Google Data Studio'
      ],
      image: 'https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcm9udGVuZCUyMGNvZGluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjYyMDMxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const currentExperiences = showAll ? experiences : experiences.slice(0, initialDisplayCount);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 bg-white border-b border-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-8 sm:mb-12 pb-4 border-b border-gray-300">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Professional Experience
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
              A comprehensive overview of my career journey, showcasing key roles and achievements in UI/UX design and project management.
            </p>
          </div>

          {/* Experiences */}
          <motion.div
            className="space-y-12 sm:space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="sync">
              {currentExperiences.map((exp, index) => (
                <motion.article
                  key={exp.id}
                  className="border-b border-gray-300 pb-12 sm:pb-16"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  <div className="grid md:grid-cols-12 gap-6 sm:gap-8">
                    {/* Image - Always on left */}
                    <div className="md:col-span-5">
                      <figure>
                        <img
                          src={exp.image}
                          alt={exp.title}
                          className="w-full h-48 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                          loading="lazy"
                        />
                        <figcaption className="text-xs text-gray-600 mt-2">
                          {exp.period} — {exp.type}
                        </figcaption>
                      </figure>
                    </div>

                    {/* Content - Always on right */}
                    <div className="md:col-span-7">
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <span className="text-xs uppercase tracking-widest text-gray-600">
                            {exp.role}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                          {exp.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                          <span className="font-medium">{exp.company}</span>
                          <span>•</span>
                          <span>{exp.period}</span>
                          <span>•</span>
                          <span>{exp.type}</span>
                        </div>

                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="pt-2">
                          <p className="text-xs uppercase tracking-wider text-gray-600 mb-2">Key Achievements</p>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0">
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Toggle button */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Page indicator */}
              <div className="text-sm text-gray-600">
                <span className="uppercase tracking-wider">Showing </span>
                <span className="font-medium">{showAll ? experiences.length : initialDisplayCount}</span>
                <span className="uppercase tracking-wider"> of </span>
                <span className="font-medium">{experiences.length}</span>
                <span className="uppercase tracking-wider"> Experiences</span>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handleToggle}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors uppercase tracking-wider text-sm"
                >
                  {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  <span>{showAll ? 'Less' : 'More'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}