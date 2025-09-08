import React, { useState, useEffect } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SplitText from "../SplitText/SplitText";
import portfolioImage from "../../assets/portfolio.jpg";

export default function Hero() {
    const [ref, isVisible] = useScrollAnimation(0.1);
    const [showName, setShowName] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        // Show name first after 200ms
        const nameTimer = setTimeout(() => {
            setShowName(true);
        }, 200);

        // Show title after name appears (200ms + 800ms = 1000ms)
        const titleTimer = setTimeout(() => {
            setShowTitle(true);
        }, 1000);

        // Show image after title appears (1000ms + 800ms = 1800ms)
        const imageTimer = setTimeout(() => {
            setShowImage(true);
        }, 1800);

        return () => {
            clearTimeout(nameTimer);
            clearTimeout(titleTimer);
            clearTimeout(imageTimer);
        };
    }, []);

    const handleAnimationComplete = () => {
        console.log('Name animation completed!');
    };

    return (
        <div ref={ref} className="mb-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left side - Two-part heading */}
                <div className="flex-1 text-center lg:text-left lg:pl-8 xl:pl-12">
                    {/* First part - Name */}
                    <div className={`transition-all duration-1000 ${showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 relative text-white">
                            {showName && (
                                <SplitText
                                    text="Ayman Saeed"
                                    className="bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text animate-gradient"
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
                    
                    {/* Second part - Title */}
                    <div className={`transition-all duration-1000 ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-300 mb-4 text-center lg:text-left">
                            Computer Science Student & Software Developer
                        </h2>
                        
                        {/* Description */}
                        <div className={`transition-all duration-1000 delay-300 ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl">
                                Full-stack developer specializing in frontend technologies. 
                                Creating modern web applications with clean code and beautiful interfaces.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right side - Circular Portfolio Image */}
                <div className="flex-1 flex justify-center lg:justify-end lg:pr-8 xl:pr-12">
                    <div className={`transition-all duration-1000 ease-out ${showImage ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-blue-400 shadow-2xl">
                                <img 
                                    src={portfolioImage} 
                                    alt="Ayman Saeed Portfolio" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Gradient border effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 opacity-20 blur-sm"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
