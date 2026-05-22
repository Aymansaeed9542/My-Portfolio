import React from 'react';
import { SiGithub, SiX } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0d1117] border-t border-[#30363d] py-12 px-4 md:px-8 relative z-20 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright & Logo */}
        <div className="flex flex-col items-center md:items-start gap-2">
           <div className="text-lg flex items-center gap-1">
             <span className="text-[#8b949e] font-light font-mono tracking-tighter">{'<'}</span>
             <span 
               className="text-[#c9d1d9] tracking-wide" 
               style={{ fontFamily: '"Saira Stencil One", sans-serif', letterSpacing: '0.05em', fontWeight: 'normal' }}
             >
               AymanSaeed
             </span>
             <span className="text-[#8b949e] font-light font-mono tracking-tighter">{'/>'}</span>
           </div>
           <p className="text-xs font-mono text-[#8b949e]">
             &copy; {currentYear} Ayman Saeed. All rights reserved.
           </p>
        </div>

        {/* Center: Quote */}
        <div className="hidden md:flex text-center">
           <p className="text-xs font-mono text-[#8b949e] italic">
             <span className="text-[#58a6ff]">"</span>
             Building digital experiences with clean architecture.
             <span className="text-[#58a6ff]">"</span>
           </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-4">
           <SocialLink href="https://github.com/Aymansaeed9542" Icon={SiGithub} label="GitHub" />
           <SocialLink href="https://www.linkedin.com/in/ayman-khodier/" Icon={FaLinkedin} label="LinkedIn" />
           <SocialLink href="https://x.com/Aymans_official" Icon={SiX} label="X (Twitter)" />
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, Icon, label }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#161b22] border border-[#30363d] text-[#8b949e] hover:text-[#58a6ff] hover:border-[#58a6ff] transition-colors"
    >
      <Icon size={16} />
    </a>
  );
}
