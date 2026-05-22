import React from 'react';
import { motion } from 'framer-motion';
import { SiNextdotjs, SiNodedotjs, SiTailwindcss, SiTypescript, SiExpress, SiHtml5, SiCss, SiJavascript } from 'react-icons/si';

const PROJECTS = [
  {
    id: 1,
    title: 'Munazzem',
    subtitle: 'School Management System',
    description: 'A comprehensive platform for managing schools, handling everything from student records to attendance and grades.',
    tags: [
      { Icon: SiNextdotjs, label: 'Next.js', color: '#fff' },
      { Icon: SiNodedotjs, label: 'Node.js', color: '#6DA55F' },
      { Icon: SiExpress, label: 'Express', color: '#fff' },
      { Icon: SiTailwindcss, label: 'Tailwind', color: '#38BDF8' },
      { Icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
    ],
    image: '/projects design/Munazzem.png',
    year: '2024',
    status: 'Live',
    statusColor: '#3fb950',
    live: 'https://munazzem-demo.vercel.app/',
  },
  {
    id: 2,
    title: 'FreshCart',
    subtitle: 'E-Commerce Platform',
    description: 'A modern, full-stack e-commerce application featuring a seamless shopping experience and robust backend.',
    tags: [
      { Icon: SiNextdotjs, label: 'Next.js', color: '#fff' },
      { Icon: SiNodedotjs, label: 'Node.js', color: '#6DA55F' },
      { Icon: SiExpress, label: 'Express', color: '#fff' },
      { Icon: SiTailwindcss, label: 'Tailwind', color: '#38BDF8' },
      { Icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
    ],
    image: '/projects design/SmartCart-Ecommerce.png',
    year: '2024',
    status: 'Live',
    statusColor: '#3fb950',
    live: 'https://e-commerce-peach-omega-75.vercel.app/',
  },
  {
    id: 3,
    title: 'Eltorky Store',
    subtitle: 'Online Retail',
    description: 'A sleek online storefront designed with modern frontend technologies for high performance.',
    tags: [
      { Icon: SiNextdotjs, label: 'Next.js', color: '#fff' },
      { Icon: SiTailwindcss, label: 'Tailwind', color: '#38BDF8' },
      { Icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
    ],
    image: '/projects design/Eltorky-Store.png',
    year: '2024',
    status: 'Live',
    statusColor: '#3fb950',
    live: 'https://eltorky-store.vercel.app/',
  },
  {
    id: 4,
    title: 'M4A Clothes Brand',
    subtitle: 'Fashion E-Commerce',
    description: 'A stylish and responsive e-commerce site tailored specifically for a clothing brand.',
    tags: [
      { Icon: SiNextdotjs, label: 'Next.js', color: '#fff' },
      { Icon: SiTailwindcss, label: 'Tailwind', color: '#38BDF8' },
      { Icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
    ],
    image: '/projects design/M4A-Brand.png',
    year: '2024',
    status: 'Live',
    statusColor: '#3fb950',
    live: 'https://m4a-brand.vercel.app/',
  },
  {
    id: 5,
    title: 'DevMatch Programmers',
    subtitle: 'Landing Page',
    description: 'A beautifully designed landing page for a developer matchmaking program.',
    tags: [
      { Icon: SiHtml5, label: 'HTML', color: '#E34F26' },
      { Icon: SiCss, label: 'CSS', color: '#1572B6' },
      { Icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
    ],
    image: '/projects design/devMatch.png',
    year: '2023',
    status: 'Live',
    statusColor: '#3fb950',
    live: 'https://aymansaeed9542.github.io/dev-match/',
  },
  {
    id: 6,
    title: 'Paio Cars Company',
    subtitle: 'Corporate Website',
    description: 'A professional corporate website for a car company, featuring smooth animations and a premium look.',
    tags: [
      { Icon: SiHtml5, label: 'HTML', color: '#E34F26' },
      { Icon: SiCss, label: 'CSS', color: '#1572B6' },
      { Icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
    ],
    image: '/projects design/Paio-CarsCompany.png',
    year: '2023',
    status: 'Live',
    statusColor: '#3fb950',
    live: 'https://aymansaeed9542.github.io/paio-car-company/',
  },
  {
    id: 7,
    title: 'Social App',
    subtitle: 'Social Media Platform',
    description: 'A modern social media application currently in development, featuring real-time interactions and a responsive UI.',
    tags: [],
    image: null,
    year: '2025',
    status: 'Building',
    statusColor: '#d29922',
    live: null,
  },
  {
    id: 8,
    title: 'Saraha App',
    subtitle: 'Anonymous Messaging',
    description: 'A platform to send and receive anonymous messages via shareable links. Coming soon with dark mode.',
    tags: [],
    image: null,
    year: '2025',
    status: 'Building',
    statusColor: '#d29922',
    live: null,
  },
  {
    id: 9,
    title: 'HR System',
    subtitle: 'Human Resources Management',
    description: 'A robust internal tool for managing company employees, payroll, and performance tracking.',
    tags: [],
    image: null,
    year: '2025',
    status: 'Building',
    statusColor: '#d29922',
    live: null,
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group flex flex-col h-full bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#58a6ff] hover:shadow-[0_0_30px_rgba(88,166,255,0.15)] transition-all duration-300"
    >
      {/* MAC-STYLE TOP BAR */}
      <div className="px-4 py-2.5 bg-[#161b22] border-b border-[#30363d] flex items-center justify-between shrink-0">
         <div className="flex gap-1.5">
           <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
           <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
           <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
         </div>
         <span className="text-[10px] font-mono text-[#8b949e]">{project.title.toLowerCase().replace(/\s+/g, '-')}.tsx</span>
      </div>

      {/* IMAGE CONTAINER */}
      {project.image ? (
        <div className="w-full aspect-video border-b border-[#30363d] overflow-hidden bg-[#050505] relative shrink-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
          />
        </div>
      ) : (
        <div className="w-full flex-1 border-b border-[#30363d] bg-[#0d1117] flex flex-col items-center justify-center relative min-h-0">
          <div className="w-16 h-16 border-2 border-dashed border-[#30363d] rounded-full flex items-center justify-center mb-3">
             <span className="text-2xl">🚧</span>
          </div>
          <span className="font-mono text-[#484f58] text-xs">Building in progress</span>
        </div>
      )}

      {/* BOTTOM CONTENT */}
      <div className="p-4 md:p-5 flex flex-col shrink-0 bg-[#0d1117]">
         <div className="flex items-center justify-between mb-1">
            <h3 className="text-lg md:text-xl font-bold text-[#c9d1d9] font-heading group-hover:text-[#58a6ff] transition-colors truncate pr-2">{project.title}</h3>
            <span className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider bg-[#161b22] px-2 py-1 rounded-md border border-[#30363d] shrink-0">
               <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: project.statusColor }}></span>
               <span style={{ color: project.statusColor }}>{project.status}</span>
            </span>
         </div>
         
         <p className="text-[11px] font-mono text-[#a5d6ff] mb-2 truncate">// {project.subtitle}</p>
         
         <p className="text-xs text-[#8b949e] font-body leading-relaxed line-clamp-2 mb-4">
            {project.description}
         </p>

         <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#30363d]">
            {/* Tech Icons (Badges) */}
            <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar flex-1">
               {project.tags.map(({ Icon, label, color }) => (
                 <span key={label} className="flex items-center justify-center shrink-0 w-8 h-8 rounded-md bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] hover:text-[#58a6ff] text-[#8b949e] transition-colors" title={label}>
                   <Icon size={14} />
                 </span>
               ))}
               {project.tags.length === 0 && (
                 <span className="text-[10px] font-mono text-[#484f58]">No stack specified</span>
               )}
            </div>

            {/* Demo Button */}
            {project.live ? (
               <a href={project.live} target="_blank" rel="noopener noreferrer" className="shrink-0 text-xs font-mono text-[#c9d1d9] hover:text-[#58a6ff] hover:bg-[#30363d]/30 transition-colors flex items-center justify-center gap-2 px-3 py-2 md:px-4 bg-[#161b22] rounded-md border border-[#30363d] hover:border-[#58a6ff]">
                  <span className="text-[#3fb950] text-[10px]">▶</span> Demo
               </a>
            ) : (
               <div className="shrink-0 text-[10px] md:text-xs font-mono text-[#484f58] flex items-center justify-center gap-2 px-3 py-2 md:px-4 bg-[#0d1117]/50 rounded-md border border-[#30363d]/50 cursor-not-allowed">
                  <span className="text-[#d29922] text-[10px]">⏳</span> Dev
               </div>
            )}
         </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full pt-12 pb-24 px-4 md:px-8 max-w-[1400px] mx-auto flex flex-col items-center">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
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
           className="w-full max-w-[500px] md:max-w-[600px] mb-6 flex justify-center"
         >
            <img 
              src="/avatars/projects-avatar.webp" 
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full relative z-10 pb-[20vh] md:pb-0">
         {PROJECTS.map((p, i) => (
           <ProjectCard key={p.id} project={p} index={i} />
         ))}
      </div>
    </section>
  );
}
