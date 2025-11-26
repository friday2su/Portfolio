"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold"><span className="text-accent">#</span>about-me</h2>
                        <div className="h-px w-32 bg-accent" />
                    </div>

                    <div className="text-secondary space-y-4">
                        <p>Hello, i'm Friday!</p>
                        <p>
                            I'm a self-taught full-stack developer and UI/UX designer based in India. I specialize in building exceptional digital experiences that are fast, accessible, and visually stunning.
                        </p>
                        <p>
                            With a strong foundation in both design and development, I bridge the gap between aesthetics and functionality. I'm passionate about open source, clean code, and creating intuitive user interfaces.
                        </p>
                    </div>

                    <Link href="/about" className="inline-block mt-8 border border-accent px-6 py-2 text-white hover:bg-accent hover:text-white transition-all duration-300 rounded-md">
                        Read more -&gt;
                    </Link>
                </div>

                <div className="md:w-1/2 relative flex justify-center items-center">
                    {/* Code Snippet / Terminal Graphic */}
                    <div className="w-full max-w-md bg-card-bg rounded-xl shadow-2xl overflow-hidden">
                        {/* Window Controls */}
                        <div className="bg-[#1f2937] px-4 py-3 flex items-center justify-between border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            </div>
                            <div className="text-xs text-gray-400 font-mono flex items-center gap-2">
                                <span className="w-3 h-3 border border-gray-500 rounded-sm flex items-center justify-center text-[8px] text-blue-400 border-blue-400">TS</span>
                                developer.tsx
                            </div>
                            <div className="w-10" /> {/* Spacer for centering */}
                        </div>

                        {/* Code Area */}
                        <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                            <div className="flex">
                                <span className="text-gray-600 w-8 select-none text-right pr-4">1</span>
                                <div className="flex-1">
                                    <span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b]">developer</span> <span className="text-[#56b6c2]">=</span> <span className="text-[#abb2bf]">{`{`}</span>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 select-none text-right pr-4">2</span>
                                <div className="flex-1 pl-4">
                                    <span className="text-[#e06c75]">name</span><span className="text-[#abb2bf]">:</span> <span className="text-[#98c379]">'Friday'</span><span className="text-[#abb2bf]">,</span>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 select-none text-right pr-4">3</span>
                                <div className="flex-1 pl-4">
                                    <span className="text-[#e06c75]">role</span><span className="text-[#abb2bf]">:</span> <span className="text-[#98c379]">'Full Stack Dev'</span><span className="text-[#abb2bf]">,</span>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 select-none text-right pr-4">4</span>
                                <div className="flex-1 pl-4">
                                    <span className="text-[#e06c75]">skills</span><span className="text-[#abb2bf]">:</span> <span className="text-[#abb2bf]">[</span>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 select-none text-right pr-4">5</span>
                                <div className="flex-1 pl-8">
                                    <span className="text-[#98c379]">'React'</span><span className="text-[#abb2bf]">,</span> <span className="text-[#98c379]">'Node.js'</span><span className="text-[#abb2bf]">,</span> <span className="text-[#98c379]">'Design'</span>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 select-none text-right pr-4">6</span>
                                <div className="flex-1 pl-4">
                                    <span className="text-[#abb2bf]">]</span><span className="text-[#abb2bf]">,</span>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 select-none text-right pr-4">7</span>
                                <div className="flex-1 pl-4">
                                    <span className="text-[#e06c75]">hardWorker</span><span className="text-[#abb2bf]">:</span> <span className="text-[#d19a66]">true</span>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 select-none text-right pr-4">8</span>
                                <div className="flex-1">
                                    <span className="text-[#abb2bf]">{`}`}</span><span className="text-[#abb2bf]">;</span>
                                    <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse align-middle"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
