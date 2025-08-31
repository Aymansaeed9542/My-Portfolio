import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

export default function Section({ id, title, children, className = "" }) {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <section 
            ref={ref}
            id={id} 
            className={`py-20 relative ${className}`}
        >
            <div className="absolute -left-10 top-0 w-1 h-full bg-gradient-to-b from-purple-500/20 to-transparent"></div>
            
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    containerClassName="text-center"
                    textClassName="text-3xl md:text-4xl font-bold text-white mb-4 capitalize"
                >
                    {title}
                </ScrollReveal>
                {children}
            </div>
        </section>
    );
}
