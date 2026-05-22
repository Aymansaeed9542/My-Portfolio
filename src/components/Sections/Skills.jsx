import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubStats from '../GitHubStats/GitHubStats';
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiJavascript,
  SiMongodb, SiPostgresql, SiMysql, SiMongoose, SiJsonwebtokens, SiSocketdotio,
  SiTailwindcss, SiBootstrap, SiHtml5, SiCss, SiReactrouter,
  SiDocker, SiGit, SiPrisma, SiGraphql, SiExpress, SiRedux, SiGithub,
  SiVite, SiFramer,
} from 'react-icons/si';
import SectionLabel from '../SectionLabel/SectionLabel';

const CATEGORIES = [
  {
    name: 'Frontend',
    skills: [
      { Icon: SiNextdotjs,   label: 'Next.js',    color: '#ffffff' },
      { Icon: SiReact,       label: 'React',      color: '#61DAFB' },
      { Icon: SiJavascript,  label: 'JavaScript', color: '#F7DF1E' },
      { Icon: SiTypescript,  label: 'TypeScript', color: '#3178C6' },
      { Icon: SiTailwindcss, label: 'Tailwind CSS',color: '#38BDF8' },
      { Icon: SiBootstrap,   label: 'Bootstrap',  color: '#7952B3' },
      { Icon: SiHtml5,       label: 'HTML5',      color: '#E34F26' },
      { Icon: SiCss,         label: 'CSS3',       color: '#1572B6' },
      { Icon: SiFramer,      label: 'Framer Motion', color: '#0055FF' },
      { Icon: SiRedux,       label: 'Redux',      color: '#764ABC' },
      { Icon: SiReactrouter, label: 'React Router', color: '#CA4245' },
      { Icon: SiVite,        label: 'Vite',       color: '#646CFF' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { Icon: SiNodedotjs,  label: 'Node.js',    color: '#6DA55F' },
      { Icon: SiExpress,    label: 'Express.js', color: '#cccccc' },
      { Icon: SiMongodb,    label: 'MongoDB',    color: '#47A248' },
      { Icon: SiMongoose,   label: 'Mongoose',   color: '#e02222' },
      { Icon: SiMysql,      label: 'MySQL',      color: '#4479A1' },
      { Icon: SiPostgresql, label: 'PostgreSQL', color: '#316192' },
      { Icon: SiPrisma,     label: 'Prisma ORM', color: '#ffffff' },
      { Icon: SiGraphql,    label: 'GraphQL',    color: '#E535AB' },
      { Icon: SiJsonwebtokens, label: 'JWT',     color: '#ffffff' },
      { Icon: SiSocketdotio, label: 'Socket.io', color: '#ffffff' },
    ],
  },
  {
    name: 'Tooling',
    skills: [
      { Icon: SiGit,    label: 'Git',    color: '#F05032' },
      { Icon: SiGithub, label: 'GitHub', color: '#ffffff' },
      { Icon: SiDocker, label: 'Docker', color: '#0db7ed' },
    ],
  },
];

/* ── Minimalist Premium Pill ── */
function SkillPill({ Icon, label, color }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05, color, borderColor: color }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 18px',
        borderRadius: '999px',
        border: '1px solid #30363d',
        background: '#161b22',
        fontSize: '13px',
        fontFamily: 'var(--font-mono)',
        fontWeight: 400,
        color: '#8b949e', // subtle gray default
        cursor: 'default',
        transition: 'color 0.2s, border-color 0.2s',
      }}
    >
      <Icon size={15} />
      {label}
    </motion.span>
  );
}

export default function Skills() {
  // Default to the first category being open
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="skills"
      className="relative w-full pt-24 pb-32 overflow-hidden flex flex-col items-center z-10"
    >
      {/* MASSIVE BACKGROUND TEXT */}
      <div className="absolute inset-0 flex flex-col items-center justify-start mt-20 pointer-events-none select-none z-0 opacity-10">
        <h1 className="text-[20vw] font-black leading-[0.8] tracking-tighter text-[#8b949e] font-heading whitespace-nowrap">
          TECH
        </h1>
        <h1 className="text-[20vw] font-black leading-[0.8] tracking-tighter text-[#8b949e] font-heading whitespace-nowrap">
          STACK
        </h1>
      </div>

      {/* HEADER WITH AVATAR */}
      <div className="flex flex-col items-center mb-16 relative z-10 w-full mt-10">
         <motion.div 
           initial={{ opacity: 0, y: -80 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="w-full max-w-[500px] md:max-w-[600px] mb-6 flex justify-center"
         >
            <img src="/avatars/skills-avatar.webp" alt="Skills Avatar" className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }} />
         </motion.div>
      </div>

      <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        <div className="mb-10">
          <SectionLabel label="Expertise" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          {CATEGORIES.map((cat, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={cat.name}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                style={{
                  borderBottom: '1px solid #30363d',
                  padding: 'clamp(24px, 4vw, 40px) 0',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* ── Large Typography Header ── */}
                <motion.h2
                  animate={{
                    color: isActive ? '#c9d1d9' : '#484f58',
                    x: isActive ? 10 : 0, // slight slide indicating focus
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-body)', // using body font for cleaner modern look
                    fontWeight: 200, // very thin
                    fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                    lineHeight: 1,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {cat.name}
                </motion.h2>

                {/* ── Accordion Content ── */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      {/* Inner wrapper for padding to ensure smooth height animation */}
                      <div
                        style={{
                          paddingTop: '32px',
                          paddingBottom: '8px',
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '12px',
                          paddingLeft: '10px' // aligns with the slid-over header
                        }}
                      >
                        {cat.skills.map((skill) => (
                          <SkillPill key={skill.label} {...skill} />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
