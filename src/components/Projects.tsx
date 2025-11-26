"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
    {
        title: "Unlimited Storage",
        tech: "Python Discord.js",
        desc: "Store unlimited files on Telegram using bots",
        image: "https://i.ibb.co/5WL64gyH/image.png",
        github: "https://github.com/friday2su/Unlimited-Storage",
    },
    {
        title: "All-In-One Bot",
        tech: "Discord.js Node.js",
        desc: "Multi-functional Discord bot with various features",
        image: "https://i.ibb.co/j1BWxMf/image.png",
        github: "https://github.com/friday2su/All-In-One-Bot",
    },
    {
        title: "Ultra Proxy",
        tech: "Node.js Discord.js",
        desc: "Advanced proxy solution for M3U8 Stream URL",
        image: "https://i.ibb.co/xN2Nc9B/image.png",
        github: "https://github.com/friday2su/Ultra-Proxy",
    },
    {
        title: "Groq AI",
        tech: "Python AI API",
        desc: "AI integration using Groq API for Discord Bot",
        image: "https://i.ibb.co/7dzSBD4r/image.png",
        github: "https://github.com/friday2su/groq-ai",
    },
    {
        title: "Mongo Gen",
        tech: "MongoDB Node.js",
        desc: "MongoDB generator and utilities for Discord Bot",
        image: "https://i.ibb.co/nqMwfqXg/image.png",
        github: "https://github.com/friday2su/Mongo-Gen",
    },
    {
        title: "Music Bot",
        tech: "Discord.js Node.js",
        desc: "Discord music bot for voice channels",
        image: "https://i.ibb.co/8LrS0NFW/image.png",
        github: "https://github.com/friday2su/music-bot",
    },
];

export default function Projects() {
    return (
        <section className="py-20" id="works">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold">
                        <span className="text-accent">#</span>projects
                    </h2>
                    <Link href="/projects" className="text-secondary hover:text-accent transition-colors">
                        View all ~~&gt;
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.slice(0, 3).map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card-bg rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-accent/20 border border-transparent hover:border-accent/50 group"
                        >
                            {/* Image Container */}
                            <div className="h-48 w-full overflow-hidden relative">
                                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Tech Stack Badges */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.split(" ").map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-white border border-accent/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-secondary mb-6 line-clamp-2">
                                    {project.desc}
                                </p>

                                <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-2 bg-transparent border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 rounded-lg font-medium group/btn"
                                >
                                    Github
                                    <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
