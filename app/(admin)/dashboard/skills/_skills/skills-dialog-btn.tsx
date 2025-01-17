'use client'

import SkillsDialog from "./skills-dialog"
import { useState } from "react"

export default function Skills() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <SkillsDialog open={open} setOpen={setOpen} />
        </div>
    )
}