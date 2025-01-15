import { NextResponse } from "next/server";
import { db } from "@/db";
import { skillsTable } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, logo, description } = body;

    const skill = await db.insert(skillsTable).values({
      name,
      logo,
      description,
    });

    return NextResponse.json({ 
      message: "Skill added successfully",
      skill 
    });

  } catch (error) {
    console.error("Error adding skill:", error);
    return NextResponse.json(
      { error: "Failed to add skill" },
      { status: 500 }
    );
  }
}