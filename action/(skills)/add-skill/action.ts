'use server';

import { db } from "@/db";
import { skillsTable } from "@/db/schema";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { FormResponse } from "@/lib/types";


const bodySchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    logo: z.string().url(),
});


export async function addSkill(body: z.infer<typeof bodySchema>): Promise<FormResponse> {
    try {
        const validatedBody = bodySchema.safeParse(body);

        if (!validatedBody.success) {
            return { status: "error", errors: validatedBody.error.issues };
        }

        

        const skill = await db.insert(skillsTable)
            .values(validatedBody.data).$returningId()
            .execute();

        revalidatePath("/dashboard/skills");
        revalidatePath("/");

        return { status: "success", content: skill, message: "Skill created successfully" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { status: "error", message: "Invalid data format" };
        }
        console.error("Database error:", error);
        return { status: "error", message: "Failed to create skill" };
    }
}