'use server';

import { db } from "@/db";
import { skillsTable } from "@/db/schema";
import { FormResponse } from "@/lib/types";


export async function getSkills(): Promise<FormResponse> {
    try {
        const skills = await db.select().from(skillsTable);
        return { status: "success", content : skills, message: "Skills fetched successfully" };
    } catch (error) {
        console.error("Error getting skills:", error);
        return { status: "error", message: "Failed to get skills" };
    }
} 