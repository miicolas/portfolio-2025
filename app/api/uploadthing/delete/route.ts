import { UTApi } from "uploadthing/server";
import { NextResponse } from "next/server";


const utapi = new UTApi();

export async function DELETE(req: Request) {

    try {
        if (req.method !== "DELETE") {
            return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
        }

        const { fileUrl } = await req.json();

        if (!fileUrl) {
            return NextResponse.json({ message: "File URL is required" }, { status: 400 });
        }
        const fileKey = fileUrl.split("/").pop();
        const result = await utapi.deleteFiles(fileKey);
        return NextResponse.json({ message: "File deleted successfully", result });

    } catch (error) {
        console.error("Error deleting file:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}