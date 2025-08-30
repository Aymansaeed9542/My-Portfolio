import React from "react";
import Hero from "../Hero/Hero";
import Section from "../Section/Section";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

export default function Content() {
    return (
        <div className="relative pt-32">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <Hero />

                {/* About Section */}
                <Section id="about" title="About Me">
                    <About />
                </Section>

                {/* Projects Section */}
                <Section id="projects" title="My Projects">
                    <Projects />
                </Section>

                {/* Contact Section */}
                <Section id="contact" title="Contact Me">
                    <Contact />
                </Section>
            </div>
        </div>
    );
}
