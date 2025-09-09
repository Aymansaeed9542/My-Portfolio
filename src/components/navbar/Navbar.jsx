import React, { useState, useEffect } from "react";
import {
    Menu,
    X,
    Sparkles,
    Code2,
    Layers,
    Mail,
    User,
    Github,
} from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            // Update active link based on scroll position
            const sections = ['home', 'about', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100; // Offset for navbar height
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveLink(sections[i]);
                        break;
                    }
                }
            }
        };

        const handleMouseMove = (e) => {
            const rect = document
                .querySelector(".navbar-container")
                ?.getBoundingClientRect();
            if (rect) { 
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const navLinks = [
        { name: "Home", href: "#navbar", icon: <Sparkles size={16} /> },
        { name: "About", href: "#about", icon: <User size={16} /> },
        { name: "Projects", href: "#projects", icon: <Code2 size={16} /> },
        { name: "Contact", href: "#contact", icon: <Mail size={16} /> },
    ];

    const handleNavClick = (linkName) => {
        setActiveLink(linkName.toLowerCase());
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"
                }`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="navbar-container max-w-[900px] mx-auto px-4 relative">
                {/* Glow effect that follows mouse */}
                <div
                    className="absolute pointer-events-none transition-opacity duration-300 opacity-0 hover:opacity-100"
                    style={{
                        left: mousePosition.x - 100,
                        top: mousePosition.y - 100,
                        width: "200px",
                        height: "200px",
                        background:
                            "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
                        transform: "translate(-50%, -50%)",
                    }}
                />

                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl shadow-purple-500/10 border border-white/5 px-6 py-4 overflow-hidden">
                    {/* Animated border gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="relative flex items-center justify-between">
                        {/* Logo with animation */}
                        <div className="flex items-center group">
                            <a
                                href="#"
                                className="flex items-center space-x-2 text-white font-bold text-xl tracking-tight transition-all duration-300"
                            >
                                <div className="relative">
                                    <Layers className="w-6 h-6 text-purple-500 group-hover:rotate-180 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-purple-500/50 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                </div>
                                <span className="relative">
                                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                        &lt;AYMAN/&gt;
                                    </span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500"></span>
                                </span>
                            </a>
                        </div>

                        {/* Desktop Navigation with icons */}
                        <div className="hidden md:flex items-center space-x-1" role="menubar">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => handleNavClick(link.name)}
                                    className={`group relative px-4 py-2 rounded-lg transition-all duration-300 ${activeLink === link.name.toLowerCase()
                                            ? "text-white"
                                            : "text-gray-400 hover:text-white"
                                        }`}
                                    role="menuitem"
                                    aria-current={activeLink === link.name.toLowerCase() ? "page" : undefined}
                                >
                                    {/* Active/Hover background */}
                                    <div
                                        className={`absolute inset-0 rounded-lg transition-all duration-300 ${activeLink === link.name.toLowerCase()
                                                ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                                                : "bg-transparent group-hover:bg-white/5"
                                            }`}
                                    ></div>

                                    <span className="relative flex items-center space-x-2">
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {link.icon}
                                        </span>
                                        <span className="text-sm font-medium">{link.name}</span>
                                    </span>

                                    {/* Animated dot for active state */}
                                    {activeLink === link.name.toLowerCase() && (
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                                            <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                                        </div>
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* Desktop GitHub Icon */}
                        <div className="hidden md:block">
                            <a
                                href="https://github.com/Aymansaeed9542"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 overflow-hidden"
                            >
                                {/* Animated gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:scale-105"></div>

                                {/* Shine effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                                </div>

                                <Github
                                    size={24}
                                    className="relative text-white group-hover:scale-110 transition-transform duration-300"
                                />
                            </a>
                        </div>

                        {/* Mobile Menu Button with animation */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                {isMenuOpen ? (
                                    <X size={20} className="text-white animate-spin-in" />
                                ) : (
                                    <Menu size={20} className="text-white" />
                                )}
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu with smooth animation */}
                    <div
                        id="mobile-menu"
                        className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                            }`}
                        role="menu"
                        aria-label="Mobile navigation menu"
                    >
                        <div className="pt-4 border-t border-white/10 space-y-2">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => handleNavClick(link.name)}
                                    className="group block relative overflow-hidden rounded-lg transition-all duration-300"
                                    role="menuitem"
                                    aria-current={activeLink === link.name.toLowerCase() ? "page" : undefined}
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>

                                    <div className="relative flex items-center space-x-3 px-4 py-3 text-gray-300 group-hover:text-white transition-colors duration-300">
                                        <span className="text-purple-400">{link.icon}</span>
                                        <span className="text-sm font-medium">{link.name}</span>
                                    </div>
                                </a>
                            ))}

                            <a
                                href="https://github.com/Aymansaeed9542"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full mt-4 group relative px-6 py-3 rounded-xl font-medium text-sm overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"></div>
                                <span className="relative flex items-center justify-center space-x-2 text-white">
                                    <Github size={20} />
                                    <span>GitHub</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
