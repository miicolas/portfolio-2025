import { NextResponse} from "next/server";
import { db } from "@/db";
import { skillsTable } from "@/db/schema";

export async function GET() {
    try {
        const skills = await db.select().from(skillsTable);

        return NextResponse.json({
            message: "Skills getting successfully",
            content : skills
        });

    } catch (error) {
        console.error("Error adding skill:", error);
        return NextResponse.json(
            { error: "Failed to add skill" },
            { status: 500 }
        );
    }
}