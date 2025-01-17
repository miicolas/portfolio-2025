'use client'

import Link from "next/link";
import { motion } from "motion/react";
import Logo from "../ui/logo";

export default function Footer() {

    const socialMedia = () => [
        { name: 'Github', href: 'https://github.com/nicolasbecharat', icon: 'github' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nicolas-becharat/', icon: 'linkedin' },

    ]

    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 w-full h-fit pt-16 pb-8">
            <div className="flex justify-between items-center">
                <p className="text-center text-balance text-2xl font-light leading-5">@nicolas-becharat</p>
                <div className="flex gap-4 items-end">
                    {socialMedia().map(({ name, href, icon }, index) => (
                        <Link key={name} href={href}>
                            <motion.div initial={{ rotate: index % 2 === 0 ? 3 : -3 }} whileHover={{ rotate: index % 2 === 0 ? 8 : -8, translateY: -20 }} whileTap={{ scale: 0.9 }} className="p-4 rounded-lg bg-neutral-200 flex items-center justify-center cursor-pointer origin-bottom-left shadow-lg">
                                <Logo src={`/${icon}.svg`} alt={name} className="w-8 h-8" width={256} height={256} />
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}