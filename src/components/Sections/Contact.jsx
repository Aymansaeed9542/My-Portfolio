import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);

  /* ── Parallax for the massive background text ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["60%", "-10%"]);
  
  /* ── Magnetic Glow Logic ── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const [isHoveringArea, setIsHoveringArea] = useState(false);

  function handleMouseMove(e) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText('aymansaeed9542@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  /* ── Real-time Clock for "Futuristic HUD" feel ── */
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Cairo',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
      });
      setTime(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="contact" 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHoveringArea(true)}
      onMouseLeave={() => setIsHoveringArea(false)}
      style={{ 
        position: 'relative', 
        width: '100%', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        overflow: 'hidden', 
        background: '#020202', // Very deep black
        borderTop: '1px solid rgba(255,255,255,0.03)'
      }}
    >
      
      {/* ── Interactive Magnetic Glow Orb ── */}
      <motion.div 
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          x: glowX, y: glowY,
          translateX: '-50%', translateY: '-50%',
          opacity: isHoveringArea ? 1 : 0,
          zIndex: 0,
          transition: 'opacity 0.5s'
        }}
      />

      {/* ── Massive Background Typography (Parallax) ── */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          top: '30%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          y: yText, 
          whiteSpace: 'nowrap', 
          pointerEvents: 'none', 
          zIndex: 0 
        }}
      >
        <h1 style={{ 
          fontSize: 'clamp(5rem, 20vw, 25rem)', 
          fontWeight: 900, 
          fontFamily: 'var(--font-heading)', 
          color: 'rgba(255,255,255,0.02)', 
          margin: 0, 
          textTransform: 'uppercase', 
          letterSpacing: '-0.05em' 
        }}>
          HELLO
        </h1>
      </motion.div>

      {/* ── Main Interactive Contact Form ── */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.05)',
            padding: '8px 16px',
            borderRadius: '999px',
            backdropFilter: 'blur(10px)',
            marginBottom: '40px'
          }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 10px #34d399', animation: 'pulse 2s infinite' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', color: '#aaa', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>
            Available for new opportunities
          </span>
        </motion.div>
        
        {/* The Clickable Email "Node" */}
        <motion.button 
           onClick={handleCopy}
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           style={{
             background: 'transparent', border: 'none', outline: 'none', cursor: 'none', /* Use our custom magnetic cursor */
             position: 'relative', padding: '0 20px'
           }}
        >
          <motion.div
            animate={{
              color: copied ? '#34d399' : '#f5f5f7',
              textShadow: copied ? '0 0 40px rgba(52, 211, 153, 0.5)' : '0 0 0px rgba(255,255,255,0)'
            }}
            transition={{ duration: 0.3 }}
            style={{
              fontSize: 'clamp(1rem, 5.5vw, 4rem)',
              fontWeight: 200,
              fontFamily: 'var(--font-body)',
              letterSpacing: '-0.02em',
              borderBottom: '2px solid',
              borderColor: copied ? '#34d399' : 'rgba(255,255,255,0.2)',
              paddingBottom: '8px',
              transition: 'border-color 0.3s'
            }}
          >
            {copied ? 'COPIED TO CLIPBOARD' : 'aymansaeed9542@gmail.com'}
          </motion.div>
        </motion.button>
      </div>

      {/* ── Futuristic HUD Footer ── */}
      <div 
        style={{ 
          position: 'absolute', 
          bottom: '0', 
          width: '100%', 
          padding: 'clamp(24px, 4vw, 48px)', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end', 
          zIndex: 1,
          borderTop: '1px solid rgba(255,255,255,0.03)'
        }}
      >
        {/* Left Side: Socials */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <motion.a 
            href="https://github.com/AymanSaeed9542" target="_blank" rel="noopener noreferrer"
            whileHover={{ color: '#fff', y: -4 }} 
            style={{ color: '#555', transition: 'color 0.2s', cursor: 'none' }}
          >
            <SiGithub size={24} />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/ayman-khodier" target="_blank" rel="noopener noreferrer"
            whileHover={{ color: '#0A66C2', y: -4 }} 
            style={{ color: '#555', transition: 'color 0.2s', cursor: 'none' }}
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>
        
        {/* Right Side: Local Time & Signature */}
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: 0, fontSize: '10px', color: '#555', fontFamily: 'var(--font-body)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            LOCAL TIME (CAIRO)
          </p>
          <p style={{ margin: '4px 0 12px', fontSize: '14px', color: '#bbb', fontFamily: 'var(--font-body)', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>
            {time}
          </p>
          <p style={{ margin: 0, fontSize: '10px', color: '#333', fontFamily: 'var(--font-body)', letterSpacing: '0.1em' }}>
            AYMAN SAEED © 2026
          </p>
        </div>
      </div>
    </section>
  );
}
