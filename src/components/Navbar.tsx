"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal } from "lucide-react";

const navLinks = [
    { name: "home", href: "/" },
    { name: "works", href: "/projects" },
    { name: "about-me", href: "/about" },
    { name: "contacts", href: "/contacts" },
];

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 py-6"
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:text-accent transition-colors">
                    <Terminal className="w-5 h-5 text-accent" />
                    <span>Friday</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-secondary hover:text-foreground transition-colors"
                        >
                            <span className="text-accent">#</span>{link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button (Placeholder) */}
                <div className="md:hidden text-foreground">
                    Menu
                </div>
            </div>
        </motion.nav>
    );
}
