'use server';

import { db } from "@/db";
import { skillsTable } from "@/db/schema";

export async function getSkills() {
    try {
        const skills = await db.select().from(skillsTable);
        return { status: "success", skills };
    } catch (error) {
        console.error("Error getting skills:", error);
        return { status: "error", message: "Failed to get skills" };
    }
} 