"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import StarBorder from "./StarBorder";
import LiquidEther from "./LiquidEther";

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
                        Data Scientist & Analyst.
                    </motion.h2>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                        }}
                        className="max-w-xl text-muted-foreground text-lg leading-relaxed"
                    >
                        I am a Data Scientist & Analyst specializing in data cleaning, visualization, and building predictive models. Currently, I'm focused on deriving insights from complex datasets.
                    </motion.p>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                        }}
                        className="pt-8 flex gap-4"
                    >
                        <StarBorder color="var(--accent)" speed="5s" className="p-0 border-none bg-transparent">
                            <Button size="lg" className="text-lg h-14 px-8 text-accent border-none bg-transparent hover:bg-transparent shadow-none" asChild>
                                <a href="#projects">Check out my work!</a>
                            </Button>
                        </StarBorder>
                        <Button size="lg" variant="outline" className="text-lg h-14 px-8" asChild>
                            <a href="/Nithin_Varughese_resume.pdf">Resume</a>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Right Column: Profile Picture */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative order-1 lg:order-2 flex justify-center lg:justify-end w-full"
                >
                    <div style={{ width: '100%', height: 600, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="absolute inset-0 z-0">
                            <LiquidEther
                                colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                                mouseForce={20}
                                cursorSize={100}
                                isViscous
                                viscous={30}
                                iterationsViscous={32}
                                iterationsPoisson={32}
                                resolution={0.5}
                                isBounce={false}
                                autoDemo
                                autoSpeed={0.5}
                                autoIntensity={2.2}
                                takeoverDuration={0.25}
                                autoResumeDelay={3000}
                                autoRampDuration={0.6}
                                color0="#5227FF"
                                color1="#FF9FFC"
                                color2="#B19EEF"
                            />
                        </div>
                        <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/20 p-2">
                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary bg-muted shadow-[0_0_30px_rgba(197,160,89,0.3)]">
                                <img
                                    src="/profile.jpg"
                                    alt="Nithin Varughese"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
