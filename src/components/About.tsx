"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { GraduationCap, Brain, Code } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-24 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-12">
                    <span className="text-accent font-mono text-xl">01.</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
                    <div className="h-px bg-border flex-grow max-w-xs"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            Hello! I'm Nithin, an Aspiring Data Analyst at the University of Windsor. My interest in data started when I realized how powerful insights can be derived from raw numbers.
                        </p>
                        <p>
                            Fast-forward to today, I've had the privilege of gaining hands-on experience as a Data Scientist Intern at <span className="text-accent">Exeevo</span>. My main focus these days is building accessible, inclusive data products and digital experiences for a variety of clients.
                        </p>
                        <p>
                            I recently completed the <span className="text-accent">Google Data Analytics Professional Certificate</span>, reinforcing my foundation in data processing, analysis, and visualization.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <Card className="bg-card border-none">
                            <CardContent className="p-6 flex items-center gap-4">
                                <GraduationCap className="text-accent w-8 h-8" />
                                <div>
                                    <h4 className="text-foreground font-bold">Education</h4>
                                    <p className="text-sm text-muted-foreground">B.CS Computer Science (Honours Co-op)</p>
                                    <p className="text-xs text-muted-foreground">University of Windsor • 3rd Year</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-card border-none">
                            <CardContent className="p-6 flex items-center gap-4">
                                <Brain className="text-accent w-8 h-8" />
                                <div>
                                    <h4 className="text-foreground font-bold">Interests</h4>
                                    <p className="text-sm text-muted-foreground">Machine Learning, AI</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
