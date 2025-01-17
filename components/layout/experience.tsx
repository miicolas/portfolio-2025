'use client'

import { useScroll, motion, useSpring } from "motion/react";
import { useRef, useState, useEffect } from "react";
import ExperienceHeader from "../experience/experience-header";
import ExperienceList from "../experience/experience-list";

export default function Experience() {
    const containerRef = useRef(null as HTMLDivElement | null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const experience = [
        {
            id: "1",
            company: "La 404 Devinci",
            position: "Président",
            startDate: "August 2024",
            endDate: "Present",
            image: "https://s3-alpha-sig.figma.com/img/6dbf/88f5/36ddc416efe5fe42c4a0cf3ed50a53de?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjRWzUbowtsh8uzQ9rjnbU1WgyDd-fkSQIB0UeYNxbbeEWGjQ1wYBuCPC4s6aNopiZcTWw-LCCsxjiQU~vbb4QbSC2v~s7n-fPZgeQpQcAEAdsIhwlypmWDoq0tIXT4-sqSvrl1x3EMoKC7SWvc~sjTVxXIX4FjtUCTbSOPpkC~BuYB-Kit5Npx7IB1aPsVKqoZSSO9NrJsHhlv5f3Mx2XQcRzFQMRLaBD8Gj0f4SQn9nLvrCx52dqzg16XNTw8OSqIWANJKVioVyPsApq7a085mTfsWIDGjAuo7F-MDmYgz-oxMOZLB1l0HeH67q4IOOllZYH65UHOMDgcpKz8e4w__"
        },
        {
            id: "2",
            company: "PULV",
            position: "Moodle Administrator",
            startDate: "September 2024",
            endDate: "Present",
            image: "https://www.solutions-numeriques.com/wp-content/uploads/2023/03/leonard.jpg"
        },
        {
            id: "3",
            company: "Project grant - IIM",
            position: "Developer",
            startDate: "October 2024",
            endDate: "December 2024",
            image: "https://s3-alpha-sig.figma.com/img/6dbf/88f5/36ddc416efe5fe42c4a0cf3ed50a53de?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjRWzUbowtsh8uzQ9rjnbU1WgyDd-fkSQIB0UeYNxbbeEWGjQ1wYBuCPC4s6aNopiZcTWw-LCCsxjiQU~vbb4QbSC2v~s7n-fPZgeQpQcAEAdsIhwlypmWDoq0tIXT4-sqSvrl1x3EMoKC7SWvc~sjTVxXIX4FjtUCTbSOPpkC~BuYB-Kit5Npx7IB1aPsVKqoZSSO9NrJsHhlv5f3Mx2XQcRzFQMRLaBD8Gj0f4SQn9nLvrCx52dqzg16XNTw8OSqIWANJKVioVyPsApq7a085mTfsWIDGjAuo7F-MDmYgz-oxMOZLB1l0HeH67q4IOOllZYH65UHOMDgcpKz8e4w__"
        },
        {
            id: "4",
            company: "Cross-functional project - IIM",
            position: "Project Manager",
            startDate: "March 2024",
            endDate: "May 2024",
            image: "https://s3-alpha-sig.figma.com/img/6dbf/88f5/36ddc416efe5fe42c4a0cf3ed50a53de?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjRWzUbowtsh8uzQ9rjnbU1WgyDd-fkSQIB0UeYNxbbeEWGjQ1wYBuCPC4s6aNopiZcTWw-LCCsxjiQU~vbb4QbSC2v~s7n-fPZgeQpQcAEAdsIhwlypmWDoq0tIXT4-sqSvrl1x3EMoKC7SWvc~sjTVxXIX4FjtUCTbSOPpkC~BuYB-Kit5Npx7IB1aPsVKqoZSSO9NrJsHhlv5f3Mx2XQcRzFQMRLaBD8Gj0f4SQn9nLvrCx52dqzg16XNTw8OSqIWANJKVioVyPsApq7a085mTfsWIDGjAuo7F-MDmYgz-oxMOZLB1l0HeH67q4IOOllZYH65UHOMDgcpKz8e4w__"
        },
    ];

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
                <ExperienceList experience={experience} isMobile={isMobile} />
            </div>

        </div>
    );
}