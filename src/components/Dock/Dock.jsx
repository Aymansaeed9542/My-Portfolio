import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const NAV_ITEMS = [
  { id: 'home', icon: FaHome, label: 'Home' },
  { id: 'about', icon: FaUser, label: 'About' },
  { id: 'skills', icon: FaCode, label: 'Skills' },
  { id: 'projects', icon: FaBriefcase, label: 'Projects' },
  { id: 'contact', icon: FaEnvelope, label: 'Contact' },
];

export default function Dock() {
  const [hovered, setHovered] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-1 md:gap-2 p-1.5 md:p-2 rounded-full bg-[#161b22]/60 backdrop-blur-xl border border-[#30363d] shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          >
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isHovered = hovered === item.id;
              
              return (
                <div 
                  key={item.id} 
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        className="absolute -top-10 px-3 py-1.5 rounded-md bg-[#0d1117] border border-[#30363d] text-[10px] font-mono text-[#c9d1d9] whitespace-nowrap shadow-xl"
                      >
                        {item.label}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => handleScroll(item.id)}
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full hover:bg-[#30363d]/50 transition-colors group relative"
                  >
                    <Icon size={18} className="text-[#8b949e] group-hover:text-[#58a6ff] transition-colors md:w-5 md:h-5" />
                    {/* Hover indicator dot */}
                    {isHovered && (
                       <motion.div layoutId="dock-indicator" className="absolute bottom-1 w-1 h-1 rounded-full bg-[#58a6ff]" />
                    )}
                  </button>
                </div>
              );
            })}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
