import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaLaptopCode } from 'react-icons/fa';
import SectionLabel from '../SectionLabel/SectionLabel';

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
    accent: '#1a1a2e',
    glowColor: 'rgba(99, 102, 241, 0.2)',
    year: '2024',
    status: 'Live',
    statusColor: '#34d399',
    github: 'https://github.com/AymanSaeed',
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
    accent: '#0d1117',
    glowColor: 'rgba(56, 189, 248, 0.2)',
    year: '2025',
    status: 'Live',
    statusColor: '#34d399',
    github: 'https://github.com/AymanSaeed',
    live: '#',
  },
  {
    id: 3,
    title: 'Portfolio',
    subtitle: 'This Site',
    description: 'A dark-mode portfolio built with React + Vite, featuring Lenis smooth scroll and interactive physics-based UI elements.',
    tags: [
      { Icon: SiReact, label: 'React', color: '#61DAFB' },
      { Icon: SiTailwindcss, label: 'Tailwind', color: '#38BDF8' },
    ],
    accent: '#050505',
    glowColor: 'rgba(96, 218, 251, 0.15)',
    year: '2026',
    status: 'Building',
    statusColor: '#f59e0b',
    github: 'https://github.com/AymanSaeed',
    live: '#',
  },
  {
    id: 4, title: 'Project IV', subtitle: 'Coming Soon', description: 'A massive upcoming full-stack application currently in stealth mode.',
    tags: [], accent: '#111', glowColor: 'rgba(255,255,255,0.05)', year: 'Idea', status: 'Planning', statusColor: '#666', github: '#', live: '#'
  },
  {
    id: 5, title: 'Project V', subtitle: 'Coming Soon', description: 'Placeholder for a future creative software engineering masterpiece.',
    tags: [], accent: '#111', glowColor: 'rgba(255,255,255,0.05)', year: 'Idea', status: 'Planning', statusColor: '#666', github: '#', live: '#'
  },
  {
    id: 6, title: 'Project VI', subtitle: 'Coming Soon', description: 'Space reserved to showcase future scaling solutions and system designs.',
    tags: [], accent: '#111', glowColor: 'rgba(255,255,255,0.05)', year: 'Idea', status: 'Planning', statusColor: '#666', github: '#', live: '#'
  },
  {
    id: 7, title: 'Project VII', subtitle: 'Coming Soon', description: 'The final allocated slot for the 2026-2027 development roadmap.',
    tags: [], accent: '#111', glowColor: 'rgba(255,255,255,0.05)', year: 'Idea', status: 'Planning', statusColor: '#666', github: '#', live: '#'
  },
];

/* ─── Individual Hover & 3D Card ─── */
function ProjectCard({ project }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 35 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 35 });
  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  function onMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
        position: 'relative',
        borderRadius: '24px',
        background: '#0a0a0a',
        border: '1px solid #1c1c1c',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '24px',
        width: 'clamp(280px, 70vw, 400px)', /* Responsive width! */
        minHeight: '440px',
        flexShrink: 0,
        overflow: 'hidden',
        transition: 'border-color 0.3s ease',
      }}
      whileHover={{ borderColor: '#2e2e2e' }}
    >
      {/* ── Follow Glow ── */}
      <motion.div style={{
        position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none', zIndex: 0,
        background: `radial-gradient(circle at ${glowX} ${glowY}, ${project.glowColor}, transparent 50%)`,
      }} />

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#555', fontFamily: 'var(--font-body)' }}>
            {project.year}
          </span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: project.statusColor, fontFamily: 'var(--font-body)',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: project.statusColor,
              boxShadow: project.status === 'Live' ? `0 0 8px ${project.statusColor}` : 'none',
              animation: project.status === 'Live' ? 'pulse 2s infinite' : 'none',
            }} />
            {project.status}
          </span>
        </div>

        <h3 style={{ margin: 0, fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 100, color: '#f0f0f0', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
          {project.title}
        </h3>
        <p style={{ margin: '8px 0 16px', fontSize: '11px', color: '#666', fontFamily: 'var(--font-body)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
          {project.subtitle}
        </p>
        <p style={{ margin: 0, fontSize: '14px', color: '#888', lineHeight: 1.8, fontFamily: 'var(--font-body)', fontWeight: 300 }}>
          {project.description}
        </p>
      </div>

      {/* ── Footer ── */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {project.tags.length > 0 ? (
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {project.tags.map(({ Icon, label, color }) => (
              <span key={label} style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '11px', fontFamily: 'var(--font-body)', fontWeight: 500,
                color: '#444', padding: '6px 12px',
                borderRadius: '999px', border: '1px solid #1a1a1a', background: '#0e0e0e',
              }}>
                <Icon size={12} color={color} />
                {label}
              </span>
            ))}
          </div>
        ) : (
          <div style={{ height: '30px' }} /> /* Placeholder for missing tags */
        )}

        {/* Links */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05, color: '#fff', borderColor: '#444' }} whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontSize: '12px', color: '#666', padding: '8px 16px',
              borderRadius: '999px', border: '1px solid #222', background: '#0a0a0a', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontWeight: 500, transition: 'all 0.2s',
            }}>
            GitHub
          </motion.a>
          <motion.a href={project.live} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05, color: '#fff', borderColor: '#444' }} whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontSize: '12px', color: '#666', padding: '8px 16px',
              borderRadius: '999px', border: '1px solid #222', background: '#0a0a0a', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontWeight: 500, transition: 'all 0.2s',
            }}>
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── The Main Gallery Component ─── */
export default function Projects() {
  const targetRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  /* Framer motion scroll hook targeting the tall container */
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  /* Calculate how wide the inner container is, to map scroll smoothly */
  useEffect(() => {
    const calc = () => {
      if (trackRef.current) {
        /* Total track width minus the window width (what's visible) + a little padding buffer */
        const range = trackRef.current.scrollWidth - window.innerWidth + 80;
        setScrollRange(range > 0 ? range : 0);
      }
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  /* Drive the X translation mapped heavily to the scroll! */
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <>
      <style>{`
        /* Hide scrollbars for the sticky track if it ever overflows */
        .projects-track::-webkit-scrollbar { display: none; }
        .projects-track { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      {/* 
        This section represents the "scroll duration". 
        400vh means the user has to scroll down for 4 screen-heights
        while the content sticks and moves horizontally!
      */}
      <section
        id="projects"
        ref={targetRef}
        style={{ height: '400vh', position: 'relative' }}
      >
        {/* Sticky container stays in viewport during the 400vh scroll */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div style={{ paddingLeft: 'clamp(32px, 5vw, 64px)', marginBottom: '32px' }}>
            <SectionLabel label="Selected Work" />
            <p style={{ fontFamily: 'var(--font-body)', color: '#666', fontSize: '13px', marginTop: '12px', opacity: 0.8 }}>
              Scroll to explore {PROJECTS.length} curated projects.
            </p>
          </div>

          {/* Horizontal scroll track (animated on X axis) */}
          <motion.div
            ref={trackRef}
            className="projects-track"
            style={{
              x,
              display: 'flex',
              gap: 'clamp(24px, 4vw, 40px)',
              paddingLeft: 'clamp(32px, 5vw, 64px)',
              paddingRight: 'clamp(32px, 5vw, 64px)',
              /* ensure it respects width so we can measure it accurately */
              width: 'max-content',
            }}
          >
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}

            {/* End card message to signify end of horizontal scroll */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', 
              width: 'clamp(200px, 30vw, 300px)', minHeight: '440px'
            }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#333', textAlign: 'center', lineHeight: 1.3 }}>
                MORE TO<br/>COME.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
