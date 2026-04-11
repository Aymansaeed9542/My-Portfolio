import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * RevealOnScroll — 3 variants:
 *  "fade-up"  (default) — one-shot animates when element enters viewport
 *  "scrub"              — opacity/y linked to actual scroll position
 *  "stagger"            — cascades children with delay
 */
export default function RevealOnScroll({
  children,
  variant = 'fade-up',
  delay = 0,
  yOffset = 60,
  duration = 1.1,
  className = '',
  staggerDelay = 0.15,
}) {
  const ref = useRef(null);

  /* ── SCRUB variant: tied to scroll position ── */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const scrubOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scrubY = useTransform(scrollYProgress, [0, 0.5], [yOffset, 0]);

  if (variant === 'scrub') {
    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ opacity: scrubOpacity, y: scrubY }}
      >
        {children}
      </motion.div>
    );
  }

  /* ── STAGGER variant: cascade children ── */
  if (variant === 'stagger') {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: staggerDelay, delayChildren: delay },
          },
        }}
      >
        {React.Children.map(children, (child, i) =>
          React.isValidElement(child) ? (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: yOffset, filter: 'blur(8px)' },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {child}
            </motion.div>
          ) : child
        )}
      </motion.div>
    );
  }

  /* ── FADE-UP variant (default): one-shot on viewport enter ── */
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

