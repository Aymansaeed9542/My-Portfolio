import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

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
            value: "ayman.saeed@example.com",
            link: "mailto:ayman.saeed@example.com"
        },
        {
            icon: <Phone size={24} />,
            title: "Phone",
            value: "+1 (555) 123-4567",
            link: "tel:+15551234567"
        },
        {
            icon: <MapPin size={24} />,
            title: "Location",
            value: "Available for remote work",
            link: "#"
        }
    ];

    const socialLinks = [
        { icon: <Github size={20} />, href: "#", label: "GitHub" },
        { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
        { icon: <Twitter size={20} />, href: "#", label: "Twitter" }
    ];

    return (
        <div ref={ref} className="space-y-8">
            <div className={`text-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    I'm always interested in hearing about new projects and opportunities. 
                    Feel free to reach out if you'd like to connect or collaborate!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h4 className="text-xl font-bold text-white mb-6">Send a Message</h4>
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                                    placeholder="Your name"
                                    required
                                />
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
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                                    placeholder="your@email.com"
                                    required
                                />
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
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
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
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                                placeholder="Tell me about your project..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="group relative w-full px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:scale-105"></div>
                            <span className="relative flex items-center justify-center space-x-2 text-white">
                                <span>Send Message</span>
                                <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className={`space-y-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h4 className="text-xl font-bold text-white mb-6">Contact Information</h4>
                    
                    <div className="space-y-4">
                        {contactInfo.map((info, index) => (
                            <a
                                key={info.title}
                                href={info.link}
                                className={`group flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ 
                                    transitionDelay: `${800 + index * 100}ms`,
                                    transitionDuration: '1000ms'
                                }}
                            >
                                <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300">
                                    {info.icon}
                                </div>
                                <div>
                                    <h5 className="text-white font-medium">{info.title}</h5>
                                    <p className="text-gray-400 text-sm">{info.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="pt-6">
                        <h5 className="text-white font-medium mb-4">Follow Me</h5>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className={`group p-3 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-600/20 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                    title={social.label}
                                    style={{ 
                                        transitionDelay: `${1200 + index * 100}ms`,
                                        transitionDuration: '1000ms'
                                    }}
                                >
                                    <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
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
