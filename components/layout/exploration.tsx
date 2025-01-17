"use client";

import { MoveDown, MoveRight } from "lucide-react";
import HorizontalScoll from "./horizontal-scroll";
import CardProject from "@/app/projects/_projects/card-project";
import MagneticButton from "@/components/ui/magnetic-button";
import Badge from "../ui/badge";


export default function Exploration() {

    return (
        <div className="py-16 mt-16" id="exploration">

            <Badge name="Exploration" description="Exploration allow me to discover new things and to learn new skills. I am always looking for new challenges and opportunities to grow." />

            <HorizontalScoll itemCount={3}>
                <CardProject />
                <CardProject />
                <CardProject />

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

