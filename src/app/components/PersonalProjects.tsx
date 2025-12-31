import { ExternalLink, Lock } from 'lucide-react';

export function PersonalProjects() {
  const projects = [
    {
      id: 1,
      title: 'QR Code Generator Indonesia',
      subtitle: 'Free Instant QR Code Generator - No Login Required',
      period: 'Dec 2025',
      role: 'Solo Developer & Designer',
      description: 'Generator QR Code gratis terbaik Indonesia. Buat QR Code untuk URL, teks, WhatsApp, email dalam hitungan detik. Tanpa login, tanpa biaya. Download format PNG berkualitas tinggi.',
      highlights: [
        'Built entirely with AI using Figma Make - zero manual coding required',
        'Instant QR code generation for URLs, text, WhatsApp, and email',
        'No login or registration required - completely free to use',
        'High-quality PNG downloads with customizable size options',
        'Clean, intuitive Indonesian interface optimized for local users',
        'Lightning-fast performance with client-side generation'
      ],
      techStack: ['Figma Make', 'React', 'Tailwind CSS', 'Netlify'],
      url: 'https://qr-generator-projects.netlify.app/',
      isPrivate: false,
      image: 'https://images.unsplash.com/photo-1578317260099-6021237c3391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxciUyMGNvZGUlMjBzY2FubmVyJTIwcGhvbmV8ZW58MXx8fHwxNzY3MTU3MTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      title: 'Holysnap Studio Operations System',
      subtitle: 'Full-Stack Management Platform for Self Photo Booth Studio',
      period: 'Dec 2025',
      role: 'Solo Developer & Designer',
      client: 'Holysnap Studio',
      description: 'A comprehensive end-to-end operations system for a self photo booth studio, enabling visitors to take professional-quality photos independently. The platform manages the complete workflow from customer booking to final photo delivery through QR code downloads.',
      highlights: [
        'Built with AI-powered Figma Make and integrated Supabase for real-time backend operations',
        'Complete admin dashboard for managing bookings, photo editing, and print queue',
        'Automated photo upload and cloud storage with Cloudinary and Cloudflare R2',
        'QR code generation system for seamless customer photo downloads',
        'Customer portal for accessing, downloading, and sharing edited photos',
        'End-to-end workflow automation from booking to delivery'
      ],
      techStack: ['Figma Make', 'Supabase', 'Cloudinary', 'Cloudflare R2', 'React', 'Tailwind CSS'],
      url: null, // Private client project
      isPrivate: true,
      image: 'https://images.unsplash.com/photo-1616900167878-ea2f3331b3e0?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGJvb3RoJTIwc3R1ZGlvfGVufDF8fHx8MTc2NjIwNDEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      title: 'Matematika SD-SMP Learning Platform',
      subtitle: 'AI-Powered Educational Platform for Elementary & Middle School Students',
      period: 'Nov 2025',
      role: 'Solo Developer & Designer',
      description: 'An interactive learning platform designed to help elementary and middle school students (grades 1-9) understand mathematics quickly and easily through AI-powered solutions.',
      highlights: [
        'Built entirely with AI using Figma Make - from design to production-ready code',
        'Interactive math exercises and quizzes tailored for grades 1-9',
        'Step-by-step problem solving explanations for better comprehension',
        'Responsive design optimized for both mobile and desktop learning',
        'Fast deployment pipeline with Netlify for continuous delivery'
      ],
      techStack: ['Figma Make', 'React', 'Tailwind CSS', 'Netlify'],
      url: 'https://matematika-sd-smp.netlify.app/',
      isPrivate: false,
      image: 'https://images.unsplash.com/photo-1758685733780-4eced3a89d98?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoJTIwZWR1Y2F0aW9uJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY2MjAzNjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 bg-gray-50 border-b border-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-8 sm:mb-12 pb-4 border-b border-gray-300">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Personal Projects
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
              Showcasing innovative side projects that demonstrate expertise in AI-powered development and modern web technologies.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-12 sm:space-y-16">
            {projects.map((project) => (
              <article key={project.id} className="bg-white border border-gray-300 overflow-hidden">
                <div className="grid md:grid-cols-12">
                  {/* Image */}
                  <div className="md:col-span-5">
                    <figure className="h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        loading="lazy"
                      />
                    </figure>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-7 p-6 sm:p-8 lg:p-10">
                    <div className="space-y-4">
                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-gray-600">
                        <span>{project.role}</span>
                        <span>•</span>
                        <span>{project.period}</span>
                      </div>

                      {/* Title */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl leading-tight mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                          {project.title}
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 italic">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="pt-2">
                        <p className="text-xs uppercase tracking-wider text-gray-600 mb-3">Key Highlights</p>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0">
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="pt-2">
                        <p className="text-xs uppercase tracking-wider text-gray-600 mb-2">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs border border-gray-300 bg-white text-gray-700 uppercase tracking-wider"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        {project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors border border-black"
                          >
                            <span>Visit Project</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-300 text-gray-700 text-sm uppercase tracking-wider cursor-not-allowed">
                            <span>Visit Project</span>
                            <Lock className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}