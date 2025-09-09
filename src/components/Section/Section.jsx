import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function Section({ id, title, children, className = "" }) {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <section 
            ref={ref}
            id={id} 
            className={`py-20 relative ${className}`}
            aria-labelledby={`${id}-heading`}
        >
            <div className="absolute -left-10 top-0 w-1 h-full bg-gradient-to-b from-purple-500/20 to-transparent"></div>
            
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-12">
                    <h2 id={`${id}-heading`} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 capitalize relative">
                        <span className="bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent">
                            {title}
                        </span>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl scale-110 opacity-50"></div>
                    </h2>
                    {/* Subtitle accent */}
                    <div className="flex items-center justify-center space-x-2 text-gray-400 ">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
                        <span className="text-sm font-medium tracking-wider uppercase">Portfolio</span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-blue-500"></div>
                    </div>
                </div>
                {children}
            </div>
        </section>
    );
}
