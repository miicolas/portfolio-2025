import { NextResponse } from "next/server";
import { SEND_NOTIFICATION } from "@/app/(client)/contact/action";



export async function POST(req: Request) {

  try {

    let { message, email, subject, name } = await req.json();


    message = message
      .replace(/[\n\t@#]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    const response = await SEND_NOTIFICATION({ message, email, subject, name });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Échec de l'envoi");
    }

    return NextResponse.json({
      message: "Message envoyé avec succès",
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Erreur de traitement",
        message: error instanceof Error ? error.message : "Veuillez réessayer plus tard"
      },
      { status: 500 }
    );
  }
}