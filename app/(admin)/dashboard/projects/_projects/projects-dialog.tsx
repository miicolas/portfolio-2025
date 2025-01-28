"use client";

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ProjectsForm from "@/components/form/projects-form"

export default function ProjectsDialog({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">Create Project</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md overflow-y-scroll max-h-screen">
                <DialogHeader>
                    <DialogTitle>Create project</DialogTitle>
                </DialogHeader>
                <ProjectsForm setOpen={setOpen} />
            </DialogContent>
        </Dialog>
    )
}