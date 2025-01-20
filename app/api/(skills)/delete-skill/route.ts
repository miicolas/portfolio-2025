import { NextResponse } from "next/server";
import { db } from "@/db";
import { skillsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    const skill = await db
      .delete(skillsTable)
      .where(eq(skillsTable.id, id));

    return NextResponse.json({
      message: "Skill deleted successfully",
      skill
    });

  } catch (error) {
    console.error("Error deleted skill:", error);
    return NextResponse.json(
      { error: "Failed to deleted skill" },
      { status: 500 }
    );
  }
}