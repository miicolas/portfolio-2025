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
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { parseDate } from "@/lib/utils"


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
    startDate: z.string().refine(val => {
        const date = parseDate(val);
        return !!date && val.length === 6 && !isNaN(date.getTime());
    }, {
        message: "Invalid start date (DDMMYY)",
    }),
    endDate: z.string().optional().refine(val => {
        if (!val) return true;
        const date = parseDate(val);
        return val.length === 6 && !!date && !isNaN(date.getTime());
    }, {
        message: "Invalid end date (DDMMYY)",
    }),
    logo: z.string().url(),
})

interface ExperiencesFormProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ExperiencesForm({ setOpen }: ExperiencesFormProps) {


    const [logoUrl, setLogoUrl] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            logo: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const { company, position, startDate, endDate, logo } = values;

        const startDateDate = parseDate(startDate);
        const endDateDate = endDate ? parseDate(endDate) : null;

        await fetch("/api/add-experience", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                company,
                position,
                startDate: startDateDate?.toISOString(),
                endDate: endDateDate?.toISOString(),
                logo,
            }),
        })
        .then((response) => response.json())
        .then(() => {
            toast.success("Experience added successfully");
            form.reset();
            setOpen(false);
        })
        .catch((error) => {
            console.error("Error adding experience:", error);
            toast.error("Failed to add experience");
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
                                <Input placeholder="Company Name" {...field} className="w-fit" />
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
                <div className="flex flex-col lg:flex-row lg:items-center justify-start gap-4">
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
                <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Start Date (DDMMYY)</FormLabel>
                            <FormControl>
                                <InputOTP maxLength={6} {...field}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={2} />
                                        <InputOTPSlot index={3} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>End Date (DDMMYY) - Optional</FormLabel>
                            <FormControl>
                                <InputOTP 
                                    maxLength={6} 
                                    {...field} 
                                    value={field.value || ""}
                                    onChange={value => field.onChange(value || undefined)}
                                >
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={2} />
                                        <InputOTPSlot index={3} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
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
