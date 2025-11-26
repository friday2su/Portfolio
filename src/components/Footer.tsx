"use client";

import { Github, Twitter, Linkedin, MessageSquare } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full py-8 border-t border-white/10 mt-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-bold">
                        <span className="w-4 h-4 bg-accent/20 border border-accent flex items-center justify-center">
                            <div className="w-2 h-2 bg-accent" />
                        </span>
                        <span>Friday</span>
                        <span className="text-secondary font-normal text-sm">friday@friday-dev.ml</span>
                    </div>
                    <p className="text-secondary text-sm">Web designer and web developer</p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-2">
                    <h3 className="text-lg font-bold">Media</h3>
                    <div className="flex gap-4 text-secondary">
                        <a href="https://github.com/friday2su" target="_blank" className="hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="https://x.com/fridayzzi" target="_blank" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="https://discord.com/users/1203605618745933880" target="_blank" className="hover:text-white transition-colors"><MessageSquare size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="text-center text-secondary text-xs mt-8">
                © Copyright 2025. Made by Friday
            </div>
        </footer>
    );
}
