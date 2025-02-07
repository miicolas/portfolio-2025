'use client'
import { BadgeData } from "@/lib/types";
import { motion } from "motion/react";

export default function BadgeSection({ description }: BadgeData) {
    return (

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

    )
}