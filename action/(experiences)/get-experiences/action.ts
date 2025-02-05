'use server'


import { db } from "@/db";
import { experienceTable } from "@/db/schema";

export async function getExperiences() {
    try {

        const experiences = await db.select().from(experienceTable);
        return { status: "success", experiences };
    } catch (error) {
        console.error("Error getting experiences:", error);
        return { status: "error", message: "Failed to get experiences" };
    }
}