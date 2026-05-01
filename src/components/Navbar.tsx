"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import StarBorder from "./StarBorder";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-24 flex items-center justify-between">
                <a href="#" className="font-mono text-accent font-bold text-xl">
                    Nithin.V
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-mono text-muted-foreground hover:text-accent transition-colors"
                        >
                            <span className="text-accent mr-1">0{i + 1}.</span>
                            {link.name}
                        </a>
                    ))}
                    <StarBorder color="var(--accent)" speed="5s" className="ml-4 p-0 border-none bg-transparent">
                        <Button variant="outline" size="sm" className="text-accent border-none bg-transparent hover:bg-transparent shadow-none" asChild>
                            <a href="/Nithin_Varughese_resume.pdf">Resume</a>
                        </Button>
                    </StarBorder>
                </nav>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        className="text-accent"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-[70px] bg-background z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-xl font-mono text-muted-foreground hover:text-accent transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <StarBorder color="var(--accent)" speed="5s" className="p-0 border-none bg-transparent">
                            <Button variant="outline" size="lg" className="text-accent border-none bg-transparent hover:bg-transparent shadow-none" asChild>
                                <a href="/Nithin_Varughese_resume.pdf">Resume</a>
                            </Button>
                        </StarBorder>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
