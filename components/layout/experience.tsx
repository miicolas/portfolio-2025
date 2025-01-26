'use client'

import { useScroll, motion, useSpring } from "motion/react";
import { useRef, useState, useEffect } from "react";
import ExperienceHeader from "../experience/experience-header";
import ExperienceList from "../experience/experience-list";
import { useGetExperiencesStore } from "@/store/get-experiences";
import { ExperienceData } from "@/lib/types";

export default function Experience() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    const { data, loading, error, fetchData } = useGetExperiencesStore();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scaleProgress = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.2
    });

    console.log(data);

    return (
        <div className="py-16 max-w-4xl mx-auto space-y-16" id="experience">
            <ExperienceHeader />

            <div className="relative mx-auto py-16" ref={containerRef}>
                <div className="absolute left-8 top-0 bottom-0 lg:left-1/2  w-1 z-10 mt-16">
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/0 via-indigo-200/80 to-indigo-100/0 rounded-full" />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-indigo-400/0 via-indigo-500/85 to-indigo-600 origin-top rounded-full"
                        style={{ scaleY: scaleProgress }}
                    />
                </div>
                <ExperienceList experience={data?.content as ExperienceData[]} isMobile={isMobile} />
            </div>
        </div>
    );
}