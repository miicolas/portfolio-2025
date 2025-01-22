'use client'
import Card from "@/components/ui/card"
import { MoveDiagonal } from "lucide-react"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"


export default function CardProject() {

    return (
        <Card className="w-[70vw] h-[70vh] xl:w-[100vh] bg-neutral-100 rounded-lg p-10 overflow-hidden relative group">
            <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-4 w-full">
                    <Skeleton className="w-24 h-8" />
                    <Skeleton className="w-24 h-8" />
                </div>
                <div className="group-[button]: w-fit h-fit z-10 mt-10 lg:mt-0">
                    <Link href="/projects/">
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
                    <Skeleton className="w-[20vw] h-[40vh]" />
                </Card>
                <Card
                    className={`absolute top-0 -right-20 w-fit h-fit -rotate-3 transition-all duration-300 ease-in-out shadow-sm group-hover:shadow-xl group-hover:shadow-indigo-200 group-hover:-translate-x-4 group-hover:-translate-y-4 hidden lg:block`}
                >
                    <Skeleton className="w-[20vw] h-[40vh]" />
                </Card>
            </div>

        </Card>
    )
}