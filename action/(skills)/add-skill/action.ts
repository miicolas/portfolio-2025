'use server';

import { db } from "@/db";
import { skillsTable } from "@/db/schema";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const bodySchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    logo: z.string().url(),
});


export async function addSkill(body: z.infer<typeof bodySchema>) {
    try {
        const validatedBody = bodySchema.parse(body);

        if (!validatedBody.name || !validatedBody.description || !validatedBody.logo) { 
            return { status: "error", message: "Missing required fields" };
        }

        const skill = await db.insert(skillsTable)
            .values(validatedBody).$returningId()
            .execute();

        revalidatePath("/dashboard/skills");

        return { status: "success", skill };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { status: "error", message: "Invalid data format" };
        }
        console.error("Database error:", error);
        return { status: "error", message: "Failed to create skill" };
    }
}