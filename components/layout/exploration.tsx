"use client";

import { MoveDown, MoveRight } from "lucide-react";
import HorizontalScoll from "./horizontal-scroll";
import CardProject from "@/app/projects/_projects/card-project";
import MagneticButton from "@/components/ui/magnetic-button";
import { useScroll, motion, useSpring } from "motion/react";


export default function Exploration() {

    return (
        <div className="py-16 mt-16" id="exploration">


            <div className="flex flex-col items-center gap-4">
                <motion.div className="mx-auto border-2 border-indigo-500 px-8 py-2 text-center rounded-full w-fit bg-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.2
                        }
                    }}
                    viewport={{ once: true }}
                >
                    <span className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
                        Exploration
                    </span>

                </motion.div>
                <p className="text-2xl font-medium text-neutral-800 dark:text-neutral-50 text-balance text-center">Exploration allow me to discover new things and to learn new skills. I am always looking for new challenges and opportunities to grow.</p>
            </div>


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

