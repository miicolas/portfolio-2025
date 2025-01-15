import { motion } from "motion/react";

export default function ExperienceHeader() {
    return (
        <div className="flex flex-col items-center gap-4">
            <motion.div className="mx-auto border-2 border-indigo-500 px-8 py-2 text-center rounded-full w-fit bg-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.2
                    }
                }}
                viewport={{ once: true }}
            >
                <span className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    Experiences
                </span>
            </motion.div>
            <p className="text-2xl font-medium text-neutral-800 dark:text-neutral-50 text-balance text-center">
                Experiences is the reflect of my developer life and my passion for the web. I have worked on many projects and I am proud of the results.
            </p>
        </div>
    );
}