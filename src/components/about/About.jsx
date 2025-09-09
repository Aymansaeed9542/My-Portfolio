import React, { useState, useEffect } from "react";
import { User, Code, Palette, Smartphone, Zap, Layers } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { 
    SiReact, 
    SiNextdotjs, 
    SiFigma, 
    SiCanva, 
    SiBootstrap, 
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
        { name: "Figma", icon: <SiFigma className="text-purple-400" size={32} /> },
        { name: "Canva", icon: <SiCanva className="text-blue-500" size={32} /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" size={32} /> },
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`transition-all duration-1000 lg:pl-8 xl:pl-12 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="relative group">
                        {/* Interactive background elements */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse group-hover:scale-110 transition-transform duration-500"></div>
                        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg animate-pulse group-hover:scale-110 transition-transform duration-500" style={{animationDelay: '1s'}}></div>
                        <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-md animate-pulse group-hover:scale-125 transition-transform duration-500" style={{animationDelay: '2s'}}></div>
                        
                        {/* Animated text container */}
                        <div className="relative z-10 space-y-6 group-hover:scale-105 transition-transform duration-500">
                            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm group-hover:border-purple-500/50 transition-all duration-500">
                                {/* Floating particles inside text */}
                                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {[...Array(4)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
                                            style={{
                                                left: `${20 + i * 20}%`,
                                                top: `${30 + i * 15}%`,
                                                animationDelay: `${i * 0.3}s`,
                                            }}
                                        ></div>
                                    ))}
                                </div>
                                
                                <p className="text-gray-400 leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                                    I'm <span className="text-purple-400 font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:scale-110 inline-block transition-transform duration-300 cursor-pointer">Ayman Saeed</span>, a passionate Computer Science student and Software Developer with expertise in both frontend and backend development. I love creating beautiful, functional, and user-friendly web applications that solve real-world problems.
                                </p>
                            </div>
                            
                            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm group-hover:border-blue-500/50 transition-all duration-500 ">
                                {/* Floating particles inside text */}
                                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {[...Array(3)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                                            style={{
                                                left: `${25 + i * 25}%`,
                                                top: `${40 + i * 10}%`,
                                                animationDelay: `${i * 0.4}s`,
                                            }}
                                        ></div>
                                    ))}
                                </div>
                                
                                <p className="text-gray-400 leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                                    As a full-stack developer, I specialize in modern JavaScript frameworks and enjoy building complete solutions from database design to user interface. I'm constantly learning new technologies and contributing to open-source projects to expand my skills.
                                </p>
                            </div>
                            
                            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm group-hover:border-purple-500/50 transition-all duration-500">
                                {/* Floating particles inside text */}
                                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
                                            style={{
                                                left: `${15 + i * 18}%`,
                                                top: `${25 + i * 12}%`,
                                                animationDelay: `${i * 0.2}s`,
                                            }}
                                        ></div>
                                    ))}
                                </div>
                                
                                <p className="text-gray-400 leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                                    When I'm not coding, you can find me exploring new technologies, working on personal projects, or collaborating with other developers to create innovative solutions.
                                </p>
                            </div>
                        </div>
                        
                        {/* Interactive highlight lines */}
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500/50 to-blue-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500/50 to-purple-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </div>
                <div className={`relative transition-all duration-1000 ${showImage ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} sm:ms-[10rem]`}>
                    <div className="w-96 h-96 mx-auto relative group cursor-pointer">
                        {/* Outer glow ring */}
                        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
                        
                        {/* Rotating outer ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-spin" style={{animationDuration: '8s'}}>
                            <div className="absolute inset-1 rounded-full bg-black"></div>
                        </div>
                        
                        {/* Middle rotating ring */}
                        <div className="absolute inset-4 rounded-full border border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}>
                            <div className="absolute inset-1 rounded-full bg-black"></div>
                        </div>
                        
                        {/* Inner rotating ring */}
                        <div className="absolute inset-8 rounded-full border border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-spin" style={{animationDuration: '4s'}}>
                            <div className="absolute inset-1 rounded-full bg-black"></div>
                        </div>
                        
                        {/* Main profile circle with glassmorphism */}
                        <div className="relative w-full h-full bg-gradient-to-br from-purple-600/90 to-blue-600/90 rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-500 backdrop-blur-sm border border-white/20 shadow-2xl">
                            {/* Inner glow */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                            
                            {/* Profile icon with enhanced styling */}
                            <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center backdrop-blur-sm border border-white/30">
                                    <User size={60} className="text-white drop-shadow-lg" />
                                </div>
                            </div>
                            
                            {/* Floating tech icons around profile */}
                            <div className="absolute inset-0 pointer-events-none">
                                {[
                                    { icon: <SiReact className="text-blue-400" size={20} />, angle: 0 },
                                    { icon: <SiNextdotjs className="text-white" size={20} />, angle: 60 },
                                    { icon: <SiFigma className="text-purple-400" size={20} />, angle: 120 },
                                    { icon: <SiTypescript className="text-blue-600" size={20} />, angle: 180 },
                                    { icon: <SiJavascript className="text-yellow-400" size={20} />, angle: 240 },
                                    { icon: <SiTailwindcss className="text-cyan-400" size={20} />, angle: 300 },
                                ].map((tech, index) => (
                                    <div
                                        key={index}
                                        className="absolute w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 animate-pulse"
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                            transform: `translate(-50%, -50%) rotate(${tech.angle}deg) translateY(-140px) rotate(-${tech.angle}deg)`,
                                            animationDelay: `${index * 0.2}s`,
                                        }}
                                    >
                                        {tech.icon}
                                    </div>
                                ))}
                            </div>
                            
                            {/* Central pulsing dot */}
                            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
                        </div>
                        
                        {/* Floating particles */}
                        <div className="absolute inset-0 pointer-events-none">
                            {[...Array(12)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 2}s`,
                                        animationDuration: `${2 + Math.random() * 2}s`,
                                    }}
                                ></div>
                            ))}
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
                            className={`group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${showSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ 
                                transitionDelay: `${2500 + index * 200}ms`,
                                transitionDuration: '800ms'
                            }}
                        >
                            {/* Animated gradient background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-15 rounded-2xl transition-all duration-500`}></div>
                            
                            {/* Rotating glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-25 blur-xl rounded-2xl transition-all duration-500 animate-pulse`}></div>
                            
                            {/* Floating particles */}
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`absolute w-1 h-1 bg-gradient-to-r ${skill.color} rounded-full animate-pulse`}
                                        style={{
                                            left: `${20 + i * 30}%`,
                                            top: `${20 + i * 20}%`,
                                            animationDelay: `${i * 0.3}s`,
                                        }}
                                    ></div>
                                ))}
                            </div>
                            
                            <div className="relative z-10">
                                <div className={`text-purple-400 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 p-3 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10 group-hover:bg-opacity-20`}>
                                    {skill.icon}
                                </div>
                                <h4 className="text-white font-bold mb-3 text-lg group-hover:text-purple-300 transition-colors duration-300">{skill.name}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{skill.description}</p>
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
                    
                    {/* Enhanced Technologies Container */}
                    <div className="relative w-full max-w-6xl mx-auto">
                        {/* Outer glow effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
                        
                        {/* Main container */}
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-8 backdrop-blur-lg group hover:border-purple-500/50 transition-all duration-500">
                            {/* Animated background patterns */}
                            <div className="absolute inset-0 opacity-30">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
                            </div>
                            
                            {/* Floating particles */}
                            <div className="absolute inset-0 pointer-events-none">
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                            animationDelay: `${Math.random() * 3}s`,
                                            animationDuration: `${2 + Math.random() * 2}s`,
                                        }}
                                    ></div>
                                ))}
                            </div>
                            
                            {/* Responsive grid layout */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 relative z-10">
                                {technologies.map((tech, index) => (
                                    <div
                                        key={tech.name}
                                        className="group relative flex flex-col items-center p-4 md:p-6 rounded-2xl bg-white/10 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:-translate-y-2 backdrop-blur-sm"
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                        }}
                                    >
                                        {/* Icon container with enhanced effects */}
                                        <div className="relative mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-purple-500/50 transition-all duration-300">
                                                {tech.icon}
                                            </div>
                                        </div>
                                        
                                        {/* Technology name */}
                                        <span className="text-gray-300 text-xs sm:text-sm text-center font-medium group-hover:text-white transition-colors duration-300">
                                            {tech.name}
                                        </span>
                                        
                                        {/* Hover glow effect */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Automatic movement indicators */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-60">
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
