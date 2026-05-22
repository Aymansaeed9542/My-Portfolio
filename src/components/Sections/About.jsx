import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 px-4 md:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
      {/* LEFT: AVATAR pointing right */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center md:justify-end relative"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] z-0 pointer-events-none">
           {/* Glowing Blob */}
           <div className="absolute inset-0 bg-[#58a6ff]/10 blur-[60px] rounded-full"></div>
           
           {/* Orbiting Code Symbols */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             className="absolute inset-0 rounded-full flex items-center justify-center"
           >
              <div className="absolute -top-4 text-[#58a6ff] opacity-50 font-mono text-3xl font-bold tracking-widest">{"{ }"}</div>
              <div className="absolute -bottom-4 text-[#3fb950] opacity-50 font-mono text-3xl font-bold tracking-widest">{"< />"}</div>
              <div className="absolute -left-4 text-[#ff7b72] opacity-50 font-mono text-3xl font-bold tracking-widest">{"[ ]"}</div>
              <div className="absolute -right-4 text-[#a5d6ff] opacity-50 font-mono text-3xl font-bold tracking-widest">{"();"}</div>
           </motion.div>

           {/* Orbiting Tech Words */}
           <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="absolute inset-10 rounded-full flex items-center justify-center"
           >
              <div className="absolute -top-2 text-[#8b949e] opacity-30 font-mono text-sm font-bold">const</div>
              <div className="absolute -bottom-2 text-[#8b949e] opacity-30 font-mono text-sm font-bold">await</div>
              <div className="absolute -left-2 text-[#8b949e] opacity-30 font-mono text-sm font-bold">return</div>
              <div className="absolute -right-2 text-[#8b949e] opacity-30 font-mono text-sm font-bold">import</div>
           </motion.div>
        </div>

        <img 
          src="/avatars/about-avatar.png" 
          alt="About Ayman" 
          className="relative z-10 max-w-[300px] md:max-w-[400px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        />
      </motion.div>

      {/* RIGHT: TEXT Terminal / IDE style */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 bg-[#161b22] border border-[#30363d] rounded-xl p-6 md:p-8 shadow-2xl relative"
      >
        <div className="absolute top-0 left-0 w-full bg-[#0d1117] rounded-t-xl border-b border-[#30363d] px-4 py-3 flex items-center gap-2">
           <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
           <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
           <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
           <span className="ml-3 text-xs font-mono text-[#8b949e]">about.md</span>
        </div>

        <div className="mt-10 font-mono text-[13px] md:text-sm leading-relaxed text-[#c9d1d9]">
           <p className="mb-4">
             <span className="text-[#ff7b72]">##</span> <span className="text-[#a5d6ff]">Developer by Nature</span>
           </p>
           <p className="mb-4">
             I am a <span className="text-[#79c0ff]">Full Stack Developer</span> building fast, beautiful, and intuitive web apps. 
             Currently based in <span className="text-[#3fb950]">Egypt</span>, but open to remote opportunities worldwide.
           </p>
           <p className="mb-4">
             <span className="text-[#ff7b72]">-</span> Education: <span className="text-[#d2a8ff]">Computer Science</span>
             <br/>
             <span className="text-[#ff7b72]">-</span> Focus: <span className="text-[#d2a8ff]">Clean Architecture, Performance, UX</span>
           </p>
           <p className="mt-8 pt-4 border-t border-[#30363d]">
             <span className="text-[#8b949e] italic">// Always learning, always shipping.</span>
           </p>
        </div>
      </motion.div>
    </section>
  );
}
