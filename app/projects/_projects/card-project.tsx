'use client'
import  Card  from "@/components/ui/card"
import Image from "next/image"
import { MoveDiagonal } from "lucide-react"
import { useState } from "react"

const title = "Project title"
const description = "Project description"

export default function CardProject() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Card className="w-[70vw] h-[70vh] bg-neutral-100 rounded-lg p-10 overflow-hidden">
            <div className="w-full h-full flex justify-between" onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className="flex flex-col gap-4">
                    <h1 className="text-6xl font-bold text-neutral-900 dark:text-neutral-50">{title}</h1>
                    <p className="text-neutral-800 dark:text-neutral-50 text-2xl text-balance">{description}</p>
                </div>
                <div className="group w-fit h-fit">
                    <MoveDiagonal 
                        size={36} 
                        className="text-neutral-900 dark:text-neutral-50 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-all duration-200 ease-in-out group-hover:scale-110" 
                    />
                </div>
            </div>
            <div 
                className="w-full h-full flex justify-center items-center relative"
                
            >
                <Card 
                    className={`absolute top-0 left-0 w-fit h-fit rotate-6 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl ${
                        isHovered ? 'translate-x-4 -translate-y-4' : ''
                    }`}
                >
                    <Image 
                        src="https://nicolas-becharat.com/_next/image?url=%2Fimages%2Fprojects%2Flearn404.png&w=828&q=75"
                        alt="Project image 1" 
                        width={1080}
                        height={320}
                        className="rounded-lg h-96 w-auto object-cover" 
                    />
                </Card>
                <Card 
                    className={`absolute top-0 -right-20 w-fit h-fit -rotate-3 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl ${
                        isHovered ? '-translate-x-4 -translate-y-4' : ''
                    }`}
                >
                    <Image 
                        src="https://nicolas-becharat.com/_next/image?url=%2Fimages%2Fprojects%2Flearn404.png&w=828&q=75"
                        alt="Project image 2" 
                        width={400}
                        height={320}
                        className="rounded-lg h-72 w-auto object-cover" 
                    />
                </Card>
            </div>
        </Card>
    )
}