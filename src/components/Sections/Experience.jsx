import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    id: 1,
    title: 'Freelance Full Stack Developer',
    company: 'Remote',
    date: 'Sep 2025 - Present',
    description: 'Developing modern web applications and e-commerce platforms (like M4A Store) using React, Next.js, Tailwind CSS, and Node.js. Focusing on responsive UI and scalable architecture.',
    icon: '💻'
  },
  {
    id: 2,
    title: 'Web Tasks Program Trainer',
    company: 'Alexandria University',
    date: 'July 2025 - Sep 2025',
    description: 'Trained 15 students on web development fundamentals (HTML, CSS, JavaScript). Focused on layout design, DOM manipulation, and CRUD operations.',
    icon: '👨‍🏫'
  },
  {
    id: 3,
    title: 'Full Stack Trainee',
    company: 'Digital Egypt Pioneers Initiative (DEPI)',
    date: 'June 2025 - Dec 2025',
    description: 'Engaged in intensive training for full-stack development. Built scalable web applications using RESTful APIs and modern UI frameworks, selected among top-performing trainees.',
    icon: '🏆'
  },
  {
    id: 4,
    title: 'Front-End Trainee',
    company: 'Route Academy',
    date: 'Feb 2025 - Sep 2025',
    description: 'Acquired strong front-end skills by building responsive, interactive web applications using HTML, CSS, JavaScript, React, and Next.js.',
    icon: '🚀'
  },
  {
    id: 5,
    title: 'Computer Science & Statistics',
    company: 'Alexandria University - Faculty of Science',
    date: '2023 - 2027',
    description: 'Undergraduate student focusing on computer science fundamentals, algorithms, and software engineering principles.',
    icon: '🎓'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-24 px-4 md:px-8 max-w-4xl mx-auto flex flex-col items-center">
      
      {/* MASSIVE BACKGROUND TEXT */}
      <div className="absolute inset-0 flex flex-col items-center justify-start mt-20 pointer-events-none select-none z-0 opacity-10">
        <h1 className="text-[14vw] font-black leading-[0.8] tracking-tighter text-[#8b949e] font-heading whitespace-nowrap">
          EXPERIENCE
        </h1>
      </div>

      <div className="relative z-10 w-full mt-10">
        <div className="flex items-center justify-center gap-3 mb-20">
           <span className="w-3 h-3 rounded-full bg-[#d2a8ff] animate-pulse"></span>
           <h2 className="text-2xl md:text-4xl font-mono text-[#c9d1d9] font-light tracking-tight">
             Journey & Timeline
           </h2>
        </div>

        <div className="relative border-l border-[#30363d] ml-4 md:ml-8 space-y-12 pb-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[17px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-[#0d1117] border border-[#30363d] shadow-[0_0_15px_rgba(88,166,255,0.2)] text-sm">
                {exp.icon}
              </div>

              {/* Content Card */}
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 md:p-8 hover:border-[#58a6ff] hover:shadow-[0_0_30px_rgba(88,166,255,0.1)] transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-[#c9d1d9] group-hover:text-[#58a6ff] transition-colors">
                    {exp.title}
                  </h3>
                  <span className="text-xs font-mono text-[#8b949e] bg-[#0d1117] px-3 py-1 rounded-full border border-[#30363d] w-fit">
                    {exp.date}
                  </span>
                </div>
                
                <h4 className="text-[#a5d6ff] font-mono text-sm mb-4 flex items-center gap-2">
                  <span className="text-[#3fb950]">@</span> {exp.company}
                </h4>
                
                <p className="text-[#8b949e] leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
