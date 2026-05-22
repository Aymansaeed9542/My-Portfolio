import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    '> initializing system...',
    '> connecting to server...',
    '> loading assets...',
    '> compiling components...',
    '> system.online = true'
  ];

  useEffect(() => {
    // Sequence through text
    const interval = setInterval(() => {
      setTextIndex(prev => {
        if (prev < texts.length - 1) return prev + 1;
        return prev;
      });
    }, 400);

    // Hide preloader after 2.5s
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d1117] border-b border-[#30363d]"
        >
          <div className="flex flex-col items-start w-[300px] h-[150px]">
            {texts.slice(0, textIndex + 1).map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-mono text-sm mb-2"
                style={{
                   color: i === texts.length - 1 ? '#3fb950' : '#8b949e'
                }}
              >
                {text}
              </motion.div>
            ))}
            {textIndex < texts.length - 1 && (
              <motion.div 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-3 h-4 bg-[#c9d1d9] mt-2"
              ></motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
