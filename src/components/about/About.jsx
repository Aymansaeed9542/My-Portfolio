import React, { useState, useEffect } from "react";
import { User, Code, Database, Smartphone } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function About() {
    const [ref, isVisible] = useScrollAnimation(0.1);
    const [showImage, setShowImage] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    
    const skills = [
        { name: "Frontend Development", icon: <Code size={24} />, description: "React, Vue.js, TypeScript, HTML5, CSS3" },
        { name: "Backend Development", icon: <Database size={24} />, description: "Node.js, Python, PHP, Express.js" },
        { name: "Database & APIs", icon: <Smartphone size={24} />, description: "MongoDB, MySQL, REST APIs, GraphQL" },
        { name: "Tools & Technologies", icon: <User size={24} />, description: "Git, Docker, AWS, Vercel, Netlify" },
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
                    <h3 className="text-2xl font-bold text-white mb-4">About Me</h3>
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
                <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`group relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 ${showSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ 
                                transitionDelay: `${2500 + index * 200}ms`,
                                transitionDuration: '800ms'
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <h4 className="text-white font-semibold mb-2">{skill.name}</h4>
                                <p className="text-gray-400 text-sm">{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
