import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Facebook } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { getStaggerStyle } from "../../utils/stagger";

export default function Contact() {
    const [ref, isVisible] = useScrollAnimation(0.1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    const contactInfo = [
        {
            icon: <Mail size={24} />,
            title: "Email",
            value: "aymsaeed9542@gmail.com",
            link: "aymsaeed9542@gmail.com"
        },
        {
            icon: <Phone size={24} />,
            title: "Phone",
            value: "+201147252714",
            link: "tel:+201147252714"
        },
        {
            icon: <MapPin size={24} />,
            title: "Location",
            value: "Alexandria, Egypt",
            link: "#"
        }
    ];

    const socialLinks = [
        { icon: <Github size={20} />, href: "https://github.com/Aymansaeed9542", label: "GitHub" },
        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/ayman-khodier", label: "LinkedIn" },
        { icon: <Facebook size={20} />, href: "https://www.facebook.com/share/16nZjFEPEo/", label: "Facebook" }
    ];

    return (
        <div ref={ref} className="space-y-12">
            {/* Enhanced Header */}
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={getStaggerStyle(0)}>
                <div className="relative">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
                        <span className="bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Get In Touch
                        </span>
                        {/* Decorative line */}
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl scale-110 opacity-50"></div>
                    </h2>
                    {/* Subtitle accent */}
                    <div className="flex items-center justify-center space-x-2 text-gray-400 mt-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
                        <span className="text-sm font-medium tracking-wider uppercase">Let's Connect</span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-blue-500"></div>
                    </div>
                </div>
                <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
                    I'm always interested in hearing about new projects and opportunities. 
                    Feel free to reach out if you'd like to connect or collaborate!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Enhanced Contact Form */}
                <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={getStaggerStyle(1)}>
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 relative">
                            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                                Send a Message
                            </span>
                            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-2"></div>
                        </h3>
                    </div>
                    
                    <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        {/* Form background glow */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-50"></div>
                        
                        <form onSubmit={handleSubmit} className="relative space-y-6" role="form" aria-label="Contact form">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-purple-400/50"
                                    placeholder="Your name"
                                    required
                                    aria-required="true"
                                    aria-describedby="name-help"
                                />
                                <div id="name-help" className="sr-only">Please enter your full name</div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-purple-400/50"
                                    placeholder="your@email.com"
                                    required
                                    aria-required="true"
                                    aria-describedby="email-help"
                                />
                                <div id="email-help" className="sr-only">Please enter a valid email address</div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-purple-400/50"
                                placeholder="What's this about?"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-purple-400/50 resize-none"
                                placeholder="Tell me about your project..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="group relative w-full px-8 py-4 rounded-xl font-medium text-sm transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:scale-105"></div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                            </div>
                            <span className="relative flex items-center justify-center space-x-2 text-white">
                                <span>Send Message</span>
                                <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </button>
                    </form>
                    </div>
                </div>

                {/* Enhanced Contact Information */}
                <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={getStaggerStyle(2)}>
                    <div className="text-center mb-8">
                        <h4 className="text-2xl md:text-3xl font-bold mb-4 relative">
                            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                                Contact Information
                            </span>
                            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-2"></div>
                        </h4>
                    </div>
                    
                    <div className="space-y-6">
                        {contactInfo.map((info, index) => (
                            <a
                                key={info.title}
                                href={info.link}
                                className={`group flex items-center space-x-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ 
                                    ...getStaggerStyle(3 + index),
                                    transitionDuration: '1000ms'
                                }}
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                                        {info.icon}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h5 className="text-white font-semibold text-lg mb-1">{info.title}</h5>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{info.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Enhanced Social Links */}
                    <div className="pt-8">
                        <div className="text-center mb-6">
                            <h5 className="text-xl font-semibold text-white mb-2">Follow Me</h5>
                            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                        </div>
                        <div className="flex justify-center space-x-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className={`group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-600/20 transition-all duration-300 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                    title={social.label}
                                    style={{ 
                                        ...getStaggerStyle(6 + index),
                                        transitionDuration: '1000ms'
                                    }}
                                >
                                    <div className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
