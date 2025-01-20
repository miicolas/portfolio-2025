import { NextResponse } from "next/server";
import { db } from "@/db";
import { projectsTable } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, logo, description, link, github, image_preview, image_preview_secondary, tech_stack, status } = body;

    const project = await db.insert(projectsTable).values({
      name,
      logo,
      description,
      link,
      github,
      image_preview,
      image_preview_secondary,
      tech_stack,
      status,
    });

    return NextResponse.json({ 
      message: "Project added successfully",
      project 
    });

  } catch (error) {
    console.error("Error adding project:", error);
    return NextResponse.json(
      { error: "Failed to add project" },
      { status: 500 }
    );
  }
}