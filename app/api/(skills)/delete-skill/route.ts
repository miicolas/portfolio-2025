import { NextResponse } from "next/server";
import { db } from "@/db";
import { skillsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { deleteImage } from "@/lib/utils";

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    const checkIfSkillExists = await db
      .select()
      .from(skillsTable)
      .where(eq(skillsTable.id, id));

    if (checkIfSkillExists.length === 0) {
      return NextResponse.json({
        message: "Skill not found",
        error: "Skill not found"
      });
    }

    try {
      await deleteImage(checkIfSkillExists[0].logo);
    } catch {
      return NextResponse.json({
        message: "Failed to delete image",
        error: "Failed to delete image"
      });
    }

    const skill = await db
      .delete(skillsTable)
      .where(eq(skillsTable.id, id));

    return NextResponse.json({
      message: "Skill deleted successfully",
      skill
    });

  } catch (error) {
    console.error("Error deleting skill:", error);
    return NextResponse.json(
      { error: "Failed to delete skill" },
      { status: 500 }
    );
  }
}