import { NextResponse } from "next/server";
import { db } from "@/db";
import { projectsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { deleteImage } from "@/lib/utils";

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;


    const checkIfProjectExists = await db
      .select()
      .from(projectsTable)
      .where(eq(projectsTable.id, id));

    if (checkIfProjectExists.length === 0) {
      return NextResponse.json({
        message: "Project not found",
        error: "Project not found"
      });
    }

    try {
      await deleteImage(checkIfProjectExists[0].image_preview);
      await deleteImage(checkIfProjectExists[0].image_preview_secondary);
      await deleteImage(checkIfProjectExists[0].logo);
    } catch {
      return NextResponse.json({
        message: "Failed to delete images",
        error: "Failed to delete images"
      });
    }

    const project = await db
      .delete(projectsTable)
      .where(eq(projectsTable.id, id));

    return NextResponse.json({
      message: "Project deleted successfully",
      project
    });

  } catch (error) {
    console.error("Error deleted project:", error);
    return NextResponse.json(
      { error: "Failed to deleted project" },
      { status: 500 }
    );
  }
}