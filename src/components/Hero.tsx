"use client";

import { motion } from "framer-motion";
import Scene from "./Canvas/Scene";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                    style={{ backgroundImage: 'url("https://i.pinimg.com/1200x/8a/04/54/8a0454413541961373d96223f09f5d2b.jpg")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 h-full">
                {/* Left Content - Moved down */}
                <div className="flex flex-col gap-6 pt-40">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold leading-tight"
                    >
                        Friday is a <span className="text-accent">web designer</span> and <span className="text-accent">developer</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-secondary text-lg"
                    >
                        He crafts responsive websites where technologies meet creativity
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link
                            href="/contacts"
                            className="inline-block border border-accent px-6 py-2 text-white hover:bg-accent/10 transition-colors rounded-md"
                        >
                            Contact me !!
                        </Link>
                    </motion.div>
                </div>

                {/* Right Content (3D Scene) - Moved up */}
                <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center mt-10">
                    <Scene />

                    {/* Status Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="absolute bottom-10 right-0 md:right-10 border border-secondary p-2 flex items-center gap-2 bg-background/80 backdrop-blur-sm z-10 rounded-md"
                    >
                        <div className="w-4 h-4 bg-accent" />
                        <span className="text-secondary">Currently working on</span>
                        <span className="text-white font-bold">Portfolio</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
