'use client'
import Card from "@/components/ui/card"
import Image from "next/image"
import { MoveDiagonal } from "lucide-react"
import Link from "next/link"
import { ProjectData } from "@/lib/types"
import {Badge} from "@/components/ui/badge"

export default function CardProject({ name, description, image_preview, image_preview_secondary, tech_stack, id }: ProjectData) {


    const techStackArray = tech_stack ? tech_stack.split(",").map(t => t.trim()) : [];


    return (
        <Card className="w-full min-h-[70vh] xl:w-[100vh] bg-neutral-100 rounded-lg p-10 overflow-hidden relative group flex flex-col justify-between">
            <div className="w-full flex flex-col lg:justify-between">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl lg:text-6xl text-neutral-900 dark:text-neutral-50">{name}</h1>
                    <p className="text-neutral-800 dark:text-neutral-50 text-lg lg:text-2xl text-balance font-light">{description.slice(0, 105)}...</p>
                </div>
                <div className="flex gap-2 justify-between items-center mt-4">
                    <div className="flex gap-2 flex-wrap">
                        {techStackArray.map((tech, index) => (
                            <Badge
                                key={index}
                                variant="secondary"
                                className="text-xs font-neueMontreal font-light border border-neutral-200 dark:border-neutral-800"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                    <div className="group-[button]: w-fit h-fit z-10  hover:bg-neutral-200 transition-all duration-200 ease-in-out rounded-md p-2">
                        <Link href={`/projects/${name}/${id}`}>
                            <MoveDiagonal
                                strokeWidth={1}
                                size={24}
                                className="text-neutral-500 dark:text-neutral-50 group-hover:text-neutral-900 dark:group-hover:text-neutral-300 transition-all duration-200 ease-in-out"
                            />
                        </Link>
                    </div>
                </div>

            </div>
            <div className="w-full h-full flex justify-center items-center relative z-10">

                {image_preview && (
                    <Card
                        className={`absolute -bottom-20 -right-20 -left-20 w-fit h-fit rotate-6 transition-all duration-300 ease-in-out shadow-sm group-hover:shadow-xl group-hover:shadow-indigo-200 group-hover:translate-x-4 group-hover:-translate-y-4`}
                    >
                        <Image
                            src={image_preview}
                            alt="Project image 1"
                            width={1080}
                            height={1080}
                            className="rounded-lg h-56 lg:h-80 w-auto object-cover"
                        />
                    </Card>
                )}
                {image_preview_secondary && (
                    <Card
                        className={`absolute -bottom-20 -right-20 w-fit h-fit -rotate-3 transition-all duration-300 ease-in-out shadow-sm group-hover:shadow-xl group-hover:shadow-indigo-200 group-hover:-translate-x-4 group-hover:-translate-y-4 hidden lg:block`}
                    >
                        <Image
                            src={image_preview_secondary}
                            alt="Project image 2"
                            width={1080}
                            height={1080}
                            className="rounded-lg h-56 lg:h-80 w-auto object-cover"
                        />
                    </Card>
                )}
            </div>
        </Card>
    )
}