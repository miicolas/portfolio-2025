'use server';

import { db } from "@/db";
import { projectsTable } from "@/db/schema";

export async function getProjects() {
    try {
        const projects = await db.select().from(projectsTable);
        return { status: "success", content : projects, message: "Projects fetched successfully" };
    } catch (error) {
        console.error("Error getting projects:", error);
        return { status: "error", message: "Failed to get projects" };
    }
} 