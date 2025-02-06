'use client'

import Badge from "@/components/ui/badge-section";
import ContactForm from "@/components/form/contact-form";
import { motion } from "motion/react";

export default function Contact() {
    return (
        <div className="mt-16 space-y-8">

            <Badge name="Contact" description="Contact me to get in touch with me." />
            <motion.div className="border border-neutral-200 rounded-lg px-8 py-4 max-w-xl mx-auto shadow-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>

                <div className="flex items-center justify-between">
                    <h1>Compose email</h1>
                    <div className="flex space-x-2">
                        <div className="h-4 w-4 rounded-full bg-green-600 border border-neutral-300"></div>
                        <div className="h-4 w-4 rounded-full bg-orange-600 border border-neutral-300"></div>
                        <div className="h-4 w-4 rounded-full bg-red-600 border border-neutral-300"></div>
                    </div>
                </div>

                <ContactForm />
            </motion.div>


        </div>
    )
}
