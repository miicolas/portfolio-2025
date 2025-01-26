import { NextResponse } from "next/server";
import { db } from "@/db";
import { experienceTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { deleteImage } from "@/lib/utils";

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    const checkIfExperienceExists = await db
      .select()
      .from(experienceTable)
      .where(eq(experienceTable.id, id));

    if (checkIfExperienceExists.length === 0) {
      return NextResponse.json({
        message: "Experience not found",
        error: "Experience not found"
      });
    }

    try {
      await deleteImage(checkIfExperienceExists[0].logo);
    } catch (error) {
      return NextResponse.json({
        message: "Failed to delete image",
        error: "Failed to delete image"
      });
    }

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