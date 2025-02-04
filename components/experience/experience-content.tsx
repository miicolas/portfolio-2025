'use client'

import { useScroll, motion, useSpring } from "motion/react";
import { useRef, useState, useEffect } from "react";
import ExperienceList from "../experience/experience-list";
import { ExperienceData } from "@/lib/types";

export default function ExperienceContent({ experience }: { experience: ExperienceData[] }) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scaleProgress = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.2
    });
    return (
        <div className="relative mx-auto py-16" ref={containerRef}>
                <div className="absolute left-8 top-0 bottom-0 lg:left-1/2  w-1 z-10 mt-16">
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/0 via-indigo-200/80 to-indigo-100/0 rounded-full" />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-indigo-400/0 via-indigo-500/85 to-indigo-600 origin-top rounded-full"
                        style={{ scaleY: scaleProgress }}
                    />
                </div>


                <ExperienceList experience={experience as ExperienceData[]} isMobile={isMobile} />

            </div>
    )
}