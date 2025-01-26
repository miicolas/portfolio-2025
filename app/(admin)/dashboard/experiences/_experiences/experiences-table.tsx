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
import { MoreHorizontal, Pencil, Trash2, Eye } from "lucide-react"
import { useEffect } from "react"
import { useGetExperiencesStore } from "@/store/get-experiences"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "sonner"
import Image from 'next/image';
import { ExperienceData } from '@/lib/types';

export default function ExperiencesTable() {
    const { data, loading, error, fetchData } = useGetExperiencesStore()

    useEffect(() => {
        fetchData()
    }, [fetchData])

    if (error) {
        return (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center text-sm text-red-600">
                Error loading experiences: {error}
            </div>
        )
    }

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`/api/delete-experience`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id,
                }),
            });
            const data = await response.json();
            toast.success(data.message);
            fetchData();
        }
        catch (error) {
            console.error("Error deleting experience:", error);
            toast.error("Failed to delete experience");
        }
    };

    return (
        <div className="rounded-lg border bg-card">
            <Table>
                <TableCaption className="pb-4">
                    {loading ? (
                        <Skeleton className="h-4 w-48 mx-auto" />
                    ) : (
                        `Total Experiences: ${data?.content?.length || 0}`
                    )}
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
                    {loading ? (
                        [1, 2, 3].map((i) => (
                            <TableRow key={i}>
                                <TableCell><Skeleton className="h-4 w-8" /></TableCell>
                                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                <TableCell><Skeleton className="h-4 w-48" /></TableCell>
                                <TableCell><Skeleton className="h-8 w-8 rounded-full" /></TableCell>
                                <TableCell><Skeleton className="h-8 w-8 ml-auto" /></TableCell>
                            </TableRow>
                        ))
                    ) : (
                        (data?.content as ExperienceData[])?.map((experience: ExperienceData) => (
                            <TableRow key={experience.id} className="group">
                                <TableCell className="font-medium">{experience.id}</TableCell>
                                <TableCell className="font-medium">{experience.company}</TableCell>
                                <TableCell className="text-muted-foreground max-w-md truncate">
                                    {experience.position}
                                </TableCell>
                                <TableCell>
                                    <div className="w-10 h-10 rounded-lg border bg-gray-50 p-1 flex items-center justify-center">
                                        <Image
                                            src={experience.logo}
                                            alt={`${experience.company} logo`}
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
                                            <DropdownMenuItem>
                                                <Pencil className="mr-2 h-4 w-4" />
                                                Edit Experience
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(Number(experience.id))}>
                                                <Trash2 className="mr-2 h-4 w-4" />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    )
}