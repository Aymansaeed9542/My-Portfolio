import React from 'react';
import Hero from '../components/Sections/Hero';
import TechLogos from '../components/TechLogos/TechLogos';
import About from '../components/Sections/About';
import Projects from '../components/Sections/Projects';
import Skills from '../components/Sections/Skills';
import Contact from '../components/Sections/Contact';
import DarkVeil from '../components/DarkVeil/DarkVeil';
import RevealOnScroll from '../components/RevealOnScroll/RevealOnScroll';
import Cursor from '../components/Cursor/Cursor';
import FilmGrain from '../components/FilmGrain/FilmGrain';

export default function Home() {
    return (
        <main className="relative min-h-screen w-full flex flex-col items-center bg-[#050505] pb-32">
            <Cursor />
            <FilmGrain />
            {/* DarkVeil background */}
            <div className="fixed inset-0 z-[-1] opacity-30 grayscale-[100%] saturate-0 contrast-125">
                <DarkVeil
                    hueShift={0}
                    noiseIntensity={0.02}
                    scanlineIntensity={0.1}
                    speed={0.1}
                    scanlineFrequency={40}
                    warpAmount={0.02}
                />
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">

                {/* 1. Hero — no wrapper, animates internally */}
                <Hero />

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
        </main>
    );
}

/* Thin horizontal rule between sections */
function SectionSeparator() {
    return (
        <div style={{
            width: '100%',
            maxWidth: '1100px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, #1a1a1a 20%, #1a1a1a 80%, transparent)',
            margin: '0 16px',
        }} />
    );
}
