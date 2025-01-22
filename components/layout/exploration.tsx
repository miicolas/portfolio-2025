"use client";

import { MoveDown, MoveRight } from "lucide-react";
import HorizontalScoll from "./horizontal-scroll";
import CardProject from "@/app/(client)/projects/_projects/card-project";
import MagneticButton from "@/components/ui/magnetic-button";
import Badge from "../ui/badge";
import { useGetProjectsStore } from "@/store/get-projects";
import { useEffect } from "react";
import { ProjectData } from "@/lib/types";
import { Suspense } from "react";
import CardProjectSkeleton from "../skeleton/card-project";

export default function Exploration() {

    const { data, error, fetchData } = useGetProjectsStore()

    useEffect(() => {
        fetchData()
    }, [fetchData])

    if (error) {
        return (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center text-sm text-red-600">
                Error loading Projects: {error}
            </div>
        )
    }


    return (
        <div className="py-16 mt-16" id="exploration">

            <Badge name="Exploration" description="Exploration allow me to discover new things and to learn new skills. I am always looking for new challenges and opportunities to grow." />

            <HorizontalScoll itemCount={3}>
                <Suspense fallback={<CardProjectSkeleton />}>
                    {(data?.content as ProjectData[])?.map((project: ProjectData) => (

                        <CardProject
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            description={project.description}
                            logo={project.logo}
                            image_preview={project.image_preview}
                            image_preview_secondary={project.image_preview_secondary}
                            link={project.link}
                            github={project.github}
                            tech_stack={project.tech_stack}
                            status={project.status}
                        />
                    ))}
                </Suspense>

                <div className="my-auto">
                    <MagneticButton>
                        <div className="flex flex-col items-center justify-center gap-4 text-center border border-neutral-500 rounded-full p-8 h-fit my-auto text-neutral-900 hover:bg-indigo-500/50 transition-all duration-300 ease-in-out">
                            <MoveRight size={32} className="hidden lg:block" />
                            <MoveDown size={32} className="block lg:hidden" />
                        </div>
                    </MagneticButton>
                </div>
            </HorizontalScoll>
        </div>
    )

}

