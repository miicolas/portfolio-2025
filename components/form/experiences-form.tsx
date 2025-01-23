"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import UploadFile from "../ui/upload-file"
import { useState } from "react"

const formSchema = z.object({
    company: z.string().min(1, {
        message: "Company must be at least 1 characters long",
    }).max(255, {
        message: "Company must be at most 255 characters long",
    }),
    position: z.string().min(1, {
        message: "Position must be at least 1 characters long",
    }).max(255, {
        message: "Position must be at most 255 characters long",
    }),
    startDate: z.date().max(new Date(), {
        message: "Start date must be in the past or today",
    }),
    endDate: z.date().refine(date => date >= new Date(), {
        message: "End date must be in the future or today",
    }),
    logo: z.string().url(),


})

interface ProjectsFormProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ExperiencesForm({ setOpen }: ProjectsFormProps) {
    const [logoUrl, setLogoUrl] = useState("");


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            company: "",
            position: "",
            startDate: new Date(),
            endDate: new Date(),
            logo: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        const { company, position, startDate, endDate, logo } = values;
        fetch("/api/add-project", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                company,
                position,
                startDate,
                endDate,
                logo,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                toast.success("Project added successfully");

                form.reset();
                setOpen(false);
            })
            .catch((error) => {
                console.error("Error adding project:", error);
                toast.error("Failed to add project");
            });
    }

    const handleLogoUploadComplete = (url: string) => {
        setLogoUrl(url);
        form.setValue("logo", url);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Project Name" {...field} className="w-fit" />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Position</FormLabel>
                            <FormControl>
                                <Input placeholder="Position Name" {...field} className="w-fit" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col lg:flex-row items-center justify-start gap-4">
                    <FormField
                        control={form.control}
                        name="logo"
                        render={() => (
                            <FormItem>
                                <FormLabel>Logo</FormLabel>
                                <FormControl>
                                    <UploadFile onUploadComplete={handleLogoUploadComplete} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="logo"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Logo URL" {...field} className="w-fit" value={logoUrl} disabled />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}