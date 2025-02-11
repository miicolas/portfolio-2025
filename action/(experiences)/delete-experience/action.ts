'use server';

import { db } from "@/db";
import { experienceTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { deleteImage } from "@/lib/utils";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const bodySchema = z.object({
  id: z.number(),
});

type BodySchema = z.infer<typeof bodySchema>;

export async function deleteExperience(body: BodySchema): Promise<{ status: string; message: string; experience?: any }> {
  try {
    const validatedBody = bodySchema.parse(body);
    const { id } = validatedBody;

    const checkIfExperienceExists = await db
      .select()
      .from(experienceTable)
      .where(eq(experienceTable.id, id));

    if (checkIfExperienceExists.length === 0) {
      return {
        status: "error",
        message: "Experience not found",
      };
    }

    try {
      await deleteImage(checkIfExperienceExists[0].logo);
    } catch {
      return {
        status: "error",
        message: "Failed to delete image",
      };
    }

    const experience = await db
      .delete(experienceTable)
      .where(eq(experienceTable.id, id));

    revalidatePath("/dashboard/experiences");
    return {
      status: "success",
      message: "Experience deleted successfully",
      experience,
    };
  } catch (error) {
    console.error("Error deleting experience:", error);
    return { status: "error", message: "Failed to delete experience" };
  }
}