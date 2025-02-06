import { MoveDown, MoveRight } from "lucide-react";
import HorizontalScoll from "./horizontal-scroll";
import CardProject from "@/app/(client)/projects/_projects/card-project";
import MagneticButton from "@/components/ui/magnetic-button";
import Badge from "../ui/badge-section";
import Link from "next/link";

import { ProjectData } from "@/lib/types";
import { getProjects } from "@/action/(projects)/get-projects/action";

export default async function Exploration() {

    const data = await getProjects();

    return (
        <div className="py-16 mt-16" id="exploration">

            <Badge name="Exploration" description="Exploration allow me to discover new things and to learn new skills. I am always looking for new challenges and opportunities to grow." />

            <div className="hidden lg:block">
                <HorizontalScoll itemCount={3}>
                    {(data?.projects as ProjectData[])?.filter((project: ProjectData) => project.image_preview !== null).slice(0, 3).map((project: ProjectData) => (
                        <CardProject
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            description={project.description}
                            image_preview={project.image_preview}
                            image_preview_secondary={project.image_preview_secondary}
                            link={project.link}
                            github={project.github}
                            tech_stack={project.tech_stack}
                        />
                    ))}
                    <div className="flex items-center justify-center h-fit flex-col mt-8">
                        <Link href="/projects" className="w-fit my-auto">
                            <MagneticButton>
                                <div className="flex w-fit flex-col items-center justify-center gap-4 text-center border border-neutral-500 rounded-full p-8 h-fit my-auto text-neutral-900 hover:bg-indigo-500/50 transition-all duration-300 ease-in-out">
                                    <MoveRight size={32} />
                                </div>
                            </MagneticButton>
                        </Link>
                        <p className='my-auto text-center text-xl text-neutral-500 px-4  py-8 group-hover:text-neutral-200 group-active:text-neutral-400 font-light -rotate-3'>
                            Tap to see more of my projects =)
                        </p>
                    </div>
                </HorizontalScoll>
            </div>

            <div className="lg:hidden space-y-16 mt-16">
                {(data?.projects as ProjectData[])?.filter((project: ProjectData) => project.image_preview !== null).slice(0, 3).map((project: ProjectData) => (
                    <CardProject
                        key={project.id}
                        id={project.id}
                        name={project.name}
                        description={project.description}
                        image_preview={project.image_preview}
                        image_preview_secondary={project.image_preview_secondary}
                        link={project.link}
                        github={project.github}
                        tech_stack={project.tech_stack}
                    />
                ))}
                <div className="flex items-center flex-col mt-8 relative">
                    <Link href="/projects" className="w-fit my-auto">
                        <MagneticButton>
                            <div className=" flex items-center justify-center gap-4 text-center border border-neutral-500 w-fit rounded-full p-6 text-neutral-900 hover:bg-indigo-500/50 transition-all duration-300 ease-in-out">
                                <MoveDown size={24} />
                            </div>
                        </MagneticButton>
                    </Link>
                    <p className='my-auto text-center text-xl text-neutral-500 px-4  py-8 group-hover:text-neutral-200 group-active:text-neutral-400 font-light -rotate-3'>
                        Tap to see my projects =)
                    </p>
                </div>
            </div>
        </div>
    )
}