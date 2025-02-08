'use server';

import { db } from "@/db";
import { projectsTable } from "@/db/schema";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const bodySchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    link: z.string().url().optional(),
    github: z.string().url().optional(),
    image_preview: z.string().url().optional(),
    image_preview_secondary: z.string().url().optional(),
    tech_stack: z.string().optional(),
});

export async function addProject(body: z.infer<typeof bodySchema>) {
    try {
        const validatedBody = bodySchema.parse(body);

        if (!validatedBody.name || !validatedBody.description) {
            return { status: "error", message: "Missing required fields" };
        }

        const project = await db.insert(projectsTable)
            .values(validatedBody).$returningId()
            .execute();

        revalidatePath("/dashboard/projects");
        revalidatePath("/projects");
        revalidatePath("/");

        return { status: "success", project };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { status: "error", message: "Invalid data format" };
        }
        console.error("Database error:", error);
        return { status: "error", message: "Failed to create project" };
    }
}