import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SiReact, SiNextdotjs, SiNodedotjs, SiGit } from 'react-icons/si';
import { FaLaptopCode, FaGlobeAfrica, FaUniversity } from 'react-icons/fa';
import SectionLabel from '../SectionLabel/SectionLabel';

/* ─────────────────────────────────────────────────────────
   ScrollStackCard
   Each card sticks as you scroll, and the previous card
   scales down slightly creating a depth-stacking effect.
   ───────────────────────────────────────────────────────── */
function ScrollStackCard({ children, index, total }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  /* Card scales down as you scroll past it (only for non-last cards) */
  const isLast = index === total - 1;
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    isLast ? [0.94, 1, 1, 1] : [0.94, 1, 0.92, 0.88]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.8, 1],
    isLast ? [0, 1, 1, 1] : [0, 1, 1, 0.5]
  );
  const y = useTransform(scrollYProgress, [0, 0.25], [60, 0]);

  /* All cards stick at the exact same position so they perfectly overlap */
  const stickyTop = 100;

  return (
    <div
      ref={ref}
      style={{
        position: 'sticky',
        top: `${stickyTop}px`,
        marginBottom: '16px',
        zIndex: index + 1,
        /* Each card needs enough scroll room to trigger the effect */
        height: 'auto',
      }}
    >
      <motion.div
        style={{ scale, opacity, y }}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
      >
        <div
          style={{
            borderRadius: '24px',
            background: '#0c0c0c',
            border: '1px solid #1c1c1c',
            padding: '28px 32px',
            overflow: 'hidden',
            position: 'relative',
            minHeight: '160px',
            /* Subtle top tint so stacked cards feel layered */
            boxShadow: `0 -1px 0 rgba(255,255,255,0.03), 0 24px 60px rgba(0,0,0,0.5)`,
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Card contents ─── */
const CARDS = [
  {
    id: 'bio',
    render: () => (
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', height: '100%' }}>
        <div>
          <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 100, color: '#f0f0f0', marginBottom: '8px', lineHeight: 1.2, fontFamily: 'var(--font-heading)' }}>
            DEVELOPER<br />BY NATURE.
          </h3>
          <p style={{ color: '#555', fontSize: '13px', lineHeight: 1.75, fontFamily: 'var(--font-body)', maxWidth: '400px' }}>
            Full stack developer building fast, beautiful, and intuitive web apps — always learning, always shipping.
          </p>
        </div>
        <FaLaptopCode size={56} color="#1c1c1c" style={{ flexShrink: 0 }} />
      </div>
    ),
  },
  {
    id: 'location',
    render: () => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '16px',
          background: '#111', border: '1px solid #1e1e1e',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <FaGlobeAfrica size={28} color="#333" />
        </div>
        <div>
          <p style={{ fontSize: '10px', color: '#333', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '4px', fontFamily: 'var(--font-body)' }}>Location</p>
          <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 300, color: '#fff', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
            EGYPT
          </h3>
          <p style={{ color: '#333', fontSize: '12px', marginTop: '6px', fontFamily: 'var(--font-body)' }}>Open to remote worldwide</p>
        </div>
      </div>
    ),
  },
  {
    id: 'education',
    render: () => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '16px',
          background: '#111', border: '1px solid #1e1e1e',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <FaUniversity size={26} color="#333" />
        </div>
        <div>
          <p style={{ fontSize: '10px', color: '#333', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '4px', fontFamily: 'var(--font-body)' }}>Education</p>
          <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 300, color: '#fff', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
            CS STUDENT
          </h3>
          <p style={{ color: '#333', fontSize: '12px', marginTop: '6px', fontFamily: 'var(--font-body)' }}>Always building on the side</p>
        </div>
      </div>
    ),
  },
  {
    id: 'stack',
    render: () => (
      <div>
        <p style={{ fontSize: '10px', color: '#333', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '16px', fontFamily: 'var(--font-body)' }}>
          Core Stack
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {[
            { Icon: SiReact,    label: 'React',   color: '#61DAFB' },
            { Icon: SiNextdotjs, label: 'Next.js', color: '#ffffff' },
            { Icon: SiNodedotjs, label: 'Node.js', color: '#6DA55F' },
            { Icon: SiGit,      label: 'Git',     color: '#F05032' },
          ].map(({ Icon, label, color }) => (
            <motion.span
              key={label}
              whileHover={{ borderColor: color, color, scale: 1.05 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '8px 14px', borderRadius: '999px',
                border: '1px solid #1e1e1e', background: '#0d0d0d',
                color: '#3a3a3a', fontSize: '13px',
                fontFamily: 'var(--font-body)', fontWeight: 500,
                transition: 'color 0.2s, border-color 0.2s',
                cursor: 'default',
              }}
            >
              <Icon size={15} />
              {label}
            </motion.span>
          ))}
        </div>
      </div>
    ),
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        width: '100%',
        paddingTop: '80px',
        paddingBottom: '40px',
        paddingLeft: 'clamp(16px, 4vw, 32px)',
        paddingRight: 'clamp(16px, 4vw, 32px)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <SectionLabel label="About Me" />

        {/* Scroll Stack — each card stacks on top of the previous */}
        <div style={{ position: 'relative' }}>
          {CARDS.map((card, i) => (
            <ScrollStackCard key={card.id} index={i} total={CARDS.length}>
              {card.render()}
            </ScrollStackCard>
          ))}
        </div>
      </div>
    </section>
  );
}
