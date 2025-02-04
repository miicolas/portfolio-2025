'use client'

import Badge from "@/components/ui/badge-section";
import ContactForm from "@/components/form/contact-form";
import { motion } from "motion/react";

export default function Contact() {
    return (
        <div className="mt-16 space-y-8">

            <Badge name="Contact" description="Contact me to get in touch with me." />
            <motion.div className="border border-neutral-200 rounded-lg px-8 py-4 max-w-xl mx-auto shadow-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h1>Compose email</h1>
                <ContactForm />
            </motion.div>


        </div>
    )
}
