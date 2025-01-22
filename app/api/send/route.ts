import { NextResponse } from "next/server";
import { SEND_NOTIFICATION } from "@/app/(client)/contact/action";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { subject, name, message, email } = body;

    const response = await SEND_NOTIFICATION({ subject, name, message, email });

    if (response.status !== 200) {
      return response;
    }

    return NextResponse.json({ 
      message: "Response sent successfully", 
    });

  } catch (error) {
    console.error("Error sending notification:", error);
    return NextResponse.json(
      { error: "Failed to send notification" },
      { status: 500 }
    );
  }
}