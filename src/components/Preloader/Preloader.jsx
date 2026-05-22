import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Randomly increase progress
      current += Math.floor(Math.random() * 15) + 2;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        // Wait a little bit at 100% before completing
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 600); 
      }
      setProgress(current);
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      key="preloader"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d1117] text-[#c9d1d9] font-mono"
    >
      <div className="flex flex-col items-center w-full max-w-[280px] px-6">
        
        {/* Animated Logo / Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="mb-10"
        >
          <div className="w-16 h-16 border border-[#30363d] rounded-lg flex items-center justify-center relative shadow-[0_0_30px_rgba(88,166,255,0.1)]">
             <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
               className="w-6 h-6 bg-[#58a6ff] rounded-sm"
             ></motion.div>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-[#161b22] rounded-full overflow-hidden mb-4 border border-[#30363d]/50">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#58a6ff] to-[#3fb950] relative"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          >
             <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </motion.div>
        </div>

        {/* Status Text & Percentage */}
        <div className="flex items-center justify-between w-full text-[11px] font-mono uppercase tracking-wider">
           <span className="text-[#8b949e] flex items-center gap-2">
             {progress < 100 ? (
               <>
                 <span className="w-1.5 h-1.5 rounded-full bg-[#d29922] animate-pulse"></span>
                 Loading Assets...
               </>
             ) : (
               <>
                 <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950]"></span>
                 System Online
               </>
             )}
           </span>
           <span className="text-[#c9d1d9] font-bold">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
