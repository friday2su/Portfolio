"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

export default function Contact() {
    return (
        <section id="contacts" className="py-20 border-t border-transparent">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold"><span className="text-accent">#</span>contacts</h2>
                    <div className="h-px w-32 bg-accent" />
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-12">
                    <div className="md:w-1/2 text-secondary">
                        I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
                    </div>

                    <div className="md:w-auto">
                        <div className="border border-secondary p-4 rounded-md">
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
            </div>
        </section>
    );
}
