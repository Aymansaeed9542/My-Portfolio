import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';

/* ─── 7 Projects Array (3 Existing + 4 Placeholders) ─── */
const PROJECTS = [
  {
    id: 1,
    title: 'Monazem',
    subtitle: 'School Management',
    description: 'A full-featured platform for managing students, teachers, grades, and attendance — built for real schools.',
    tags: [
      { Icon: SiNextdotjs, label: 'Next.js', color: '#fff' },
      { Icon: SiNodedotjs, label: 'Node.js', color: '#6DA55F' },
      { Icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
    ],
    year: '2024',
    status: 'Live',
    statusColor: '#3fb950',
    github: 'https://github.com/Aymansaeed9542',
    live: '#',
  },
  {
    id: 2,
    title: 'Saraha',
    subtitle: 'Anonymous Messaging',
    description: 'Send anonymous messages to anyone via a shareable link. Built with Next.js, NextAuth, and a dark UI.',
    tags: [
      { Icon: SiNextdotjs, label: 'Next.js', color: '#fff' },
      { Icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
      { Icon: SiTailwindcss, label: 'Tailwind', color: '#38BDF8' },
    ],
    year: '2025',
    status: 'Live',
    statusColor: '#3fb950',
    github: 'https://github.com/Aymansaeed9542',
    live: '#',
  },
  {
    id: 3,
    title: 'Portfolio',
    subtitle: 'This Site',
    description: 'A chic, software-engineering inspired portfolio built with React + Vite, featuring clean IDE-like aesthetics.',
    tags: [
      { Icon: SiReact, label: 'React', color: '#61DAFB' },
      { Icon: SiTailwindcss, label: 'Tailwind', color: '#38BDF8' },
    ],
    year: '2026',
    status: 'Building',
    statusColor: '#d29922',
    github: 'https://github.com/Aymansaeed9542',
    live: '#',
  },
  {
    id: 4, title: 'Project IV', subtitle: 'Coming Soon', description: 'A massive upcoming full-stack application currently in stealth mode.',
    tags: [], year: 'Idea', status: 'Planning', statusColor: '#8b949e', github: '#', live: '#'
  },
  {
    id: 5, title: 'Project V', subtitle: 'Coming Soon', description: 'Placeholder for a future creative software engineering masterpiece.',
    tags: [], year: 'Idea', status: 'Planning', statusColor: '#8b949e', github: '#', live: '#'
  },
  {
    id: 6, title: 'Project VI', subtitle: 'Coming Soon', description: 'Space reserved to showcase future scaling solutions and system designs.',
    tags: [], year: 'Idea', status: 'Planning', statusColor: '#8b949e', github: '#', live: '#'
  },
  {
    id: 7, title: 'Project VII', subtitle: 'Coming Soon', description: 'The final allocated slot for the 2026-2027 development roadmap.',
    tags: [], year: 'Idea', status: 'Planning', statusColor: '#8b949e', github: '#', live: '#'
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group flex flex-col justify-between bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#58a6ff] hover:shadow-[0_0_30px_rgba(88,166,255,0.15)] transition-all duration-300"
    >
      {/* MAC-STYLE TOP BAR */}
      <div className="px-4 py-2 bg-[#0d1117] border-b border-[#30363d] flex items-center justify-between">
         <div className="flex gap-1.5">
           <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
           <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
           <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
         </div>
         <span className="text-[10px] font-mono text-[#8b949e]">{project.title.toLowerCase().replace(/\s+/g, '-')}.tsx</span>
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow">
         <div className="mb-4">
           <div className="flex items-center justify-between mb-4">
             <span className="text-[10px] font-mono text-[#8b949e] bg-[#0d1117] px-2 py-1 rounded-md border border-[#30363d]">{project.year}</span>
             <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider bg-[#0d1117] px-2 py-1 rounded-md border border-[#30363d]">
               <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: project.statusColor }}></span>
               <span style={{ color: project.statusColor }}>{project.status}</span>
             </span>
           </div>
           
           <h3 className="text-2xl font-bold text-[#c9d1d9] font-heading mb-2 group-hover:text-[#58a6ff] transition-colors">{project.title}</h3>
           <p className="text-xs font-mono text-[#a5d6ff] mb-4">// {project.subtitle}</p>
           <p className="text-sm text-[#8b949e] font-body leading-relaxed">{project.description}</p>
         </div>

         <div>
           {project.tags.length > 0 ? (
             <div className="flex flex-wrap gap-2 mb-6">
               {project.tags.map(({ Icon, label, color }) => (
                 <span key={label} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0d1117] border border-[#30363d] text-[10px] font-mono text-[#c9d1d9] group-hover:border-[#484f58] transition-colors">
                   <Icon size={10} color={color} />
                   {label}
                 </span>
               ))}
             </div>
           ) : (
             <div className="h-[28px] mb-6"></div>
           )}
           
           <div className="flex items-center gap-4 pt-4 border-t border-[#30363d]">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[#8b949e] hover:text-white transition-colors flex items-center gap-1.5">
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12"/>
                 </svg>
                 Source
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[#8b949e] hover:text-[#58a6ff] transition-colors flex items-center gap-1.5">
                 <span className="text-[#3fb950] text-[10px]">▶</span> Demo
              </a>
           </div>
         </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center">
      
      {/* MASSIVE BACKGROUND TEXT */}
      <div className="absolute inset-0 flex flex-col items-center justify-start mt-20 pointer-events-none select-none z-0 opacity-10">
        <h1 className="text-[15vw] font-black leading-[0.85] tracking-tighter text-[#8b949e] font-heading whitespace-nowrap">
          SELECTED
        </h1>
        <h1 className="text-[15vw] font-black leading-[0.85] tracking-tighter text-[#8b949e] font-heading whitespace-nowrap">
          PROJECTS
        </h1>
      </div>

      {/* HEADER WITH AVATAR POINTING DOWN */}
      <div className="flex flex-col items-center mb-16 relative z-10 w-full mt-10">
         <motion.div 
           initial={{ opacity: 0, y: -50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full max-w-[400px] md:max-w-[500px] mb-6 flex justify-center"
         >
            <img 
              src="/avatars/project-section-avatar.png" 
              alt="Projects Avatar" 
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]" 
            />
         </motion.div>
         
         <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#30363d] bg-[#161b22] text-[#c9d1d9] font-mono text-sm md:text-base shadow-2xl backdrop-blur-md">
           <span className="w-2.5 h-2.5 rounded-full bg-[#58a6ff] animate-pulse"></span>
           Explore Repositories
         </div>
      </div>

      {/* GRID / MOBILE STACK */}
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 w-full relative z-10 pb-[20vh] md:pb-0">
         {PROJECTS.map((p, i) => (
           <div 
             key={p.id} 
             className="sticky md:static w-full transition-transform"
             style={{ 
               top: `calc(12vh + ${i * 15}px)`, 
               zIndex: i 
             }}
           >
             <ProjectCard project={p} index={i} />
           </div>
         ))}
      </div>
    </section>
  );
}
