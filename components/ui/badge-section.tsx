'use client'
import { BadgeData } from "@/lib/types";
import { motion } from "motion/react";

export default function Badge({ name, description }: BadgeData) {
    return (
        <div className="flex flex-col items-center gap-4">
            {/* <motion.div
                className="w-fit px-8 py-2 [background:linear-gradient(45deg,#fff,theme(colors.neutral.200))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.neutral.200/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.neutral.200))_border-box] rounded-lg border-2 border-transparent animate-border cursor-no-drop"
                initial={{
                    opacity: 0,
                    scale: 0.8,
                    y: 20
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 80,
                        damping: 15,
                        mass: 1,
                        delay: 0.2
                    }
                }}
                viewport={{
                    once: true,
                    margin: "-50px"
                }}

            >
                <span className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    {name}
                </span>
            </motion.div> */}
            <motion.p
                className="text-2xl font-neueMontreal font-medium text-neutral-800 dark:text-neutral-50 text-balance text-center max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 80,
                        damping: 15,
                        delay: 0.3
                    }
                }}
                viewport={{ once: true }}
            >
                {description}
            </motion.p>
        </div>
    )
}