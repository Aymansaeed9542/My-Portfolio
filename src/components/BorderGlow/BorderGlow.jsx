import React, { useRef, useCallback, useEffect } from 'react';

const BorderGlow = ({
  children,
  edgeSensitivity = 30,
  glowColor = '40 80 80',
  backgroundColor = '#060010',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = ['#c084fc', '#f472b6', '#38bdf8'],
  className = '',
  style = {},
}) => {
  const containerRef = useRef(null);
  const animFrameRef = useRef(null);

  const borderGradient = colors && colors.length > 0
    ? `linear-gradient(135deg, ${colors.join(', ')})`
    : `rgba(${glowColor}, 0.6)`;

  const handleMouseMove = useCallback((e) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;
    const distLeft   = x;
    const distRight  = w - x;
    const distTop    = y;
    const distBottom = h - y;
    const minDist = Math.min(distLeft, distRight, distTop, distBottom);
    if (minDist > edgeSensitivity) { el.style.setProperty('--glow-opacity', '0'); return; }
    const intensity = (1 - minDist / edgeSensitivity) * glowIntensity;
    let angle = 0;
    if (minDist === distTop)    angle = 180;
    if (minDist === distBottom) angle = 0;
    if (minDist === distLeft)   angle = 90;
    if (minDist === distRight)  angle = 270;
    el.style.setProperty('--glow-opacity', String(intensity));
    el.style.setProperty('--glow-x', `${(x / w) * 100}%`);
    el.style.setProperty('--glow-y', `${(y / h) * 100}%`);
    el.style.setProperty('--glow-angle', `${angle}deg`);
    el.style.setProperty('--glow-spread', `${coneSpread}deg`);
  }, [edgeSensitivity, glowIntensity, coneSpread]);

  const handleMouseLeave = useCallback(() => {
    const el = containerRef.current;
    if (el) el.style.setProperty('--glow-opacity', '0');
  }, []);

  useEffect(() => {
    if (!animated || !colors || colors.length < 2) return;
    let t = 0;
    const tick = () => {
      t += 0.5;
      const el = containerRef.current;
      if (el) el.style.setProperty('--border-angle', `${t % 360}deg`);
      animFrameRef.current = requestAnimationFrame(tick);
    };
    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [animated, colors]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`.trim()}
      style={{
        position: 'relative',
        borderRadius: `${borderRadius}px`,
        background: backgroundColor,
        '--glow-opacity': 0,
        '--glow-x': '50%',
        '--glow-y': '50%',
        '--glow-angle': '0deg',
        '--glow-spread': `${coneSpread}deg`,
        '--glow-radius': `${glowRadius}px`,
        '--border-angle': '135deg',
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient border */}
      <div style={{
        position: 'absolute', inset: 0,
        borderRadius: `${borderRadius}px`,
        padding: '1.5px',
        background: animated
          ? `linear-gradient(var(--border-angle), ${colors.join(', ')})`
          : borderGradient,
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Edge glow */}
      <div style={{
        position: 'absolute', inset: 0,
        borderRadius: `${borderRadius}px`,
        opacity: 'var(--glow-opacity)',
        transition: 'opacity 0.15s ease',
        background: `radial-gradient(circle ${glowRadius * 3}px at var(--glow-x) var(--glow-y), rgba(${glowColor}, 0.5), transparent 70%)`,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};

export default BorderGlow;
