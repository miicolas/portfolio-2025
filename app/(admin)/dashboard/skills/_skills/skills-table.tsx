'use client'

import React from 'react';
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
import { MoreHorizontal, Trash2, Eye } from "lucide-react"
import { toast } from "sonner"
import Image from 'next/image';
import { SkillData } from '@/lib/types';
import { deleteSkill } from '@/action/(skills)/delete-skill/action';
import { getSkills } from '@/action/(skills)/get-skills/action';

export default function SkillsTable({ skills }: { skills: SkillData[] }) {


    const handleDelete = async (id: number) => {
        try {
            await deleteSkill({ id });
            toast.success("Skill deleted successfully");
            await getSkills()

        }
        catch (error) {
            console.error("Error deleting skill:", error);
            toast.error("Failed to delete skill");
        }
    };

    return (
        <div className="rounded-lg border bg-card">
            <Table>
                <TableCaption className="pb-4">
                    {
                        `Total Skills: ${skills?.length || 0}`
                    }
                </TableCaption>
                <TableHeader>
                    <TableRow className="hover:bg-transparent">
                        <TableHead className="px-2 w-[100px] font-semibold text-left">ID</TableHead>
                        <TableHead className="font-semibold text-left">Name</TableHead>
                        <TableHead className="font-semibold text-left">Description</TableHead>
                        <TableHead className="font-semibold text-left">Logo</TableHead>
                        <TableHead className="text-left font-semibold">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {(skills as SkillData[])?.map((skill: SkillData) => (
                        <TableRow key={skill.id} className="group">
                            <TableCell className="font-medium">{skill.id}</TableCell>
                            <TableCell className="font-medium">{skill.name}</TableCell>
                            <TableCell className="text-muted-foreground max-w-md truncate">
                                {skill.description}
                            </TableCell>
                            <TableCell>
                                <div className="w-10 h-10 rounded-lg border bg-gray-50 p-1 flex items-center justify-center">
                                    <Image
                                        src={skill.logo}
                                        alt={`${skill.name} logo`}
                                        className="max-w-full max-h-full object-contain"
                                        width={100}
                                        height={100}
                                    />
                                </div>
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
                                        <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(skill.id)}>
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