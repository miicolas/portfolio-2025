import { NextResponse} from "next/server";
import { db } from "@/db";
import { projectsTable } from "@/db/schema";

export async function GET() {
    try {

        const projects = await db.select().from(projectsTable);

        return NextResponse.json({
            message: "Projects getting successfully",
            content : projects
        });

    } catch (error) {
        console.error("Error getting projects:", error);
        return NextResponse.json(
            { error: "Failed to get projects" },
            { status: 500 }
        );
    }
}