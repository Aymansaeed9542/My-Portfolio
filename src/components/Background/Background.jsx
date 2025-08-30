import React from "react";

export default function Background() {
    return (
        <>
            {/* Animated background gradient */}
            <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none"></div>

            {/* Animated particles */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-pulse"
                        style={{
                            left: `${20 + i * 30}%`,
                            top: `${10 + i * 20}%`,
                            animationDelay: `${i * 0.5}s`,
                        }}
                    >
                        <div className="w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                    </div>
                ))}
            </div>
        </>
    );
}
