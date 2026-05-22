import React from 'react';
import { motion } from 'framer-motion';

const CV_URL = '/Ayman-saeed-cv (2) (1).pdf';
const GITHUB_URL = 'https://github.com/AymanSaeed';

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#0D1117] pt-20">
      
      {/* MASSIVE BACKGROUND TEXT */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-[15vh] md:justify-center md:pt-0 pointer-events-none select-none z-0 opacity-10">
        <h1 className="text-[18vw] font-black leading-[0.8] tracking-tighter text-[#8b949e] font-heading whitespace-nowrap">
          SOFTWARE
        </h1>
        <h1 className="text-[18vw] font-black leading-[0.8] tracking-tighter text-[#8b949e] font-heading whitespace-nowrap">
          ENGINEER
        </h1>
      </div>

      {/* AVATAR - POP OUT */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex items-end justify-center h-[55vh] sm:h-[65vh] mt-10">
        <motion.img 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: EASE }}
          src="/avatars/hero-avatar.webp" 
          alt="Ayman Saeed" 
          className="h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        />
        
        {/* FLOATING IDE ELEMENTS */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: EASE }}
          className="absolute top-1/4 left-[5%] md:left-[15%] bg-[#161b22] border border-[#30363d] p-3 rounded-lg shadow-2xl backdrop-blur-md hidden sm:block z-20"
        >
          <div className="flex gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <pre className="font-mono text-xs text-[#58a6ff]">
            <code>const status = "Building";</code>
          </pre>
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: EASE }}
          className="absolute bottom-1/4 right-[5%] md:right-[15%] bg-[#161b22] border border-[#30363d] px-4 py-2 rounded-lg shadow-2xl backdrop-blur-md"
        >
          <span className="font-mono text-sm text-[#3fb950] font-bold">
            {'>'} System Online_
          </span>
        </motion.div>
      </div>

      {/* FOREGROUND TEXT AND BUTTONS */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: EASE }}
        className="relative z-20 flex flex-col items-center mt-4 px-4 text-center mb-10"
      >
        <div className="flex flex-col items-center gap-2 mb-6">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161b22] border border-[#30363d] text-xs font-mono text-[#8b949e] mb-2 shadow-sm">
             <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse"></span>
             Available for work
           </div>
           <h2 className="text-4xl md:text-6xl flex items-center gap-1 md:gap-2">
             <span className="text-[#484f58] font-light text-3xl md:text-5xl font-mono tracking-tighter">{'<'}</span>
             <span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#58a6ff] to-[#3fb950] drop-shadow-[0_0_15px_rgba(88,166,255,0.3)]" 
                style={{ fontFamily: '"Saira Stencil One", sans-serif', letterSpacing: '0.05em', fontWeight: 'normal' }}
             >
               AymanSaeed
             </span>
             <span className="text-[#484f58] font-light text-3xl md:text-5xl font-mono tracking-tighter">{'/>'}</span>
           </h2>
        </div>
        <p className="text-sm md:text-base text-[#8b949e] font-mono max-w-lg mb-8 leading-relaxed">
          <span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">role</span> = <span className="text-[#a5d6ff]">"Full Stack Developer"</span>;
          <br/><br/>
          <span className="text-[#8b949e] italic">// Crafting fast, minimalist digital experiences</span>
          <br/>
          <span className="text-[#8b949e] italic">// with Next.js, Node.js & clean architecture.</span>
        </p>
        <ActionButtons />
      </motion.div>

    </section>
  );
}

const ActionButtons = () => {
  return (
    <div className="flex items-center gap-4">
      <motion.a
        href={CV_URL} download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 rounded-md bg-[#238636] hover:bg-[#2ea043] text-white font-body font-medium text-sm transition-colors shadow-lg border border-[rgba(255,255,255,0.1)]"
      >
        Download CV
      </motion.a>
      <motion.a
        href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
        aria-label="GitHub Profile"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-12 h-12 rounded-md bg-[#21262d] hover:bg-[#30363d] border border-[#363b42] text-[#c9d1d9] transition-colors shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12"/>
        </svg>
      </motion.a>
    </div>
  );
};
