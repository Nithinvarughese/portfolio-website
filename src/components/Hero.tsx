"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 md:px-24 pt-20 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left Column: Text */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="space-y-6 order-2 lg:order-1"
                >
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                        }}
                        className="text-accent font-mono text-lg"
                    >
                        Hi, my name is
                    </motion.p>
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                        }}
                        className="text-5xl md:text-7xl font-bold text-foreground tracking-tight"
                    >
                        Nithin Varughese.
                    </motion.h1>
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                        }}
                        className="text-4xl md:text-6xl font-bold text-muted-foreground"
                    >
                        Data Scientist Intern.
                    </motion.h2>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                        }}
                        className="max-w-xl text-muted-foreground text-lg leading-relaxed"
                    >
                        I am a Data Scientist Intern specializing in data cleaning, visualization, and building predictive models. Currently, I'm focused on deriving insights from complex datasets.
                    </motion.p>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                        }}
                        className="pt-8 flex gap-4"
                    >
                        <Button size="lg" className="text-lg h-14 px-8 text-accent border-accent hover:bg-accent/10" asChild>
                            <a href="#projects">Check out my work!</a>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg h-14 px-8" asChild>
                            <a href="https://drive.google.com/file/d/1AuoYWbCzGgsKpqcyAbFio5gbIZIoMKgh/view?usp=share_link" target="_blank" rel="noopener noreferrer">Resume</a>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Right Column: Profile Picture */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/20 p-2">
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary bg-muted shadow-[0_0_30px_rgba(197,160,89,0.3)]">
                            <img
                                src="/profile.jpg"
                                alt="Nithin Varughese"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
