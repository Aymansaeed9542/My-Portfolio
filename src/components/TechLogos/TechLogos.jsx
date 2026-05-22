import React from 'react';
import { LogoLoop } from '../LogoLoop/LogoLoop';
import {
  SiNextdotjs, SiNodedotjs, SiTypescript, SiJavascript,
  SiMongodb, SiPostgresql, SiTailwindcss, SiDocker,
  SiPrisma, SiGraphql, SiExpress, SiRedux, SiGit, SiGithub, SiReact
} from 'react-icons/si';

const ICON_SIZE = 52;
const techs = [
  { Icon: SiReact,       color: '#61DAFB' },
  { Icon: SiNextdotjs,   color: '#ffffff' },
  { Icon: SiNodedotjs,   color: '#6DA55F' },
  { Icon: SiTypescript,  color: '#3178C6' },
  { Icon: SiJavascript,  color: '#F7DF1E' },
  { Icon: SiMongodb,     color: '#47A248' },
  { Icon: SiPostgresql,  color: '#316192' },
  { Icon: SiTailwindcss, color: '#38BDF8' },
  { Icon: SiGit,         color: '#F05032' },
  { Icon: SiGithub,      color: '#ffffff' },
  { Icon: SiDocker,      color: '#0db7ed' },
  { Icon: SiPrisma,      color: '#ffffff' },
  { Icon: SiGraphql,     color: '#E535AB' },
  { Icon: SiExpress,     color: '#cccccc' },
  { Icon: SiRedux,       color: '#764ABC' },
];

const logoItems = techs.map(({ Icon, color }) => ({
  node: (
    /* bare icon — no box, no text, no background */
    <span style={{ display: 'inline-flex', alignItems: 'center', color: '#3a3a3a', transition: 'color 0.2s ease' }}
      onMouseEnter={e => { e.currentTarget.style.color = color; }}
      onMouseLeave={e => { e.currentTarget.style.color = '#3a3a3a'; }}
    >
      <Icon size={40} />
    </span>
  )
}));

export default function TechLogos() {
  return (
    <div style={{ width: '100%', padding: '0 0 40px', marginTop: '-20px', position: 'relative' }}>
      <style>{`
        /* kill any list-style or extra dots inside LogoLoop */
        .logoloop-list { list-style: none !important; padding: 0 !important; margin: 0 !important; }
        .logoloop-list li { list-style: none !important; }
        .logoloop-list li::before, .logoloop-list li::marker { display: none !important; content: none !important; }
      `}</style>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Side fade masks */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', zIndex: 2, background: 'linear-gradient(to right, #050505, transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', zIndex: 2, background: 'linear-gradient(to left, #050505, transparent)', pointerEvents: 'none' }} />

        <LogoLoop
          logos={logoItems}
          speed={25}
          gap={40}
          logoHeight={60}
          pauseOnHover={false}
          className="logoloop-list"
        />
      </div>
    </div>
  );
}
