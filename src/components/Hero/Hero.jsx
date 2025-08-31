import React, { useState, useEffect } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SplitText from "../SplitText/SplitText";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

export default function Hero() {
    const [ref, isVisible] = useScrollAnimation(0.1);
    const [showName, setShowName] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    useEffect(() => {
        // Show name first after 200ms
        const nameTimer = setTimeout(() => {
            setShowName(true);
        }, 200);

        // Show title after name appears (200ms + 800ms = 1000ms)
        const titleTimer = setTimeout(() => {
            setShowTitle(true);
        }, 1000);

        // Show description after title appears (1000ms + 800ms = 1800ms)
        const descTimer = setTimeout(() => {
            setShowDescription(true);
        }, 1800);

        return () => {
            clearTimeout(nameTimer);
            clearTimeout(titleTimer);
            clearTimeout(descTimer);
        };
    }, []);

    const handleAnimationComplete = () => {
        console.log('Name animation completed!');
    };

    return (
        <div ref={ref} className="text-center mb-20 container mx-auto px-4">
            <div className={`transition-all duration-1000 ${showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
                    {showName && (
                        <SplitText
                            text="Ayman Saeed"
                            className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text  animate-gradient"
                            delay={80}
                            duration={1}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 80, scale: 0.8 }}
                            to={{ opacity: 1, y: 0, scale: 1 }}
                            tag="span"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                    )}
                </h1>
            </div>
            
            <div className={`transition-all duration-1000 ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={2}
                    blurStrength={6}
                    containerClassName="text-center"
                    textClassName="text-2xl md:text-3xl font-semibold mb-6 text-gray-300"
                >
                    Computer Science Student & Software Developer
                </ScrollReveal>
            </div>
            
            <div className={`transition-all duration-1000 ${showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                    Full-stack developer specializing in frontend and backend technologies. 
                    Creating modern web applications with clean code and beautiful interfaces.
                </p>
            </div>
        </div>
    );
}
