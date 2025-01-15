import { motion } from "motion/react";
import { Calendar, Building2 } from "lucide-react";
import Image from "next/image";


interface ExperienceItemProps {
    experience: {
        id: string;
        company: string;
        position: string;
        startDate: string;
        endDate: string;
        image: string;
    }[];
    index: number;
    isMobile: boolean;
}


export default function ExperienceItem({ experience, index, isMobile } : ExperienceItemProps) {
    const isLeft = index % 2 === 0;
    return (
        <motion.div
            key={experience[index].id}
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
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: index * 0.15
                    }
                }}
                viewport={{ once: true }}
                className={`absolute w-5 h-5 bg-white shadow-lg border-2 border-indigo-500 rounded-full z-20 
                    ${isMobile ? 'left-8 -ml-2' : isLeft ? 'left-1/2 -translate-x-1/2 -ml-2' : 'right-1/2 translate-x-1/2 -mr-3'}
                    hover:scale-150 hover:bg-indigo-50 transition-all duration-300 ease-in-out 
                `}
            />

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
                    className="group relative cursor-pointer rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl"
                >
                    <div className="flex flex-col space-y-3">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-indigo-50 rounded-lg">
                                    <Building2 className="h-5 w-5 text-indigo-600 group-hover:text-indigo-800" />
                                </div>
                                <h3 className="text-xl font-bold text-indigo-600 group-hover:text-indigo-800 transition-colors">
                                    {experience[index].company}
                                </h3>
                            </div>
                        </div>

                        <p className="text-neutral-800 dark:text-neutral-50 text-lg font-medium">
                            {experience[index].position}
                        </p>

                        <div className="flex items-center space-x-2 text-neutral-600">
                            <Calendar className="h-4 w-4" />
                            <p className="text-sm">
                                {experience[index].startDate} - {experience[index].endDate}
                            </p>
                        </div>
                    </div>

                    <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-indigo-600 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                        initial={false}
                    />
                </motion.div>

                <motion.div
                    className={`absolute ${isMobile ? 'hidden': isLeft ? '-left-24 top-64 -rotate-6' : '-right-24 bottom-64 rotate-3'}`}
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
                            src={experience[index].image}
                            alt={`${experience[index].company} logo`}
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