import React from "react";
import { ExternalLink, Github, Code2, Globe } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function Projects() {
    const [ref, isVisible] = useScrollAnimation(0.1);
    
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://via.placeholder.com/400x250/1f2937/ffffff?text=E-Commerce",
            github: "#",
            live: "#",
            featured: true
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
            image: "https://via.placeholder.com/400x250/1f2937/ffffff?text=Task+App",
            github: "#",
            live: "#",
            featured: true
        },
        {
            title: "Weather Dashboard",
            description: "A beautiful weather application that displays current weather, forecasts, and interactive maps using OpenWeatherMap API.",
            technologies: ["JavaScript", "HTML5", "CSS3", "Chart.js"],
            image: "https://via.placeholder.com/400x250/1f2937/ffffff?text=Weather+App",
            github: "#",
            live: "#",
            featured: false
        },
        {
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and interactive elements.",
            technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
            image: "https://via.placeholder.com/400x250/1f2937/ffffff?text=Portfolio",
            github: "#",
            live: "#",
            featured: false
        }
    ];

    return (
        <div ref={ref} className="space-y-8">
            <div className={`text-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-2xl font-bold text-white mb-4">Featured Projects</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills in web development, 
                    design, and problem-solving.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={project.title}
                        className={`group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ 
                            transitionDelay: `${400 + index * 150}ms`,
                            transitionDuration: '1000ms'
                        }}
                    >
                        {/* Project Image */}
                        <div className="relative overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Project Links */}
                            <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a
                                    href={project.github}
                                    className="p-2 bg-black/50 rounded-lg hover:bg-purple-600 transition-colors duration-300"
                                    title="View Code"
                                >
                                    <Github size={16} className="text-white" />
                                </a>
                                <a
                                    href={project.live}
                                    className="p-2 bg-black/50 rounded-lg hover:bg-purple-600 transition-colors duration-300"
                                    title="Live Demo"
                                >
                                    <ExternalLink size={16} className="text-white" />
                                </a>
                            </div>

                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium rounded-full">
                                        Featured
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Project Content */}
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                                {project.title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {project.description}
                            </p>
                            
                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className={`text-center mt-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <button className="group relative px-8 py-3 rounded-xl font-medium text-sm transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:scale-105"></div>
                    <span className="relative flex items-center space-x-2 text-white">
                        <span>View More Projects</span>
                        <Code2 size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                </button>
            </div>
        </div>
    );
}
