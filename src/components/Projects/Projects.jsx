
import { ExternalLink, Github, Code2, Globe, Star, Eye, Calendar, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { getStaggerStyle } from "../../utils/stagger";
import image1 from '../../assets/image.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';

export default function Projects() {
    const [ref, isVisible] = useScrollAnimation(0.1);
    
    const projects = [
        {
            title: "M4A Brand",
            description: "A modern branding and marketing website showcasing professional services and portfolio. Features responsive design, smooth animations, and clean user interface with interactive elements and modern styling.",
            technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
            image: image6,
            github: "https://github.com/Aymansaeed9542/m4a-brand",
            live: "https://m4a-brand.vercel.app/",
            featured: true,
            category: "Branding",
            year: "2025",
            status: "Live"
        },
        {
            title: "E-commerce Store",
            description: "A comprehensive e-commerce platform featuring Women's Fashion (shawls, blouses, cardigans, joggers, socks), Men's Fashion (t-shirts, boots, sneakers, hoodies, track pants), and Electronics (routers, printers, cameras, headphones, laptops). Includes shopping cart, user authentication, product categories, brand filtering, and secure payment processing.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            image: image5,
            github: "https://github.com/Aymansaeed9542/e-commerce-store",
            live: "https://github.com/Aymansaeed9542/e-commerce",
            featured: true,
            category: "E-commerce",
            year: "2025",
            status: "Live"
            
        },
        {
            title: "Social Media App",
            description: "A full-stack social media application built with React, Node.js, and MongoDB. Features include user authentication, real-time chat, and media sharing.",
            technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
            image: image1,
            github: "https://github.com/Aymansaeed9542/SocialApp",
            live: "https://social-app-two-teal.vercel.app/",
            featured: true,
            category: "Social",
            year: "2025",
            status: "Development"
        },
        {
            title: "DevMatch Programmer",
            description: "A collaborative platform for developers to find and match with peers for coding projects, featuring real-time chat and project management tools.",
            technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
            image: image2,
            github: "https://github.com/Aymansaeed9542/dev-match",
            live: "https://aymansaeed9542.github.io/dev-match/",
            featured: true,
            category: "Collaboration",
            year: "2024",
            status: "Development"
        },
        {
            title: "Paio Cars Company",
            description: "A platform for users to buy and sell cars, featuring advanced search filters, user reviews, and a seamless checkout process.",
            technologies: ["JavaScript", "HTML5", "CSS3", "Chart.js"],
            image: image3,
            github: "https://github.com/Aymansaeed9542/paio-car-company",
            live: "https://aymansaeed9542.github.io/paio-car-company/",
            featured: false,
            category: "Automotive",
            year: "2024",
            status: "Completed"
        },
        {
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and interactive elements.",
            technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
            image: image4,
            github: "https://github.com/Aymansaeed9542/My-Portfolio",
            live: "#",
            featured: false,
            category: "Portfolio",
            year: "2025",
            status: "Live"
        }
    ];

    return (
        <div ref={ref} className="space-y-8">
            <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={getStaggerStyle(0)}>
                <h2 className="text-2xl font-bold text-white mb-4 text-center">
                    Featured Projects
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills in web development, 
                    design, and problem-solving.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={project.title}
                        className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ 
                            ...getStaggerStyle(1 + index),
                            transitionDuration: '1000ms'
                        }}
                    >
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            
                            {/* Simple overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                            
                            {/* Project Links */}
                            <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a
                                    href={project.github}
                                    className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-purple-600 transition-colors duration-300"
                                    title="View Code"
                                >
                                    <Github size={16} className="text-white" />
                                </a>
                                <a
                                    href={project.live}
                                    className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-blue-600 transition-colors duration-300"
                                    title="Live Demo"
                                >
                                    <ExternalLink size={16} className="text-white" />
                                </a>
                            </div>

                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-3 left-3">
                                    <span className="px-2 py-1 bg-purple-600 text-white text-xs font-medium rounded-md">
                                        Featured
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Project Content */}
                        <div className="p-5">
                            {/* Project Header */}
                            <div className="mb-3">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs text-purple-400 font-medium">
                                        {project.category}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        {project.year}
                                    </span>
                                </div>
                                
                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                                    {project.title}
                                </h4>
                            </div>
                            
                            {/* Project Description */}
                            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                {project.description}
                            </p>
                            
                            {/* Technologies */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Status */}
                            <div className="flex items-center justify-between">
                                <span className={`text-xs px-2 py-1 rounded-md ${
                                    project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                                    project.status === 'Development' ? 'bg-yellow-500/20 text-yellow-400' :
                                    'bg-gray-500/20 text-gray-400'
                                }`}>
                                    {project.status}
                                </span>
                                
                                <button className="text-purple-400 hover:text-white transition-colors duration-300 text-sm font-medium">
                                    View Details →
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Simple View More Button */}
            <div className={`text-center mt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={getStaggerStyle(1 + projects.length)}>
                <button className="group px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center space-x-2 mx-auto">
                    <span>View More Projects</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
            </div>
        </div>
    );
}
