"use client";

import { MoveDown, MoveRight } from "lucide-react";
import HorizontalScoll from "./horizontal-scroll";
import CardProject from "@/app/(client)/projects/_projects/card-project";
import MagneticButton from "@/components/ui/magnetic-button";
import Badge from "../ui/badge";
import { useGetProjectsStore } from "@/store/get-projects";
import { useEffect } from "react";
import { ProjectData } from "@/lib/types";


export default function Exploration() {

    const { data, loading, error, fetchData } = useGetProjectsStore()

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

    if (loading) {
        return (
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-center text-sm text-blue-600">
                Loading Projects...
            </div>
        )
    }

    return (
        <div className="py-16 mt-16" id="exploration">

            <Badge name="Exploration" description="Exploration allow me to discover new things and to learn new skills. I am always looking for new challenges and opportunities to grow." />

            <HorizontalScoll itemCount={3}>
                {data?.content?.map((project) => (
                    <CardProject
                        {
                            ...project as ProjectData
                        }
                        
                    />
                ))}

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

