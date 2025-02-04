'use server';

import { db } from "@/db";
import { experienceTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { deleteImage } from "@/lib/utils";
import { z } from "zod";

const bodySchema = z.object({
    id: z.number(),
});

export async function deleteExperience(body: z.infer<typeof bodySchema>) {
  try {
    
    const { id } = body;

    const checkIfExperienceExists = await db
      .select()
      .from(experienceTable)
      .where(eq(experienceTable.id, id));

    if (checkIfExperienceExists.length === 0) {
      return {
        message: "Experience not found",
        error: "Experience not found"
      };
    }

    try {
      await deleteImage(checkIfExperienceExists[0].logo);
    } catch {
      return {
        message: "Failed to delete image",
        error: "Failed to delete image"
      };
    }

    const experience = await db
      .delete(experienceTable)
      .where(eq(experienceTable.id, id));

    return {
      message: "Experience deleted successfully",
      experience
    };

  } catch (error) {
    console.error("Error deleting experience:", error);
    return { status: "error", message: "Failed to delete experience" };
  }
}