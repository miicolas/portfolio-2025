import { MoveDown, MoveRight } from "lucide-react";
import HorizontalScoll from "./horizontal-scroll";
import CardProject from "@/app/(client)/projects/_projects/card-project";
import MagneticButton from "@/components/ui/magnetic-button";
import Badge from "../ui/badge";

import { ProjectData } from "@/lib/types";
import { getProjects } from "@/action/(projects)/get-projects/action";

export default async function Exploration() {

    const data = await getProjects();

    return (
        <div className="py-16 mt-16" id="exploration">

            <Badge name="Exploration" description="Exploration allow me to discover new things and to learn new skills. I am always looking for new challenges and opportunities to grow." />

            <div className="hidden lg:block">
                <HorizontalScoll itemCount={3}>
                    {(data?.projects as ProjectData[])?.slice(0, 3).map((project: ProjectData) => (
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
                    <div className="my-auto">
                        <MagneticButton>
                            <div className="flex flex-col items-center justify-center gap-4 text-center border border-neutral-500 rounded-full p-8 h-fit my-auto text-neutral-900 hover:bg-indigo-500/50 transition-all duration-300 ease-in-out">
                                <MoveRight size={32} />
                            </div>
                        </MagneticButton>
                    </div>
                </HorizontalScoll>
            </div>

            <div className="lg:hidden space-y-16 mt-16">
                {(data?.projects as ProjectData[])?.slice(0, 3).map((project: ProjectData) => (
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
                <div className="flex justify-center mt-8">
                    <MagneticButton>
                        <div className="flex items-center justify-center gap-4 text-center border border-neutral-500 rounded-full p-6 text-neutral-900 hover:bg-indigo-500/50 transition-all duration-300 ease-in-out">
                            <MoveDown size={24} />
                        </div>
                    </MagneticButton>
                </div>
            </div>
        </div>
    )
}