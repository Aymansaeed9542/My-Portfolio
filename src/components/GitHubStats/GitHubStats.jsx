import React from 'react';
import { motion } from 'framer-motion';

export default function GitHubStats() {
  const username = "AymanSaeed9542";
  
  // Customizing the cards to match the portfolio's dark theme
  const themeParams = "&theme=transparent&hide_border=true&title_color=58a6ff&text_color=c9d1d9&icon_color=3fb950&bg_color=161b22";
  
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true${themeParams}`;
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact${themeParams}`;

  return (
    <div className="w-full flex flex-col items-center mt-12 mb-12">
      <div className="flex items-center gap-3 mb-8">
         <span className="w-3 h-3 rounded-full bg-[#58a6ff] animate-pulse"></span>
         <h2 className="text-xl md:text-3xl font-mono text-[#c9d1d9] font-light tracking-tight uppercase">
           GitHub Activity
         </h2>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center gap-6 px-4 md:px-0 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden shadow-2xl hover:border-[#58a6ff] transition-colors p-4 flex justify-center"
        >
          <img src={statsUrl} alt={`${username} GitHub Stats`} className="w-full h-auto max-w-[400px] object-contain" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden shadow-2xl hover:border-[#58a6ff] transition-colors p-4 flex justify-center"
        >
          <img src={langsUrl} alt={`${username} Top Languages`} className="w-full h-auto max-w-[400px] object-contain" />
        </motion.div>
      </div>
    </div>
  );
}
