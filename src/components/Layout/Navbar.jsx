import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-8 transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-8'}`}>
            <nav className="glass-panel px-8 py-3.5 rounded-full flex items-center justify-between gap-8 md:gap-16">
                <a href="#home" className="text-sm font-medium tracking-wide text-white transition-opacity hover:opacity-100">Home</a>
                <a href="#about" className="text-sm font-medium tracking-wide text-white/50 hover:text-white transition-colors duration-300">About</a>
                <a href="#projects" className="text-sm font-medium tracking-wide text-white/50 hover:text-white transition-colors duration-300">Projects</a>
                <a href="#contact" className="text-sm font-medium tracking-wide text-white/50 hover:text-white transition-colors duration-300">Contact</a>
            </nav>
        </header>
    );
}
