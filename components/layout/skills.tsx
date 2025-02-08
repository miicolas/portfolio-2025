import Image from "next/image"
import Badge from "../ui/badge-section"
import Card from "../ui/card"
import { SkillData } from "@/lib/types"
import { getSkills } from "@/action/(skills)/get-skills/action"

export const Skill = ({ className, logo, name, style }: { className: string, logo: string, name: string, style?: React.CSSProperties }) => {
    return (
     
        <Card className={`p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 absolute w-fit h-fit ${className} w-16 h-16`} style={style}>
            <Image src={logo} alt={name} width={1200} height={1200} className=" m-auto max-w-full max-h-full object-contain" />
        </Card> 
    )
}

export default async function Skills() {



    const data = await getSkills();

    const positionLogo = (index: number) => [
        { top: '20rem', left: '5rem' },
        { top: '10rem', right: '5rem' },
        { top: '5rem', left: '25rem' },
        { top: '10rem', left: '10rem' },
        { top: '6rem', right: '15rem' },
        { top: '30rem', left: '25rem' },
        { top: '30rem', right: '20rem' },
    ][index];

    return (
        <div className="py-32" id="skills">
            <Badge name="Skills" description="Skills reflects web passion and projects." />
            <div className="relative flex justify-center items-center py-32 lg:py-64">
                <p className=" text-center text-balance text-5xl leading-16">
                    I work with the <span className="font-light italic text-indigo-500 mr-2">most powerful</span> technologies to build the best products.
                </p>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-32 lg:h-16 opacity-40 blur-[50px] bg-indigo-500 rounded-full">
                </div>
                <div className="hidden lg:block">
                    {(data?.skills as SkillData[])?.map((skill, index) => (
                        <Skill
                            key={skill.id}
                            className={`absolute ${index % 2 === 0 ? 'animate-skill_1' : 'animate-skill_2'}`}
                            style={{ ...positionLogo(index), animationDelay: `${index * 0.1}s` }}
                            logo={skill.logo}
                            name={skill.name}
                        />
                    ))}
                </div>
            </div>

            <div className="lg:hidden flex items-center justify-center flex-wrap gap-8">
                {
                    (data?.skills as SkillData[])?.map((skill, index) => (
                        <Skill
                            key={skill.id}
                            className={`relative animate-none`}
                            logo={skill.logo}
                            name={skill.name}

                        />
                    ))
                }

            </div>
  
        </div>
    );
}
