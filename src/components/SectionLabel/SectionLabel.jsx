import React from 'react';
import { motion } from 'framer-motion';

/**
 * Animated section label — shows a small uppercase tag above
 * each section heading, with an animated underline reveal.
 */
export default function SectionLabel({ label, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        gap: '8px',
        marginBottom: '48px',
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '10px',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#444',
        }}
      >
        {/* Left line */}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'inline-block',
            width: '32px',
            height: '1px',
            background: '#333',
            transformOrigin: 'left center',
          }}
        />
        {label}
        {/* Right line */}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'inline-block',
            width: '32px',
            height: '1px',
            background: '#333',
            transformOrigin: 'right center',
          }}
        />
      </span>
    </motion.div>
  );
}
