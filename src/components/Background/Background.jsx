import React, { useState, useEffect } from "react";

export default function Background() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [time, setTime] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        const handleTimeUpdate = () => {
            setTime(Date.now() * 0.001);
        };

        window.addEventListener("mousemove", handleMouseMove);
        const timeInterval = setInterval(handleTimeUpdate, 16);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearInterval(timeInterval);
        };
    }, []);

    return (
        <>
            {/* Interactive background gradient */}
            <div 
                className="fixed inset-0 pointer-events-none transition-all duration-1000"
                style={{
                    background: `
                        radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
                        linear-gradient(${45 + Math.sin(time * 0.5) * 10}deg, rgba(168, 85, 247, 0.1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(59, 130, 246, 0.1) 100%)
                    `
                }}
            ></div>

            {/* Animated floating particles */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-pulse"
                        style={{
                            left: `${10 + i * 12}%`,
                            top: `${5 + i * 15}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${3 + i * 0.5}s`,
                        }}
                    >
                        <div 
                            className="w-32 h-32 rounded-full blur-2xl transition-all duration-1000"
                            style={{
                                background: `radial-gradient(circle, rgba(${168 + i * 20}, ${85 + i * 10}, ${247 - i * 15}, ${0.1 + i * 0.02}) 0%, transparent 70%)`,
                                transform: `translate(${Math.sin(time + i) * 20}px, ${Math.cos(time + i) * 15}px)`,
                            }}
                        ></div>
                    </div>
                ))}
            </div>

            {/* Interactive mouse follower */}
            <div
                className="fixed pointer-events-none transition-all duration-300 ease-out"
                style={{
                    left: mousePosition.x + '%',
                    top: mousePosition.y + '%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div className="w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            {/* Animated grid pattern */}
            <div 
                className="fixed inset-0 pointer-events-none opacity-5"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    transform: `translate(${Math.sin(time * 0.2) * 10}px, ${Math.cos(time * 0.2) * 5}px)`,
                }}
            ></div>

            {/* Floating orbs */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={`orb-${i}`}
                        className="absolute w-4 h-4 rounded-full"
                        style={{
                            left: `${20 + i * 20}%`,
                            top: `${30 + i * 10}%`,
                            background: `radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)`,
                            transform: `translate(${Math.sin(time * 0.8 + i) * 30}px, ${Math.cos(time * 0.6 + i) * 20}px)`,
                            animation: `pulse ${2 + i * 0.3}s ease-in-out infinite alternate`,
                            animationDelay: `${i * 0.4}s`,
                        }}
                    ></div>
                ))}
            </div>
        </>
    );
}
