import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from '../components/Sections/Hero';
import TechLogos from '../components/TechLogos/TechLogos';
import About from '../components/Sections/About';
import Experience from '../components/Sections/Experience';
import Projects from '../components/Sections/Projects';
import Skills from '../components/Sections/Skills';
import Contact from '../components/Sections/Contact';
import RevealOnScroll from '../components/RevealOnScroll/RevealOnScroll';
import Preloader from '../components/Preloader/Preloader';
import Footer from '../components/Footer/Footer';
import Dock from '../components/Dock/Dock';
import Cursor from '../components/Cursor/Cursor';

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <main id="home" className="relative min-h-screen w-full flex flex-col items-center bg-[#0D1117]">
            <AnimatePresence mode="wait">
                {loading ? (
                    <Preloader key="preloader" onComplete={() => setLoading(false)} />
                ) : (
                    <motion.div 
                        key="content"
                        className="w-full flex flex-col items-center"
                    >
                        <Cursor />
                        <Dock />

                        {/* 1. Hero — Full screen width without bounding box */}
                        <div className="w-full z-10 relative bg-[#0D1117]">
                            <Hero />
                        </div>

                        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">

                            {/* 2. Tech Logos Marquee */}
                            <RevealOnScroll variant="scrub" className="w-full" yOffset={30}>
                                <TechLogos />
                            </RevealOnScroll>

                            {/* 3. About — stagger is handled inside About.jsx per-card */}
                            <div id="about" className="w-full scroll-m-20">
                                <About />
                            </div>

                            {/* Separator */}
                            <SectionSeparator />

                            {/* 3.5 Experience */}
                            <div id="experience" className="w-full scroll-m-20">
                                <Experience />
                            </div>

                            {/* Separator */}
                            <SectionSeparator />

                            {/* 4. Projects */}
                            <div id="projects" className="w-full scroll-m-20">
                                <Projects />
                            </div>

                            {/* Separator */}
                            <SectionSeparator />

                            {/* 5. Skills */}
                            <div id="skills" className="w-full scroll-m-20">
                                <Skills />
                            </div>

                            {/* Separator */}
                            <SectionSeparator />

                            {/* 6. Contact */}
                            <div id="contact" className="w-full scroll-m-20">
                                <Contact />
                            </div>

                        </div>

                        {/* 7. Footer */}
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}

/* Thin horizontal rule between sections */
function SectionSeparator() {
    return (
        <div style={{
            width: 'calc(100% - 32px)',
            maxWidth: '1100px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, #1a1a1a 20%, #1a1a1a 80%, transparent)',
            margin: '0 auto',
        }} />
    );
}
