'use client'

import Image from "next/image"
import Badge from "../ui/badge"
import Card from "../ui/card"
import { useEffect } from "react"
import { useGetSkillsStore } from "@/store/get-skills"

export const Skill = ({ className, logo, name, style }: { className: string, logo: string, name: string, style: React.CSSProperties }) => {
    return (
        <Card className={`p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 absolute w-fit h-fit ${className} w-16 h-16`} style={style}>
            <Image src={logo} alt={name} width={1200} height={1200} className=" m-auto max-w-full max-h-full object-contain" />
        </Card>
    )
}

export default function Skills() {
    const { data, loading, error, fetchData } = useGetSkillsStore();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (error) {
        return (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center text-sm text-red-600">
                Error loading skills: {error}
            </div>
        );
    }

    const positionLogo = (index: number) => [
        { top: '10rem', left: '5rem' },
        { top: '2rem', right: '5rem' },
        { top: '3rem', left: '0rem' },
        { top: '9rem', right: '1rem' },
        { top: '2rem', right: '5rem' },
    ][index % 2];

    return (
        <div className="py-16" id="skills">

            <Badge name="Skills" description="Skills is the reflect of my developer life and my passion for the web. I have worked on many projects and I am proud of the results." />
            <div className="relative flex justify-center items-center py-64">
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-balance text-5xl leading-16">
                    I work with the <span className="font-light italic text-indigo-500 mr-2">most powerful</span> technologies to build the best products.
                </p>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-16 opacity-40 blur-[50px] bg-indigo-500 rounded-full">
                </div>

                {data?.content?.map((skill, index) => (
                    <Skill
                        key={skill.id}
                        className={`absolute ${index % 2 === 0 ? 'animate-skill_1' : 'animate-skill_2'}`}
                        style={positionLogo(index)}
                        logo={skill.logo}
                        name={skill.name}
                    />
                ))}

            </div>
        </div>
    );
}
