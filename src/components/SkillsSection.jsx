import { useState } from "react"
import { cn } from "../lib/utils";

const skills = [
    // Front End
    {name: "HTML/CSS", level: 95, category:"Front End"},
    {name: "JavaScript", level: 85, category:"Front End"},
    {name: "React", level: 85, category:"Front End"},
    {name: "Tailwind CSS", level: 90, category:"Front End"},
    {name: "JQuery", level: 85, category:"Front End"},
    {name: "Next.js", level: 80, category:"Front End"},
    {name: "Semantic UI", level: 95, category:"Front End"},
    {name: "Bootstrap", level: 95, category:"Front End"},

    // Project Management
    {name: "Project Planning & Scheduling", level: 85, category:"Project Management"},
    {name: "Risk Management", level: 85, category:"Project Management"},
    {name: "Stakeholder Management", level: 85, category:"Project Management"},
    {name: "Project Lifecycle", level: 85, category:"Project Management"},
    {name: "Sprint Planning", level: 85, category:"Project Management"},
    {name: "Task Prioritization", level: 85, category:"Project Management"},
    {name: "Time Management", level: 85, category:"Project Management"},
    {name: "Conflict Resolution", level: 85, category:"Project Management"},

    // Tools
    {name: "Git", level: 70, category:"Tools"},
    {name: "Figma", level: 80, category:"Tools"},
    {name: "VS Code", level: 95, category:"Tools"},
    {name: "Adobe Photoshop", level: 75, category:"Tools"},
    {name: "Adobe XD", level: 75, category:"Tools"},
    {name: "JIRA", level: 95, category:"Tools"},
    {name: "Confluence", level: 90, category:"Tools"},
    {name: "Microsoft Excel", level: 80, category:"Tools"},
]

const categories = ["all", "Front End", "Project Management", "Tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-3xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary" 
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                                    style={{ width: skill.level + "%"}}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}