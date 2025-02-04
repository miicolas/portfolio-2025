import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Pencil, Trash2, Eye } from "lucide-react"
import { toast } from "sonner"
import { ExperienceData } from "@/lib/types"
import { formatISODate } from '@/lib/utils'
import { deleteExperience } from "@/action/(experiences)/delete-experience/action"
import { getExperiences } from "@/action/(experiences)/get-experiences/action"

export default function ExperiencesTable({ experiences }: { experiences: ExperienceData[] }) {

    const handleDelete = async (id: number) => {
            try {
                await deleteExperience({ id });
                toast.success("Project deleted successfully");
                await getExperiences()
    
            }
            catch (error) {
                console.error("Error deleting project:", error);
                toast.error("Failed to delete project");
            }
        };

    return (
        <div className="rounded-lg border bg-card">
            <Table>
                <TableCaption className="pb-4">

                    Total Experiences: {experiences.length}

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

                    {(experiences as ExperienceData[])?.map((experience) => (
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
                    }
                </TableBody>
            </Table>
        </div>
    )
}