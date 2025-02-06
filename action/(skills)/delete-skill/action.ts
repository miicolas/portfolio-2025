'use server';

import { db } from "@/db";
import { skillsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { deleteImage } from "@/lib/utils";
import { z } from "zod";
import { revalidatePath } from "next/cache";


const bodySchema = z.object({
    id: z.number(),
});

export async function deleteSkill(body: z.infer<typeof bodySchema>) {
    try {
        const validatedBody = bodySchema.parse(body);
        const id = validatedBody.id;

        const skill = await db
            .select()
            .from(skillsTable)
            .where(eq(skillsTable.id, id))
            .execute()
            .then(res => res[0]);
            skill
        if (!skill) {
            return { status: "error", message: "Project not found" };
        }

        try {
            if (skill.logo) {
                await deleteImage(skill.logo);
            }
        } catch {
            return { status: "error", message: "Failed to delete image" };
        }

        await db
            .delete(skillsTable)
            .where(eq(skillsTable.id, id))
            .execute();

        revalidatePath("/dashboard/skills");
        return { status: "success", message: "Skill deleted successfully" };
    } catch (error) {
        console.error("Error deleting Skill:", error);
        return { status: "error", message: "Failed to delete skill" };
    }
}