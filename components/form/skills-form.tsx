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
import { SkillsFormProps } from "@/lib/types";
import { addSkill } from "@/action/(skills)/add-skill/action"


const formSchema = z.object({
    tech_name: z.string().min(2, {
        message: "Tech Name must be at least 2 characters long",
    }),
    description: z.string().min(2, {
        message: "Description must be at least 2 characters long",
    }),
    logo_url: z.string().url(),
    logo: z.string().url().optional(),
})

export default function SkillsForm({ setOpen }: SkillsFormProps) {


    const [logoUrl, setLogoUrl] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            tech_name: "",
            description: "",
            logo_url: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const { tech_name, description, logo_url } = values;

        try {
            await addSkill({
                name: tech_name,
                description: description,
                logo: logo_url,
            });
            toast.success("Skill added successfully");
            setOpen(false);
        } catch (error) {
            console.error("Error adding skill:", error);
            toast.error("Failed to add skill");
        }
    }

    const handleUploadComplete = (url: string) => {
        setLogoUrl(url);
        form.setValue("logo_url", url);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="tech_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tech Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Tech Name" {...field} className="w-fit" />
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
                                <Input placeholder="Description Tech" {...field} className="w-fit" />
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
                                    <UploadFile onUploadComplete={handleUploadComplete} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="logo_url"
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