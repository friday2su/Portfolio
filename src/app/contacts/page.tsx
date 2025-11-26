"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Github, Twitter, Linkedin } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-3xl font-bold mb-4"><span className="text-accent">/</span>contacts</h1>
                        <p className="text-secondary">Wanted to meet?</p>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
                        <div className="md:w-1/2 text-secondary">
                            I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">


                            <div className="border border-secondary p-4 h-fit rounded-md">
                                <h3 className="font-bold text-white mb-4">Message me here</h3>
                                <div className="flex flex-col gap-2 text-secondary">
                                    <a href="https://discord.com/users/1203605618745933880" target="_blank" className="flex items-center gap-2 hover:text-accent transition-colors">
                                        <MessageSquare size={20} />
                                        <span>Friday</span>
                                    </a>
                                    <a href="mailto:friday@friday.me" className="flex items-center gap-2 hover:text-accent transition-colors">
                                        <Mail size={20} />
                                        <span>friday@friday.me</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* All Media */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8"><span className="text-accent">#</span>all-media</h2>
                        <div className="flex gap-4 text-secondary">
                            <a href="https://x.com/fridayzzi" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Twitter size={20} /> <span className="hidden md:inline">@fridayzzi</span>
                            </a>
                            <a href="https://github.com/friday2su" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Github size={20} /> <span className="hidden md:inline">@friday2su</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
