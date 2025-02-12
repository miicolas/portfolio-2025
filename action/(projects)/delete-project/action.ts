'use server';

import { db } from "@/db";
import { projectsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { deleteImage } from "@/lib/utils";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { FormResponse } from "@/lib/types";


const bodySchema = z.object({
    id: z.number(),
});

export async function deleteProject(body: z.infer<typeof bodySchema>): Promise<FormResponse> {
    try {
        const validatedBody = bodySchema.safeParse(body);

        if (!validatedBody.success) {
            return { status: "error", errors: validatedBody.error.issues };
        }
        const id = validatedBody.data.id;

        const project = await db
            .select()
            .from(projectsTable)
            .where(eq(projectsTable.id, id))
            .execute()
            .then(res => res[0]);

        if (!project) {
            return { status: "error", message: "Project not found" };
        }

        try {
            if (project.image_preview) {
                await deleteImage(project.image_preview);
            }
            if (project.image_preview_secondary) {
                await deleteImage(project.image_preview_secondary);
            }
        } catch {
            return { status: "error", message: "Failed to delete images" };
        }

        await db
            .delete(projectsTable)
            .where(eq(projectsTable.id, id))
            .execute();

        revalidatePath("/dashboard/projects");
        return { status: "success", message: "Project deleted successfully" };
    } catch (error) {
        console.error("Error deleting project:", error);
        return { status: "error", message: "Failed to delete project" };
    }
}