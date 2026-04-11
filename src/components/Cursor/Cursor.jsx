import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Springs for GPU-accelerated smooth movement
  const springConfig = { damping: 28, stiffness: 350, mass: 0.1 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (!isVisible) setIsVisible(true);
      // Offset by half width to center the cursor
      // 48 (large) -> 24. 12 (small) -> 6.
      const offset = isHovering ? 24 : 6;
      cursorX.set(e.clientX - offset);
      cursorY.set(e.clientY - offset);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [isVisible, isHovering, cursorX, cursorY]);

  return (
    <>
      <style>{`
        @media (pointer: fine) { body, a, button { cursor: none !important; } }
      `}</style>
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0,
          x: cursorX, y: cursorY,
          pointerEvents: 'none', zIndex: 99999,
          mixBlendMode: 'difference',
          display: isVisible ? 'block' : 'none',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 48 : 12,
            height: isHovering ? 48 : 12,
            backgroundColor: isHovering ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)',
            border: isHovering ? '2px solid rgba(255, 255, 255, 1)' : '0px solid rgba(255, 255, 255, 0)',
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          style={{ borderRadius: '50%' }}
        />
      </motion.div>
    </>
  );
}
