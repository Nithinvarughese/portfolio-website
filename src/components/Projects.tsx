"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Github, ExternalLink, Folder } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
    {
        title: "YouTube Canada Trending Data Analysis",
        description: "An in-depth EDA of trending YouTube videos using Python, SQL, and Power BI. Uncovered key metrics driving engagement vs. raw views.",
        tech: ["Python", "SQL", "Power BI"],
        image: "/projects/youtube-preview-new.png",
        github: "https://github.com/Nithinvarughese/youtube_data_analytics",
        external: "https://github.com/Nithinvarughese/youtube_data_analytics"
    },
    {
        title: "Global COVID-19 Data Dashboard",
        description: "Interactive dashboard tracking global vaccination and case trends. Utilized SQL for data cleaning and Power BI for visualization.",
        tech: ["Power BI", "SQL", "Excel"],
        image: "/projects/covid-preview.jpg",
        github: "https://github.com/Nithinvarughese/Covid-19-Project",
        external: "https://github.com/Nithinvarughese/Covid-19-Project"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-24 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-12">
                    <span className="text-accent font-mono text-xl">04.</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Some Things I've Built</h2>
                    <div className="h-px bg-border flex-grow max-w-xs"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full flex flex-col bg-card border group overflow-hidden hover:border-accent/50 transition-all duration-300">
                                <div className="relative h-56 w-full overflow-hidden">
                                    <a href={project.external} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </a>
                                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-background/80 backdrop-blur-md rounded-full text-muted-foreground hover:text-accent transition-colors shadow-lg">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.external} target="_blank" rel="noopener noreferrer" className="p-2 bg-background/80 backdrop-blur-md rounded-full text-muted-foreground hover:text-accent transition-colors shadow-lg">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                                <CardHeader className="pt-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Folder className="text-accent w-5 h-5" />
                                        <span className="font-mono text-xs text-accent">Personal Project</span>
                                    </div>
                                    <a href={project.external} target="_blank" rel="noopener noreferrer">
                                        <CardTitle className="text-2xl group-hover:text-accent transition-colors">{project.title}</CardTitle>
                                    </a>
                                    <CardDescription className="text-muted-foreground mt-4 leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="mt-auto pt-0 pb-6">
                                    <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground mb-6">
                                        {project.tech.map(t => (
                                            <li key={t} className="flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="outline" size="sm" className="w-full text-accent border-accent hover:bg-accent/10" asChild>
                                        <a href={project.external} target="_blank" rel="noopener noreferrer">
                                            View Project
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
