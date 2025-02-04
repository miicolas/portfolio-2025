import { NextResponse } from "next/server";
import { db } from "@/db";
import { experienceTable } from "@/db/schema";
import { z } from "zod";

const experienceSchema = z.object({
  company: z.string().min(1, "Company name is required"),
  position: z.string().min(1, "Position is required"),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid start date",
  }),
  endDate: z.string().optional().refine((date) => date === undefined || !isNaN(Date.parse(date)), {
    message: "Invalid end date",
  }),
  logo: z.string().url("Invalid logo URL"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsedBody = experienceSchema.parse(body);

    const { company, position, startDate, endDate, logo } = parsedBody;

    const experience = await db.insert(experienceTable).values({
      company,
      position,
      startDate: new Date(startDate),
      endDate: endDate ? new Date(endDate) : null,
      logo,
    });

    return NextResponse.json({
      message: "Experience added successfully",
      experience,
    });
  } catch (error) {
    console.error("Error adding experience:", error);
    return NextResponse.json(
      { error: "Failed to add experience" },
      { status: 500 }
    );
  }
}