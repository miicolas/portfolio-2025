'use client'
import Card from "@/components/ui/card"
import Image from "next/image"
import { MoveDiagonal } from "lucide-react"
import Link from "next/link"

const title = "Project title"
const description = "Project description"

export default function CardProject() {

    return (
        <Card className="w-[70vw] h-[70vh] xl:w-[100vh] bg-neutral-100 rounded-lg p-10 overflow-hidden relative group">
            <div className="w-full h-full flex justify-between">
                <div className="flex flex-col gap-4">
                    <h1 className="text-6xl text-neutral-900 dark:text-neutral-50">{title}</h1>
                    <p className="text-neutral-800 dark:text-neutral-50 text-2xl text-balance font-light">{description}</p>
                </div>
                <div className="group-[button]: w-fit h-fit z-10">
                    <Link href="/projects/1">
                        <MoveDiagonal
                            strokeWidth={1}
                            size={36}
                            className="text-neutral-500 dark:text-neutral-50 group-hover:text-neutral-900 dark:group-hover:text-neutral-300 transition-all duration-200 ease-in-out"
                        />
                    </Link>
                </div>
            </div>
            <div
                className="w-full h-full flex justify-center items-center relative z-10"
            >
                <Card
                    className={`absolute top-10 lg:top-0 -left-20 w-fit h-fit rotate-6 transition-all duration-300 ease-in-out shadow-sm group-hover:shadow-xl group-hover:shadow-indigo-200 group-hover:translate-x-4 group-hover:-translate-y-4 `}
                >
                    <Image
                        src="https://nicolas-becharat.com/_next/image?url=%2Fimages%2Fprojects%2Flearn404.png&w=828&q=75"
                        alt="Project image 1"
                        width={1080}
                        height={320}
                        className="rounded-lg h-64 w-auto object-cover"
                    />
                </Card>
                <Card
                    className={`absolute top-0 -right-20 w-fit h-fit -rotate-3 transition-all duration-300 ease-in-out shadow-sm group-hover:shadow-xl group-hover:shadow-indigo-200 group-hover:-translate-x-4 group-hover:-translate-y-4 hidden lg:block`}
                >
                    <Image
                        src="https://nicolas-becharat.com/_next/image?url=%2Fimages%2Fprojects%2Flearn404.png&w=828&q=75"
                        alt="Project image 2"
                        width={1080}
                        height={320}
                        className="rounded-lg h-64 w-auto object-cover"
                    />
                </Card>
            </div>

        </Card>
    )
}