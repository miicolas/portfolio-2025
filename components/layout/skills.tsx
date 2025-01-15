
import Image from "next/image"
import Badge from "../ui/badge"
import Card from "../ui/card"


export const Skill = ({className}: {className: string}) => {
    return (
        <Card className={`p-5 rounded-lg bg-neutral-100  dark:bg-neutral-900 absolute w-fit h-fit ${className}`}>
            <Image src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="Skills" width={1200} height={1200} className="w-12 h-12 m-auto" />
        </Card>
    )
}

export default function Skills() {
    return (
        <>
            <div className="py-16 mt-16" id="skills">
                <Badge name="Skills" description="Skills is the reflect of my developer life and my passion for the web. I have worked on many projects and I am proud of the results." />
            </div>
            <div className="relative flex justify-center items-center p-32">
                <Skill className="top-10 left-10 animate-skill_1"/>
                <Skill className="top-72 righ-10 animate-skill_2"/>
                <p className="text-center text-balance text-5xl font-medium leading-16">I work with the most powerful technologies to build the best products.</p>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-16 opacity-15 blur-[50px] bg-indigo-500 rounded-full"></div>
            </div>
        </>
    )
}
