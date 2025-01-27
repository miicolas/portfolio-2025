"use client";
import { ProjectData } from "@/lib/types";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useGetProjectsStore } from "@/store/get-projects";
import Image from "next/image";

export default function ListProjects() {
    const { data, loading, error, fetchData } = useGetProjectsStore();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data?.content || data.content.length === 0) {
        return <div>No projects found</div>;
    }

    return (
        <div>
            <div className="flex flex-col gap-4">
                {(data.content as ProjectData[]).map((project: ProjectData) => (
                    <>
                        <motion.div key={project.id} className="p-4 w-full group">
                            <h2 className="text-neutral-300 text-8xl group-hover:text-neutral-900 transition-colors duration-300">
                                {project.name}
                            </h2>
                            <div className="hidden lg:group-hover:block absolute top-1/2 -translate-y-1/3 right-20 w-fit  h-fit object-cover transition-all duration-300">
                                <Image src={project.image_preview} alt={project.name} width={200} height={200} />
                                <p>{project.description}</p>
                            </div>
                        </motion.div>

                    </>

                ))}
            </div>
        </div>
    );
}