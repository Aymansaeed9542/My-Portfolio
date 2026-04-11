import React from 'react';
import { motion } from 'framer-motion';
import RotatingText from '../RotatingText/RotatingText';
import ProfileCard from '../ProfileCard/ProfileCard';
import portfolioImage from '../../assets/avatar2.jpeg';

const CV_URL = '/cv.pdf';
const GITHUB_URL = 'https://github.com/AymanSaeed';

/* ─── Shared animation config ─── */
const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes statusPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.5); }
          50%       { box-shadow: 0 0 0 5px rgba(52, 211, 153, 0); }
        }

        .hero-spatial {
          position: relative;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 80px 16px;
        }

        /* The stroke-only text */
        .hero-bg-text {
          font-size: clamp(8rem, 25vw, 25rem);
          font-family: var(--font-heading);
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.04);
          color: transparent;
          margin: 0;
          white-space: nowrap;
          line-height: 1;
        }
          
        /* Orbit elements wrapper */
        .orbit-container {
          position: relative;
          z-index: 10;
          width: clamp(240px, 40vw, 320px);
          max-width: 100%;
        }

        @media (max-width: 1024px) {
           .orbit-desktop { display: none !important; }
           .orbit-mobile { display: flex; flex-direction: column; align-items: center; gap: 20px; margin-top: 40px; }
        }
        @media (min-width: 1025px) {
           .orbit-mobile { display: none !important; }
           .orbit-desktop { display: flex; }
        }
      `}</style>

      <section id="home" className="hero-spatial">

        {/* ── MASSIVE BACKGROUND TEXT (SPATIAL) ── */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 0, width: '100%', overflow: 'hidden' }}>
           <motion.div 
             animate={{ x: ['0%', '-50%'] }} 
             transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
             style={{ display: 'flex', width: 'fit-content' }}
           >
             <h1 className="hero-bg-text">AYMAN SAEED AYMAN SAEED AYMAN SAEED&nbsp;</h1>
             <h1 className="hero-bg-text">AYMAN SAEED AYMAN SAEED AYMAN SAEED&nbsp;</h1>
           </motion.div>
        </div>

        {/* ── CENTRAL ANCHOR (Profile Card) ── */}
        <div className="orbit-container">
          <motion.div
             initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
             animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
             transition={{ duration: 1.2, ease: EASE }}
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
              style={{ width: '100%', margin: '0 auto' }}
            />
          </motion.div>

          {/* ── DESKTOP ORBITAL ELEMENTS ── */}
          {/* Center Left: Status */}
          <motion.div 
             className="orbit-desktop"
             initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, ease: EASE, duration: 1 }}
             style={{ position: 'absolute', top: '15%', right: 'calc(100% + 30px)', pointerEvents: 'none' }}
          >
             <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}>
               <StatusBadge />
             </motion.div>
          </motion.div>

          {/* Center Right: Building Text */}
          <motion.div 
             className="orbit-desktop"
             initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, ease: EASE, duration: 1 }}
             style={{ position: 'absolute', top: '50%', left: 'calc(100% + 40px)', transform: 'translateY(-50%)', pointerEvents: 'auto', zIndex: 20 }}
          >
             <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}>
               <RotatingFocus />
             </motion.div>
          </motion.div>

          {/* Bottom Center: Action Buttons */}
          <motion.div 
             className="orbit-desktop"
             initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, ease: EASE, duration: 1 }}
             style={{ position: 'absolute', top: 'calc(100% + 30px)', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'auto', zIndex: 20 }}
          >
             <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}>
               <ActionButtons />
             </motion.div>
          </motion.div>
        </div>

        {/* ── MOBILE ELEMENTS (Stack instead of Orbit) ── */}
        <div className="orbit-mobile" style={{ zIndex: 10 }}>
           <StatusBadge />
           <RotatingFocus />
           <ActionButtons />
        </div>

        {/* ── BIO TEXT ── */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 1.6, ease: EASE }}
          style={{
            marginTop: '120px',
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 'max(14px, 0.9vw)',
            lineHeight: 1.8,
            color: '#888',
            maxWidth: '500px',
            textAlign: 'center',
            zIndex: 10,
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}
        >
          Senior full stack developer specialising in Next.js & Node.js — crafting fast,
          minimalist digital experiences with pixel-perfect aesthetics.
        </motion.p>

      </section>
    </>
  );
}

/* ── SMALL COMPONENTS (So they can be reused in Desktop/Mobile layouts) ── */

const StatusBadge = () => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px',
    borderRadius: '999px', fontSize: '10px', fontFamily: 'var(--font-body)',
    fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
    color: '#888', border: '1px solid rgba(255,255,255,0.05)',
    background: 'rgba(10,10,10,0.4)', backdropFilter: 'blur(10px)'
  }}>
    <span style={{
      width: '6px', height: '6px', borderRadius: '50%', background: '#34d399',
      flexShrink: 0, animation: 'statusPulse 2s ease-in-out infinite',
    }} />
    System_Online
  </div>
);

const RotatingFocus = () => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: '12px',
    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)',
    padding: '8px 16px', borderRadius: '16px', backdropFilter: 'blur(10px)',
    fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: '#666'
  }}>
    <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Executing</span>
    <span style={{ display: 'inline-block', width: '150px', overflow: 'hidden' }}>
      <RotatingText
        texts={['Full Stack Protocol', 'Next.js Interface', 'Node.js Backend', 'Modern UIs']}
        mainClassName="text-white font-semibold tracking-wider text-[11px] uppercase whitespace-nowrap"
        staggerFrom="last"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '-100%', opacity: 0 }}
        staggerDuration={0.015}
        transition={{ type: 'spring', damping: 28, stiffness: 380 }}
        rotationInterval={2500}
      />
    </span>
  </div>
);

const ActionButtons = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <motion.a
        href={CV_URL} download
        whileHover={{ scale: 1.05, borderColor: '#666', color: '#fff', background: 'rgba(255,255,255,0.05)' }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px',
          borderRadius: '999px', border: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(10,10,10,0.6)', color: '#aaa', fontFamily: 'var(--font-body)',
          fontWeight: 400, fontSize: '12px', letterSpacing: '0.05em', textDecoration: 'none',
          backdropFilter: 'blur(10px)', transition: 'all 0.3s'
        }}
      >
        Download_Core
      </motion.a>
      <motion.a
        href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
        aria-label="GitHub Profile"
        whileHover={{ scale: 1.05, borderColor: '#666', color: '#fff', background: 'rgba(255,255,255,0.05)' }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '42px', height: '42px', borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(10,10,10,0.6)',
          color: '#aaa', textDecoration: 'none', backdropFilter: 'blur(10px)', transition: 'all 0.3s'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12"/>
        </svg>
      </motion.a>
    </div>
  );
};
