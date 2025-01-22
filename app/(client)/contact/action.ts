'use server';
import { NextResponse } from "next/server";

export async function SEND_NOTIFICATION(subject: string, name: string, message: string, email: string) {

    try {

        const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
        if (!webhookUrl) {
            return NextResponse.json({ error: "Webhook URL is not defined" }, { status: 500 });
        }
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ content: `**${subject}**\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}\n\n@here` })        });


        if (response.ok) {
            return NextResponse.json({ message: "Message sent successfully" });
        }

        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });

    }

    catch (error) {
        console.error("Error adding project:", error);
        return NextResponse.json(
            { error: "Failed to add project" },
            { status: 500 }
        );
    }
}