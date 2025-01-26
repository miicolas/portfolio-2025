'use client'

import  { useEffect } from "react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Pencil, Trash2, Eye } from "lucide-react"
import { useGetExperiencesStore } from "@/store/get-experiences"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "sonner"
import { ExperienceData } from "@/lib/types"
import { formatISODate } from '@/lib/utils'

export default function ExperiencesTable() {
    const { data, loading, error, fetchData } = useGetExperiencesStore()

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`/api/delete-experience`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || "Failed to delete experience")
            }

            toast.success(data.message)            

        } catch (error) {
            console.error("Error deleting experience:", error)
            toast.error(error instanceof Error ? error.message : "Failed to delete experience")
        }
    }

    if (error) {
        return (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center text-sm text-red-600">
                Error loading experiences: {error}
            </div>
        )
    }

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
                        <TableHead className="font-semibold text-left">Company</TableHead>
                        <TableHead className="font-semibold text-left">Position</TableHead>
                        <TableHead className="font-semibold text-left">Start Date</TableHead>
                        <TableHead className="font-semibold text-left">End Date</TableHead>
                        <TableHead className="text-left font-semibold">Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {loading ? (
                        Array.from({ length: 3 }).map((_, i) => (
                            <TableRow key={i}>
                                {Array.from({ length: 6 }).map((_, j) => (
                                    <TableCell key={j}>
                                        <Skeleton className="h-4 w-full" />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        (data?.content as ExperienceData[])?.map((experience) => (
                            <TableRow key={experience.id} className="group">
                                <TableCell className="font-medium">{experience.id}</TableCell>
                                <TableCell className="font-medium">{experience.company}</TableCell>
                                <TableCell className="text-muted-foreground truncate max-w-[200px]">
                                    {experience.position}
                                </TableCell>
                                <TableCell>
                                    {formatISODate(experience.startDate)}
                                </TableCell>
                                <TableCell>
                                    {experience.endDate ? formatISODate(experience.endDate) : "Present"}
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-2">
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
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                className="text-red-600"
                                                onClick={() => handleDelete(Number(experience.id))}
                                            >
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