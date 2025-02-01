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
import { addProject } from "@/action/(projects)/add-project/action"
import { Textarea } from "../ui/textarea"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters long",
    }).max(255, {
        message: "Name must be at most 255 characters long",
    }),
    description: z.string().min(2, {
        message: "Description must be at least 2 characters long",
    }).max(1000, {
        message: "Description must be at most 1000 characters long",
    }),
    
    link: z.string().url().optional(),
    github: z.string().url().optional(),
    image_preview: z.string().url().optional(),
    image_preview_secondary: z.string().url().optional(),
    tech_stack: z.string().optional(),
})

interface ProjectsFormProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProjectsForm({ setOpen }: ProjectsFormProps) {
    const [imagePreviewUrl, setImagePreviewUrl] = useState("");
    const [imagePreviewSecondaryUrl, setImagePreviewSecondaryUrl] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            link: undefined,
            github: undefined,
            image_preview: undefined,
            image_preview_secondary: undefined,
            tech_stack: undefined,
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            await addProject(values);
            toast.success("Project added successfully");
            setOpen(false);
        } catch (error) {
            console.error("Error adding project:", error);
            toast.error("Failed to add project");
        }
    }

    const handleImagePreviewUploadComplete = (url: string) => {
        setImagePreviewUrl(url);
        form.setValue("image_preview", url);
    };

    const handleImagePreviewSecondaryUploadComplete = (url: string) => {
        setImagePreviewSecondaryUrl(url);
        form.setValue("image_preview_secondary", url);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Project Name</FormLabel>
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
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Description" {...field} className="w-full" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex flex-col lg:flex-row items-center justify-start gap-4">
                    <FormField
                        control={form.control}
                        name="image_preview"
                        render={() => (
                            <FormItem>
                                <FormLabel>Image Preview</FormLabel>
                                <FormControl>
                                    <UploadFile onUploadComplete={handleImagePreviewUploadComplete} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image_preview"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Image Preview URL" {...field} className="w-fit" value={imagePreviewUrl} disabled />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-start gap-4">
                    <FormField
                        control={form.control}
                        name="image_preview_secondary"
                        render={() => (
                            <FormItem>
                                <FormLabel>Image Preview Secondary</FormLabel>
                                <FormControl>
                                    <UploadFile onUploadComplete={handleImagePreviewSecondaryUploadComplete} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image_preview_secondary"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Image Preview Secondary URL" {...field} className="w-fit" value={imagePreviewSecondaryUrl} disabled />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="github"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Github" {...field} className="w-fit" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="link"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Link" {...field} className="w-fit" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="tech_stack"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Tech Stack" {...field} className="w-fit" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}