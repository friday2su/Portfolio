"use client";

import { motion } from "framer-motion";

export default function Quote() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-2xl"
                >
                    <div className="border border-secondary p-8 relative bg-background z-10 rounded-md">
                        <span className="absolute -top-3 left-4 bg-background px-2 text-3xl text-secondary">"</span>
                        <h3 className="text-2xl font-medium">With great power comes great electricity bill</h3>
                        <span className="absolute -bottom-3 right-4 bg-background px-2 text-3xl text-secondary">"</span>
                    </div>
                    <div className="border border-secondary border-t-0 p-4 w-fit ml-auto relative rounded-b-md">
                        - Dr. Who
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
