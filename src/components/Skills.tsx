"use client";

import { motion } from "framer-motion";
import {
    SiPython,
    SiR,
    SiHtml5,
    SiTableau,
    SiGit,
    SiLinux,
    SiPostgresql,
    SiDocker,
    SiJavascript,
    SiStreamlit,
    SiDbt,
    SiSqlalchemy,
    SiApacheairflow,
    SiPostman,
} from "react-icons/si";
import { FaFileExcel, FaDatabase, FaCloud } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
    {
        title: "Analysis & Visualization",
        skills: [
            { name: "Excel", icon: FaFileExcel, color: "#217346" },
            { name: "Power BI", icon: FaMicrosoft, color: "#F2C811" },
            { name: "Tableau", icon: SiTableau, color: "#E97627" },
            { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
            { name: "Matplotlib", icon: SiPython, color: "#3776AB" },
            { name: "Seaborn", icon: SiPython, color: "#3F4F75" },
        ],
    },
    {
        title: "Programming",
        skills: [
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "SQL", icon: FaDatabase, color: "#CC2927" },
            { name: "R", icon: SiR, color: "#276DC3" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" },
        ],
    },
    {
        title: "Data Engineering",
        skills: [
            { name: "ETL Pipelines", icon: SiApacheairflow, color: "#017CEE" },
            { name: "dbt", icon: SiDbt, color: "#FF694B" },
            { name: "SQLAlchemy", icon: SiSqlalchemy, color: "#D71F00" },
            { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        ],
    },
    {
        title: "Cloud & Tools",
        skills: [
            { name: "Microsoft Azure", icon: FaCloud, color: "#0078D4" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "Linux/Unix", icon: SiLinux, color: "#FCC624" },
            { name: "VS Code", icon: VscVscode, color: "#007ACC" },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 md:px-24 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-16">
                    <span className="text-accent font-mono text-xl">02.</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Skills</h2>
                    <div className="h-px bg-border flex-grow max-w-xs"></div>
                </div>

                <div className="space-y-16">
                    {skillCategories.map((category, catIndex) => (
                        <div key={category.title}>
                            <h3 className="text-xl font-semibold text-muted-foreground mb-8 flex items-center gap-3">
                                {category.title}
                                <span className="h-px bg-border flex-grow"></span>
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                                        whileHover={{ y: -5 }}
                                        className="group relative flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                                    >
                                        <div className="text-4xl mb-3 text-muted-foreground group-hover:scale-110 transition-transform duration-300" style={{ color: skill.color }}>
                                            <skill.icon />
                                        </div>
                                        <span className="text-sm font-medium text-foreground text-center">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
