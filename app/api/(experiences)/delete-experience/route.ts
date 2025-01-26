import { NextResponse } from "next/server";
import { db } from "@/db";
import { experienceTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    const experience = await db
        .delete(experienceTable)
        .where(eq(experienceTable.id, id));

    return NextResponse.json({ 
      message: "Experience deleted successfully",
      experience 
    });

  } catch (error) {
    console.error("Error deleted experience:", error);
    return NextResponse.json(
      { error: "Failed to deleted experience" },
      { status: 500 }
    );
  }
}