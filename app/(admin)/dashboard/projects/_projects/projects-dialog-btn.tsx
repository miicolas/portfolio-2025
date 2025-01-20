'use client'

import ProjectsDialog from "./projects-dialog"
import { useState } from "react"

export default function Projects() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <ProjectsDialog open={open} setOpen={setOpen} />
        </div>
    )
}