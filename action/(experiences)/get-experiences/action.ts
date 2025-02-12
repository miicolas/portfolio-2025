'use server';

import { db } from "@/db";
import { experienceTable } from "@/db/schema";
import { ExperienceData, FormResponse } from "@/lib/types";

export async function getExperiences(): Promise<FormResponse> {
    try {
        const experiences = await db.select().from(experienceTable);
        return { status: "success", content:experiences, message: "Experiences fetched successfully" };
    } catch (error) {
        console.error("Error getting experiences:", error);
        return { status: "error", message: "Failed to get experiences" };
    }
}