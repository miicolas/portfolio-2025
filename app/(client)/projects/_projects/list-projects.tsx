import { ProjectData } from "@/lib/types";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/utils";

export default function ListProjects({ filterFrameworks, projects }: { filterFrameworks: string[], projects: ProjectData[] }) {
    return (
        <div>
            <div className="flex flex-col gap-4 h-[calc(100vh-40vh)]">
                {projects && 
                    (projects as ProjectData[])
                        .filter(project => 
                            !Array.isArray(filterFrameworks) ||
                            filterFrameworks.length === 0 ||
                            (project.tech_stack &&
                            project.tech_stack
                                .split(",")
                                .map(t => t.trim().toLowerCase())
                                .some(tech => filterFrameworks.includes(tech)))
                        )
                        .map((project: ProjectData) => {
                            const techStackArray = project.tech_stack
                                ? project.tech_stack.split(",").map(t => t.trim())
                                : [];

                            return (
                                <Link
                                    href={`/projects/${slugify(project.name)}/${project.id}`}
                                    key={project.id}
                                    className="p-4 w-full group relative"
                                >
                                    <h2 className="text-neutral-300 text-8xl group-hover:text-neutral-900 transition-colors duration-300">
                                        {project.name}
                                    </h2>
                                    <motion.div 
                                        className="hidden lg:group-hover:block absolute top-1/2 -translate-y-1/2 right-20 max-w-sm h-52 w-64 object-cover transition-all duration-300"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <div className="relative h-full w-full">
                                            {project.image_preview && (
                                                <Image
                                                    src={project.image_preview}
                                                    alt={project.name}
                                                    fill
                                                    className="aspect-square object-cover object-center rounded-lg"
                                                />
                                            )}
                
                                        </div>
                                        <div className="flex gap-2 flex-wrap mt-4">
                                            {techStackArray.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="text-neutral-300 text-sm border border-neutral-200 p-2 w-fit rounded-lg text-balance hover:text-neutral-900 transition-all duration-300 h-fit"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })
                }
            </div>
        </div>
    );
}