import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full pt-8 pb-12 px-4 md:px-8 max-w-4xl mx-auto flex flex-col items-center">
      
      {/* TOP: AVATAR resting on the box */}
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-start pl-4 md:pl-16 relative z-20 -mb-16 sm:-mb-20 md:-mb-28 lg:-mb-32 pointer-events-none"
      >
        <img 
          src="/avatars/about-avatar.webp" 
          alt="About Ayman" 
          className="relative z-10 w-[220px] md:w-[350px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)] origin-bottom"
        />
      </motion.div>

      {/* BOTTOM: WIDE TEXT Terminal / IDE style */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#161b22] border border-[#30363d] rounded-xl p-6 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative z-10"
      >
        <div className="absolute top-0 left-0 w-full bg-[#0d1117] rounded-t-xl border-b border-[#30363d] px-4 py-3 flex items-center justify-between">
           <div className="flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
             <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
             <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
             <span className="ml-3 text-xs font-mono text-[#8b949e]">about.md</span>
           </div>
           <span className="text-[10px] font-mono text-[#484f58] hidden sm:block">utf-8</span>
        </div>

        <div className="mt-10 font-mono text-sm md:text-base leading-relaxed text-[#c9d1d9]">
           <p className="mb-6 text-lg md:text-xl">
             <span className="text-[#ff7b72]">##</span> <span className="text-[#a5d6ff] font-bold">Developer by Nature</span>
           </p>
           <p className="mb-6">
             I am a <span className="text-[#79c0ff] font-bold">Full Stack Developer</span> building fast, beautiful, and intuitive web apps. 
             Currently based in <span className="text-[#3fb950] font-bold">Egypt</span>, but open to remote opportunities worldwide.
           </p>
           <p className="mb-6 leading-loose">
             <span className="text-[#ff7b72] mr-2">{"->"}</span> <span className="text-[#8b949e]">Education:</span> <span className="text-[#d2a8ff]">Computer Science</span>
             <br/>
             <span className="text-[#ff7b72] mr-2">{"->"}</span> <span className="text-[#8b949e]">Focus:</span> <span className="text-[#d2a8ff]">Clean Architecture, Performance, User Experience</span>
           </p>
           <div className="mt-10 pt-6 border-t border-[#30363d]/50 flex items-center justify-between">
             <span className="text-[#8b949e] italic text-xs md:text-sm">// Always learning, always shipping.</span>
             <span className="w-2 h-4 bg-[#c9d1d9] animate-pulse"></span>
           </div>
        </div>
      </motion.div>
    </section>
  );
}
