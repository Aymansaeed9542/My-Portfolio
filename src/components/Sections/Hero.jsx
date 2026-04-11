import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import RotatingText from '../RotatingText/RotatingText';
import BlurText from '../BlurText/BlurText';
import ProfileCard from '../ProfileCard/ProfileCard';
import portfolioImage from '../../assets/avatar.jpeg';

const CV_URL = '/cv.pdf';
const GITHUB_URL = 'https://github.com/AymanSaeed';

/* ─── Shared animation config ─── */
const EASE = [0.22, 1, 0.36, 1];

/**
 * fadeUp(delay) — standard entrance: fade + translate up + blur clear
 * Used on every text block in the Hero so they cascade naturally.
 */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.75, delay, ease: EASE },
});

/* ─── Card wrapper: blur-in from the left ─── */
const cardVariants = {
  initial: { opacity: 0, x: -40, filter: 'blur(20px)' },
  animate: {
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { duration: 1.0, delay: 0.1, ease: EASE },
  },
};

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes statusPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.5); }
          50%       { box-shadow: 0 0 0 5px rgba(52, 211, 153, 0); }
        }

        /* ── Hero responsive ── */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(80px, 10vh, 120px) clamp(20px, 5vw, 48px) clamp(60px, 8vh, 100px);
          gap: clamp(32px, 6vw, 72px);
          flex-wrap: wrap;
        }

        /* Card side */
        .hero-card-wrap {
          flex-shrink: 0;
          width: clamp(200px, 35vw, 280px);
        }

        /* Text side */
        .hero-text {
          flex: 1 1 300px;
          max-width: 520px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* Stack vertically on narrow screens */
        @media (max-width: 640px) {
          .hero-section {
            flex-direction: column;
            justify-content: center;
            padding-top: clamp(80px, 12vh, 120px);
            gap: 24px;
          }
          .hero-card-wrap { width: 100%; max-width: 220px; margin: 0 auto; }
          .hero-text { align-items: center; text-align: center; }
          .hero-bio  { text-align: center; }
          .hero-btns { justify-content: center; }
        }
      `}</style>

      <section id="home" className="hero-section">

        {/* ── LEFT: Profile Card ── */}
        <motion.div
          className="hero-card-wrap"
          variants={cardVariants}
          initial="initial"
          animate="animate"
        >
          <ProfileCard
            avatarUrl={portfolioImage}
            name="Ayman Saeed"
            title="Full Stack Developer"
            handle="aymansaeed"
            status="Available"
            contactText="Say Hello"
            showUserInfo={false}
            innerGradient="linear-gradient(145deg, rgba(20,20,20,0.95) 0%, rgba(35,35,35,0.6) 100%)"
            behindGlowColor="rgba(80, 80, 100, 0.3)"
            style={{ width: '100%' }}
          />
        </motion.div>

        {/* ── RIGHT: Text content ── */}
        <div className="hero-text">

          {/* 1 — Status badge */}
          <motion.div {...fadeUp(0.4)}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '5px 14px',
              borderRadius: '999px',
              fontSize: '10px',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#555',
              border: '1px solid #1e1e1e',
              background: 'rgba(12,12,12,0.9)',
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: '#34d399', flexShrink: 0,
                animation: 'statusPulse 2s ease-in-out infinite',
              }} />
              Available for Work
            </span>
          </motion.div>

          {/* 2 — Name (BlurText handles its own per-letter animation) */}
          <motion.h1
            {...fadeUp(0.55)}
            style={{
              margin: 0,
              fontFamily: 'var(--font-heading)',
              fontWeight: 100,
              fontSize: 'clamp(2rem, 8vw, 4.4rem)',
              letterSpacing: '-0.01em',
              color: '#f0f0f0',
              lineHeight: 1.05,
            }}
          >
            <BlurText text="AYMAN SAEED" delay={55} animateBy="letters" direction="bottom" />
          </motion.h1>

          {/* 3 — "Building X" row */}
          <motion.div
            {...fadeUp(0.75)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              color: '#555',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ whiteSpace: 'nowrap' }}>Building</span>
            {/* Fixed-width slot = prevents layout jump when text cycles */}
            <span style={{ display: 'inline-block', width: 'min(240px, 55vw)', overflow: 'hidden' }}>
              <RotatingText
                texts={['Full Stack Apps', 'Next.js Projects', 'Node.js APIs', 'REST APIs', 'Modern UIs']}
                mainClassName="px-5 py-[6px] text-[clamp(14px,2.2vw,22px)] font-semibold tracking-[0.06em] text-black bg-[#f0f0f0] border border-[#d0d0d0] rounded-[10px] whitespace-nowrap justify-center shadow-sm"
                staggerFrom="last"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                staggerDuration={0.015}
                transition={{ type: 'spring', damping: 28, stiffness: 380 }}
                rotationInterval={2500}
              />
            </span>
          </motion.div>

          {/* 4 — Bio */}
          <motion.p
            className="hero-bio"
            {...fadeUp(0.92)}
            style={{
              margin: 0,
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
              lineHeight: 1.85,
              color: '#4a4a4a',
              maxWidth: '420px',
            }}
          >
            Full stack developer specialising in Next.js &amp; Node.js — crafting fast,
            minimalist digital experiences with pixel-perfect dark mode aesthetics.
          </motion.p>

          {/* 5 — CTA Buttons */}
          <motion.div
            className="hero-btns"
            {...fadeUp(1.1)}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}
          >
            {/* Download CV */}
            <motion.a
              href={CV_URL}
              download
              whileHover={{ scale: 1.03, borderColor: '#555', color: '#fff' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '999px',
                border: '1px solid #262626',
                background: 'rgba(14,14,14,0.9)',
                color: '#888',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '13px',
                letterSpacing: '0.04em',
                textDecoration: 'none',
                transition: 'border-color 0.2s ease, color 0.2s ease',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/>
                <polyline points="9 15 12 18 15 15"/>
              </svg>
              Download CV
            </motion.a>

            {/* GitHub */}
            <motion.a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, borderColor: '#555', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub Profile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid #262626',
                background: 'rgba(14,14,14,0.9)',
                color: '#555',
                textDecoration: 'none',
                transition: 'border-color 0.2s ease, color 0.2s ease',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12"/>
              </svg>
            </motion.a>
          </motion.div>

        </div>
      </section>
    </>
  );
}
