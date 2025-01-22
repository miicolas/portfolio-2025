'use client'

import ExperiencesDialog from "./experiences-dialog"
import { useState } from "react"

export default function Projects() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <ExperiencesDialog open={open} setOpen={setOpen} />
        </div>
    )
}