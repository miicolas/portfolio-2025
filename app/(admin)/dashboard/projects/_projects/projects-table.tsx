'use client'

import React, { useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { MoreHorizontal, Pencil, Trash2, Eye } from "lucide-react"
import { toast } from "sonner"
import { ProjectData } from "@/lib/types"
import { deleteProject } from "@/action/(projects)/delete-project/action"
import { getProjects } from "@/action/(projects)/get-projects/action"

export default function ProjectsTable({ projects }: { projects: ProjectData[] }) {

    const handleDelete = async (id: number) => {
        try {
            await deleteProject({ id });
            toast.success("Project deleted successfully");
            await getProjects()

        }
        catch (error) {
            console.error("Error deleting project:", error);
            toast.error("Failed to delete project");
        }
    };

    return (
        <div className="rounded-lg border bg-card">
            <Table>
                <TableHeader>
                    <TableRow className="hover:bg-transparent">
                        <TableHead className="px-2 w-[100px] font-semibold text-left">ID</TableHead>
                        <TableHead className="font-semibold text-left">Name</TableHead>
                        <TableHead className="font-semibold text-left">Description</TableHead>
                        <TableHead className="text-left font-semibold">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {projects.map((project: ProjectData) => (
                        <TableRow key={project.id} className="group">
                            <TableCell className="font-medium">{project.id}</TableCell>
                            <TableCell className="font-medium">{project.name}</TableCell>
                            <TableCell className="text-muted-foreground max-w-md truncate">
                                {project.description}
                            </TableCell>
                            <TableCell className="text-left">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="h-8 w-8 p-2"
                                        >
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-[160px]">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <Eye className="mr-2 h-4 w-4" />
                                            View Details
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Pencil className="mr-2 h-4 w-4" />
                                            Edit Project
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(project.id)}>
                                            <Trash2 className="mr-2 h-4 w-4" />
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))

                    }
                </TableBody>
            </Table>
        </div>
    )
}