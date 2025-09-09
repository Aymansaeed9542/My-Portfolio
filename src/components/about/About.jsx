import React, { useState, useEffect } from "react";
import { User, Code, Palette, Smartphone, Zap, Layers } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { 
    SiReact, 
    SiNextdotjs, 
    SiVuedotjs, 
    SiTypescript, 
    SiJavascript, 
    SiTailwindcss, 
    SiHtml5, 
    SiCss3, 
    SiVite, 
    SiGit 
} from "react-icons/si";

export default function About() {
    const [ref, isVisible] = useScrollAnimation(0.1);
    const [showImage, setShowImage] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    
    const skills = [
        { name: "Frontend Development", icon: <Code size={24} />, description: "React, Vue.js, TypeScript, HTML5, CSS3", color: "from-blue-500 to-cyan-500" },
        { name: "UI/UX Design", icon: <Palette size={24} />, description: "Tailwind CSS, Responsive Design, Modern Interfaces", color: "from-purple-500 to-pink-500" },
        { name: "Web Technologies", icon: <Layers size={24} />, description: "Next.js, Vite, JavaScript, Modern Frameworks", color: "from-green-500 to-emerald-500" },
        { name: "Development Tools", icon: <Zap size={24} />, description: "Git, VS Code, Chrome DevTools, Modern Workflow", color: "from-orange-500 to-red-500" },
    ];

    const technologies = [
        { name: "React", icon: <SiReact className="text-blue-400" size={32} /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" size={32} /> },
        { name: "Vue.js", icon: <SiVuedotjs className="text-green-400" size={32} /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" size={32} /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={32} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" size={32} /> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" size={32} /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" size={32} /> },
        { name: "Vite", icon: <SiVite className="text-purple-400" size={32} /> },
        { name: "Git", icon: <SiGit className="text-orange-500" size={32} /> },
    ];

    useEffect(() => {
        // Show image first after 500ms
        const imageTimer = setTimeout(() => {
            setShowImage(true);
        }, 500);

        // Show content after image appears (500ms + 1000ms = 1500ms)
        const contentTimer = setTimeout(() => {
            setShowContent(true);
        }, 1500);

        // Show skills after content appears (1500ms + 1000ms = 2500ms)
        const skillsTimer = setTimeout(() => {
            setShowSkills(true);
        }, 2500);

        return () => {
            clearTimeout(imageTimer);
            clearTimeout(contentTimer);
            clearTimeout(skillsTimer);
        };
    }, []);

    return (
        <div ref={ref} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        I'm <span className="text-purple-400 font-semibold">Ayman Saeed</span>, a passionate Computer Science student and Software Developer with expertise in both frontend and backend development. I love creating beautiful, functional, and user-friendly web applications that solve real-world problems.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        As a full-stack developer, I specialize in modern JavaScript frameworks and enjoy building complete solutions from database design to user interface. I'm constantly learning new technologies and contributing to open-source projects to expand my skills.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        When I'm not coding, you can find me exploring new technologies, working on personal projects, or collaborating with other developers to create innovative solutions.
                    </p>
                </div>
                <div className={`relative transition-all duration-1000 ${showImage ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                    <div className="w-64 h-64 mx-auto relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
                        <div className="relative w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                            <User size={80} className="text-white" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`transition-all duration-1000 ${showSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
                        <span className="bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Skills & Expertise
                        </span>
                        {/* Decorative line */}
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-blue-500/15 blur-lg scale-105 opacity-60"></div>
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 ${showSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ 
                                transitionDelay: `${2500 + index * 200}ms`,
                                transitionDuration: '800ms'
                            }}
                        >
                            {/* Gradient background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                            
                            {/* Glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500`}></div>
                            
                            <div className="relative">
                                <div className={`text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300 p-3 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10`}>
                                    {skill.icon}
                                </div>
                                <h4 className="text-white font-bold mb-3 text-lg group-hover:text-purple-300 transition-colors duration-300">{skill.name}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Technology Logos Section */}
                <div className={`mt-12 transition-all duration-1000 delay-1000 ${showSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 relative">
                            <span className="bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Technologies I Work With
                            </span>
                            {/* Decorative line */}
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-md scale-105 opacity-50"></div>
                        </h3>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl"></div>
                        
                        <div className="flex animate-scroll space-x-6">
                            {technologies.map((tech, index) => (
                                <div
                                    key={`${tech.name}-${index}`}
                                    className="flex-shrink-0 flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group hover:scale-110 hover:bg-white/10"
                                >
                                    <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {tech.icon}
                                    </div>
                                    <span className="text-gray-300 text-sm text-center font-medium group-hover:text-white transition-colors duration-300">{tech.name}</span>
                                </div>
                            ))}
                            {/* Duplicate items for seamless loop */}
                            {technologies.map((tech, index) => (
                                <div
                                    key={`${tech.name}-duplicate-${index}`}
                                    className="flex-shrink-0 flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group hover:scale-110 hover:bg-white/10"
                                >
                                    <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {tech.icon}
                                    </div>
                                    <span className="text-gray-300 text-sm text-center font-medium group-hover:text-white transition-colors duration-300">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
