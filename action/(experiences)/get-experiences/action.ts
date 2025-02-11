'use server';

import { db } from "@/db";
import { experienceTable } from "@/db/schema";
import { ExperienceData } from "@/lib/types";

export async function getExperiences(): Promise<{ status: string; experiences?: ExperienceData[]; message?: string }> {
    try {
        const experiences = await db.select().from(experienceTable);
        return { status: "success", experiences, message: "Experiences fetched successfully" };
    } catch (error) {
        console.error("Error getting experiences:", error);
        return { status: "error", message: "Failed to get experiences" };
    }
}