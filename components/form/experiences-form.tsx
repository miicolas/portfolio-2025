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
    name: z.string().min(2, {
        message: "Name must be at least 2 characters long",
    }).max(255, {
        message: "Name must be at most 255 characters long",
    }),
    description: z.string().min(2, {
        message: "Description must be at least 2 characters long",
    }).max(255, {
        message: "Description must be at most 255 characters long",
    }),
    logo: z.string().url(),
    link: z.string().url().optional(),
    github: z.string().url().optional(),
    image_preview: z.string().url(),
    image_preview_secondary: z.string().url(),
    tech_stack: z.string().optional(),
    status: z.string().optional(),
})

interface ProjectsFormProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ExperiencesForm({ setOpen }: ProjectsFormProps) {
    const [logoUrl, setLogoUrl] = useState("");
    const [imagePreviewUrl, setImagePreviewUrl] = useState("");
    const [imagePreviewSecondaryUrl, setImagePreviewSecondaryUrl] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            logo: "",
            link: "",
            github: "",
            image_preview: "",
            image_preview_secondary: "",
            tech_stack: "",
            status: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        const { name, description, logo, image_preview, image_preview_secondary, link, github, tech_stack, status } = values;
        fetch("/api/add-project", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                logo,
                description,
                github,
                link,
                image_preview,
                image_preview_secondary,
                tech_stack,
                status,
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
                                <Input placeholder="Description" {...field} className="w-fit" />
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
                <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Status" {...field} className="w-fit" />
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