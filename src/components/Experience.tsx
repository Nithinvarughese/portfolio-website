"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const jobs = [
    {
        title: "Data Scientist Intern",
        company: "Exeevo",
        range: "Jan 2026 – Apr 2026",
        details: [
            "Deployed AI/ML models to generate predictive insights, integrating real-time interfaces for production decision-making across active data pipelines.",
            "Engineered high-throughput Azure Cosmos DB data pipelines processing 50k+ daily records, reducing query latency by 35% through systematic optimization.",
            "Automated Azure infrastructure monitoring using Python scripting, eliminating 20 hours of manual SRE overhead per month through proactive lifecycle management."
        ]
    },
    {
        title: "AI Club Society Member",
        company: "University of Windsor",
        range: "Sep 2023 – Present",
        details: [
            "Participating in AI/ML workshops to stay updated with the latest trends in artificial intelligence.",
            "Collaborating with peers on community data science projects and hackathons."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 md:px-24 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-12">
                    <span className="text-accent font-mono text-xl">03.</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Where I've Worked</h2>
                    <div className="h-px bg-border flex-grow max-w-xs"></div>
                </div>

                <div className="space-y-8 max-w-3xl">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="luxury-card p-6">
                                <CardHeader className="p-0 mb-4">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                                            <p className="text-accent text-lg font-mono">{job.company}</p>
                                        </div>
                                        <div className="text-sm font-mono text-muted-foreground bg-muted/50 px-3 py-1 rounded-full whitespace-nowrap">
                                            {job.range}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <ul className="space-y-3">
                                        {job.details.map((detail, i) => (
                                            <li key={i} className="flex items-start text-muted-foreground text-sm md:text-base">
                                                <span className="text-accent mr-3 mt-1.5 text-xs">▹</span>
                                                <span className="leading-relaxed">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
