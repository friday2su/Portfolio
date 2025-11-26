"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

const completeApps = [
    {
        title: "Unlimited Storage",
        tech: "Python Discord.js",
        desc: "Store unlimited files on Telegram using bots",
        image: "https://i.ibb.co/5WL64gyH/image.png",
        live: "https://github.com/friday2su/Unlimited-Storage",
        cached: null
    },
    {
        title: "All-In-One Bot",
        tech: "Discord.js Node.js",
        desc: "Multi-functional Discord bot with various features",
        image: "https://i.ibb.co/j1BWxMf/image.png",
        live: "https://github.com/friday2su/All-In-One-Bot",
        cached: null
    },
    {
        title: "Ultra Proxy",
        tech: "Node.js Discord.js",
        desc: "Advanced proxy solution for M3U8 Stream URL",
        image: "https://i.ibb.co/xN2Nc9B/image.png",
        live: "https://github.com/friday2su/Ultra-Proxy",
        cached: null
    },
    {
        title: "Groq AI",
        tech: "Python AI API",
        desc: "AI integration using Groq API for Discord Bot",
        image: "https://i.ibb.co/7dzSBD4r/image.png",
        live: "https://github.com/friday2su/groq-ai",
        cached: null
    },
    {
        title: "Mongo Gen",
        tech: "MongoDB Node.js",
        desc: "MongoDB generator and utilities for Discord Bot",
        image: "https://i.ibb.co/nqMwfqXg/image.png",
        live: "https://github.com/friday2su/Mongo-Gen",
        cached: null
    },
    {
        title: "Music Bot",
        tech: "Discord.js Node.js",
        desc: "Discord music bot for voice channels",
        image: "https://i.ibb.co/8LrS0NFW/image.png",
        live: "https://github.com/friday2su/music-bot",
        cached: null
    }
];

const smallProjects = [
    {
        title: "Bot boilerplate",
        tech: "Discord.js TS JS",
        desc: "Start creating scalable discord.js bot with typescript in seconds",
        link: "Github"
    },
    {
        title: "My blog",
        tech: "VUE CSS JS",
        desc: "Front-end of my future blog website written in vue",
        link: "Github"
    },
    {
        title: "Chess pro",
        tech: "Figma",
        desc: "Figma landing page about service for viewing chess tournaments",
        link: "Figma"
    },
    {
        title: "Crash protect website",
        tech: "Figma",
        desc: "Figma template for website about anti-raid, anti-crash discord bot",
        link: "Figma"
    },
    {
        title: "CSS expirements",
        tech: "HTML CSS",
        desc: "Collection of my different little projects in css",
        link: "Live"
    },
    {
        title: "Web Dev nvim config",
        tech: "Lua NeoVim",
        desc: "Config for neovim perfect for web developer",
        link: "Github"
    },
    {
        title: "Ooku",
        tech: "Python Quart HTML",
        desc: "Simple link shortener with auth",
        link: "Live"
    },
    {
        title: "School website",
        tech: "Figma",
        desc: "Figma template website for my school",
        link: "Figma"
    }
];

export default function ProjectsPage() {
    return (
        <>
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-3xl font-bold mb-4"><span className="text-accent">/</span>projects</h1>
                        <p className="text-secondary">List of my projects</p>
                    </div>

                    {/* Complete Apps */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold mb-8"><span className="text-accent">#</span>complete-apps</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {completeApps.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="border border-secondary bg-background rounded-md overflow-hidden"
                                >
                                    <div className="h-48 w-full border-b border-secondary overflow-hidden relative group">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div className="p-2 border-b border-secondary text-secondary text-sm">
                                        {project.tech}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-secondary mb-4">{project.desc}</p>
                                        <div className="flex gap-4">
                                            <Link href={project.live} target="_blank" rel="noopener noreferrer" className="border border-accent px-4 py-2 text-white hover:bg-accent/10 transition-colors rounded-md">
                                                Github &lt;~&gt;
                                            </Link>
                                            {project.cached && (
                                                <Link href={project.cached} className="border border-secondary px-4 py-2 text-secondary hover:text-white hover:border-white transition-colors rounded-md">
                                                    Cached &gt;=
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Small Projects */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8"><span className="text-accent">#</span>small-projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {smallProjects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="border border-secondary bg-background rounded-md overflow-hidden"
                                >
                                    <div className="p-2 border-b border-secondary text-secondary text-sm">
                                        {project.tech}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-secondary mb-4">{project.desc}</p>
                                        <Link href="#" className="border border-accent px-4 py-2 text-white hover:bg-accent/10 transition-colors rounded-md">
                                            {project.link} &lt;~&gt;
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
