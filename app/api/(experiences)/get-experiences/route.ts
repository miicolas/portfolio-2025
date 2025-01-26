import { NextResponse} from "next/server";
import { db } from "@/db";
import { experienceTable } from "@/db/schema";

export async function GET() {
    try {

        const experiences = await db.select().from(experienceTable);

        return NextResponse.json({
            message: "Experiences getting successfully",
            content : experiences
        });

    } catch (error) {
        console.error("Error getting experiences:", error);
        return NextResponse.json(
            { error: "Failed to get experiences" },
            { status: 500 }
        );
    }
}