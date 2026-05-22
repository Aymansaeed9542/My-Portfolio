import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('aymansaeed9542@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Cairo',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
      });
      setTime(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="relative w-full py-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center min-h-[80vh] justify-center overflow-hidden">
      
      {/* MASSIVE BACKGROUND TEXT */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-[15vh] md:justify-center md:pt-0 pointer-events-none select-none z-0 opacity-10">
        <h1 className="text-[22vw] font-black leading-[0.8] tracking-tighter text-[#8b949e] font-heading whitespace-nowrap">
          GET IN
        </h1>
        <h1 className="text-[22vw] font-black leading-[0.8] tracking-tighter text-[#8b949e] font-heading whitespace-nowrap">
          TOUCH
        </h1>
      </div>

      {/* HEADER WITH AVATAR HOLDING IPAD */}
      <div className="flex flex-col items-center mb-12 relative w-full">
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full max-w-[400px] md:max-w-[500px] flex justify-center mt-10 mb-[-100px] pointer-events-none"
         >
            <img src="/avatars/ChatGPT Image May 22, 2026, 03_11_04 AM.png" alt="Contact Ayman" className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }} />
         </motion.div>
         
         <div className="absolute top-[60%] right-[5%] md:right-[15%] bg-[#161b22] border border-[#30363d] p-3 rounded-lg shadow-2xl backdrop-blur-md z-20">
           <pre className="font-mono text-[10px] md:text-sm text-[#a5d6ff]">
             <code>{'>'} system.connect()</code>
           </pre>
         </div>
      </div>

      {/* Main Interactive Contact Form */}
      <div className="relative z-10 flex flex-col items-center mb-24 w-full">
        <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-[#30363d] bg-[#161b22] mb-8 shadow-xl">
           <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse"></span>
           <span className="text-xs font-mono text-[#c9d1d9] uppercase tracking-wider">
             Available for new opportunities
           </span>
        </div>
        
        {/* The Clickable Email "Node" */}
        <button 
           onClick={handleCopy}
           className="relative group focus:outline-none"
        >
          <div className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-light font-body tracking-tight border-b-2 border-transparent group-hover:border-[#58a6ff] pb-2 transition-all duration-300"
               style={{ color: copied ? '#3fb950' : '#c9d1d9' }}>
            {copied ? 'COPIED TO CLIPBOARD' : 'aymansaeed9542@gmail.com'}
          </div>
        </button>
      </div>

      {/* Futuristic HUD Footer */}
      <div className="absolute bottom-0 w-full px-4 md:px-8 pb-8 pt-8 flex flex-col md:flex-row justify-between items-center md:items-end z-10 border-t border-[#30363d] mt-24">
        {/* Left Side: Socials */}
        <div className="flex gap-6 mb-6 md:mb-0">
          <a href="https://github.com/AymanSaeed9542" target="_blank" rel="noopener noreferrer"
             className="text-[#8b949e] hover:text-white transition-colors"
          >
            <SiGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/ayman-khodier" target="_blank" rel="noopener noreferrer"
             className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        
        {/* Right Side: Local Time & Signature */}
        <div className="text-center md:text-right">
          <p className="m-0 text-[10px] text-[#8b949e] font-mono tracking-widest uppercase">
            LOCAL TIME (CAIRO)
          </p>
          <p className="my-1 text-sm text-[#c9d1d9] font-mono font-bold tabular-nums">
            {time}
          </p>
          <p className="m-0 text-[10px] text-[#484f58] font-mono tracking-wider">
            AYMAN SAEED © 2026
          </p>
        </div>
      </div>
    </section>
  );
}
