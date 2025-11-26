"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Set theme on document
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setTheme(theme === "dark" ? "light" : "dark");
            setTimeout(() => setIsAnimating(false), 800);
        }, 400);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
            <AnimatePresence>
                {isAnimating && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 3 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen rounded-full z-[9999] pointer-events-none"
                        style={{
                            backgroundColor: theme === "dark" ? "#f5f5f5" : "#1a1a1a",
                        }}
                    />
                )}
            </AnimatePresence>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
}
