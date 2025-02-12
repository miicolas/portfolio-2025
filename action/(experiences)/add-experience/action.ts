'use server';

import { db } from "@/db";
import { experienceTable } from "@/db/schema";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { FormResponse } from "@/lib/types";


const bodySchema = z.object({
  company: z.string().min(1, "Company name is required"),
  position: z.string().min(1, "Position is required"),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid start date",
  }),
  endDate: z.string().optional().refine((date) => date === undefined || !isNaN(Date.parse(date)), {
    message: "Invalid end date",
  }),
  logo: z.string().url("Invalid logo URL"),
});


type BodySchema = z.infer<typeof bodySchema>;

export async function addExperience(body: BodySchema): Promise<FormResponse> {
  try {
    const validatedBody = bodySchema.safeParse(body);

    if (!validatedBody.success) {
      return { status: "error", errors: validatedBody.error.issues };
    }


    const { company, position, startDate, endDate, logo } = validatedBody.data;

    const experience = await db.insert(experienceTable).values({
      company,
      position,
      startDate: new Date(startDate),
      endDate: endDate ? new Date(endDate) : null,
      logo,
    });

    const plainExperienceData = JSON.parse(JSON.stringify(experience));

    revalidatePath("/dashboard/experiences");
    revalidatePath("/");
    return { status: "success", content: plainExperienceData }
  } catch (error) {
    console.error("Error adding experience:", error);
    return { status: "error", message: "Failed to add experience" };
  }
}