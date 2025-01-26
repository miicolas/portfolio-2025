import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { formatISODate } from "@/lib/utils";



interface ExperienceItemProps {
    experience: {
        id: string;
        company: string;
        position: string;
        startDate: Date;
        endDate: Date | null;
        logo: string;

    };
    index: number;
    isMobile: boolean;
}


export default function ExperienceItem({ experience, index, isMobile }: ExperienceItemProps) {
    const isLeft = index % 2 === 0;
    return (
        <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: isMobile ? 50 : isLeft ? -50 : 50 }}
            whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: index * 0.15
                }
            }}
            viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
            className={`relative flex ${isMobile ? 'flex-col' : 'items-center'} mb-10 lg:mb-24 ${isMobile ? '' : (isLeft ? 'justify-start' : 'justify-end')}`}
        >

            <motion.div
                className={`w-full lg:w-5/12 ${isMobile ? 'pl-16' : isLeft ? 'pr-16' : 'pl-16'} relative`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: index * 0.2
                    }
                }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="group relative rounded-xl border border-transparent hover:border-neutral-200 hover:bg-neutral-100 p-6 transition-all duration-300 ease-in-out  shadow-indigo-400"
                >

                    <div className="flex flex-col space-y-3">
                        
                        <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">

                                <h3 className="text-xl">
                                    {experience.company}
                                </h3>
                            </div>
                        </div>

                        <p className="text-neutral-800 dark:text-neutral-50 text-lg font-medium text-balance">
                            {experience.position}
                        </p>
                        <Separator className="w-16 group-hover:w-24 transition-all duration-200 ease-in-out" />
                        <div className="flex justify-between space-x-2 text-neutral-600">
                            <p className="text-sm font-light">
                                {formatISODate(experience.startDate)} - {experience.endDate ? formatISODate(experience.endDate) : "Present"}
                            </p>
                            <Link href={`/experience/${experience.id}`} className="group-[button] bg-transparent text-neutral-500 dark:text-neutral-50 group-hover:text-neutral-900 rounded-full group-hover:bg-neutral-200 p-2 dark:group-hover:text-neutral-300 transition-all duration-200 ease-in-out">
                                <ExternalLink strokeWidth={1} size={24} className="text-neutral-500 dark:text-neutral-50 group-hover:text-neutral-900 dark:group-hover:text-neutral-300 transition-all duration-200 ease-in-out" />
                            </Link>

                        </div>
                    </div>


                </motion.div>

                <motion.div
                    className={`absolute ${isMobile ? 'hidden' : isLeft ? '-left-24 top-64 -rotate-6' : '-right-24 bottom-64 rotate-3'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: index * 0.3
                        }
                    }}
                    whileHover={{
                        scale: 1.05,
                        rotate: isLeft ? -6 : 12,
                        transition: { duration: 0.3 }
                    }}
                    viewport={{ once: true }}
                >
                    <div className="relative">
                        <Image
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            width={140}
                            height={140}
                            className="rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg" />
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}