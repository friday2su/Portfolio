"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Skills from "@/components/Skills";

const funFacts = [
    "I like winter more than summer",
    "I often bike with my friends",
    "I like pizza and pasta",
    "I am discord bot developer",
    "My favorite movie is ??",
    "I am still in school",
    "Daily new commit but private!"
];

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-3xl font-bold mb-4"><span className="text-accent">/</span>about-me</h1>
                        <p className="text-secondary">Who am i?</p>
                    </div>

                    {/* Intro Section */}
                    <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                        <div className="md:w-1/2 text-secondary space-y-4">
                            <p>Hello, i'm Friday!</p>
                            <p>
                                I'm a self-taught web developer based in India. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                            </p>
                            <p>
                                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                            </p>
                        </div>

                        <div className="md:w-1/2 relative flex justify-center">
                            {/* Placeholder for Cyber Character Image */}
                            <div className="w-64 h-80 border-b border-accent relative">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/20" />
                                <div className="absolute bottom-0 left-0 w-full h-px bg-accent" />
                                <div className="absolute top-10 -right-10 grid grid-cols-5 gap-2">
                                    {[...Array(25)].map((_, i) => (
                                        <div key={i} className="w-1 h-1 bg-secondary rounded-full" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <Skills />

                    {/* Fun Facts Section */}
                    <div className="mt-20">
                        <h2 className="text-3xl font-bold mb-8"><span className="text-accent">#</span>my-fun-facts</h2>
                        <div className="flex flex-col md:flex-row gap-12">
                            <div className="flex flex-wrap gap-4 md:w-2/3">
                                {funFacts.map((fact, index) => (
                                    <div key={index} className="border border-secondary p-2 text-secondary hover:text-white transition-colors rounded-md">
                                        {fact}
                                    </div>
                                ))}
                            </div>

                            {/* Decorative Graphic */}
                            <div className="hidden md:block md:w-1/3 relative h-40">
                                <div className="absolute right-0 top-0 w-20 h-20 border border-secondary rounded-sm" />
                                <div className="absolute right-10 top-10 w-20 h-20 border border-secondary rounded-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
