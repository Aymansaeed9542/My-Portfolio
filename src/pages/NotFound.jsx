import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0D1117] overflow-hidden px-4">
      {/* Background Error Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 opacity-10">
        <h1 className="text-[30vw] font-black leading-none tracking-tighter text-[#ff7b72] font-heading whitespace-nowrap">
          404
        </h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center max-w-lg"
      >
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 shadow-2xl w-full relative">
          <div className="absolute top-0 left-0 w-full bg-[#0d1117] rounded-t-xl border-b border-[#30363d] px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            <span className="ml-3 text-xs font-mono text-[#ff7b72]">error_404.tsx</span>
          </div>

          <div className="mt-8 font-mono text-sm md:text-base text-[#c9d1d9] space-y-4">
            <p>
              <span className="text-[#ff7b72]">throw</span> <span className="text-[#ff7b72]">new</span> <span className="text-[#d2a8ff]">Error</span>(<span className="text-[#a5d6ff]">"Page Not Found"</span>);
            </p>
            <p className="text-[#8b949e] text-xs">
              // The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#238636] hover:bg-[#2ea043] text-white font-mono text-sm rounded-md transition-colors shadow-lg border border-[rgba(255,255,255,0.1)]"
            >
              <span>cd /home</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
