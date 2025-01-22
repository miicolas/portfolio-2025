'use server';
import { NextResponse } from "next/server";

let lastNotificationTime = 0;
const RATE_LIMIT_DELAY = 60 * 1000;

export async function SEND_NOTIFICATION(subject: string, name: string, message: string, email: string) {
    const currentTime = Date.now();

    if (currentTime - lastNotificationTime < RATE_LIMIT_DELAY) {
        return NextResponse.json({ error: "Rate limit exceeded. Please try again later." }, { status: 429 });
    }

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
            body: JSON.stringify({ content: `**${subject}**\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}\n\n@here` })
        });

        if (response.ok) {
            lastNotificationTime = currentTime;
            return NextResponse.json({ message: "Message sent successfully" });
        }

        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });

    } catch (error) {
        console.error("Error sending notification:", error);
        return NextResponse.json(
            { error: "Failed to send notification" },
            { status: 500 }
        );
    }
}