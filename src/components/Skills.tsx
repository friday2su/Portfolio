"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "Languages",
        items: ["TypeScript", "JavaScript", "Python", "Java", "C++"]
    },
    {
        category: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"]
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
        category: "Design",
        items: ["Figma", "Adobe XD", "UI/UX", "Prototyping", "Wireframing"]
    },
    {
        category: "Tools",
        items: ["Git", "Docker", "VS Code", "Linux", "Webpack"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold"><span className="text-accent">#</span>skills</h2>
                    <div className="h-px w-32 bg-accent" />
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Left Side - Key Strengths */}
                    <div className="hidden md:flex w-1/3 flex-col gap-6 text-secondary">
                        <div className="flex items-start gap-4">
                            <span className="text-accent text-xl">01.</span>
                            <div>
                                <h3 className="text-white font-bold mb-2">Full Stack Development</h3>
                                <p>Building scalable applications from front to back with modern technologies.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-accent text-xl">02.</span>
                            <div>
                                <h3 className="text-white font-bold mb-2">UI/UX Design</h3>
                                <p>Crafting intuitive and visually appealing user interfaces.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-accent text-xl">03.</span>
                            <div>
                                <h3 className="text-white font-bold mb-2">Performance Optimization</h3>
                                <p>Ensuring fast load times and smooth interactions.</p>
                            </div>
                        </div>
                    </div>

                    {/* Skills Grid (Right) */}
                    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="border border-secondary h-fit rounded-md overflow-hidden hover:border-accent transition-colors group"
                            >
                                <div className="p-2 border-b border-secondary font-bold text-white group-hover:text-accent transition-colors">
                                    {skill.category}
                                </div>
                                <div className="p-2 text-secondary flex flex-wrap gap-2">
                                    {skill.items.map((item, i) => (
                                        <span key={i} className="hover:text-white transition-colors cursor-default">{item}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
