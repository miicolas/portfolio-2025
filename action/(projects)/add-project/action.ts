'use server';

import { db } from "@/db";
import { projectsTable } from "@/db/schema";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { FormResponse } from "@/lib/types";

const bodySchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    link: z.string().url().optional(),
    github: z.string().url().optional(),
    image_preview: z.string().url().optional(),
    image_preview_secondary: z.string().url().optional(),
    tech_stack: z.string().optional(),
});

export async function addProject(body: z.infer<typeof bodySchema>): Promise<FormResponse> {
    try {
        const validatedBody = bodySchema.safeParse(body);

        if (!validatedBody.success) {
            return { status: "error", errors: validatedBody.error.issues };
        }

        const project = await db.insert(projectsTable)
            .values(validatedBody.data).$returningId()
            .execute();

        revalidatePath("/dashboard/projects");
        revalidatePath("/projects");
        revalidatePath("/");

        return { status: "success", content: project, message: "Project created successfully" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { status: "error", message: "Invalid data format" };
        }
        console.error("Database error:", error);
        return { status: "error", message: "Failed to create project" };
    }
}