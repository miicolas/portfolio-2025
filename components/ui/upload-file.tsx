import { UploadButton } from "@/lib/uploadthing";
import { toast } from "sonner"

interface UploadFileProps {
    onUploadComplete: (url: string) => void;
}

export default function UploadFile({ onUploadComplete }: UploadFileProps) {
    return (
        <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
                console.log("Files: ", res);
                if (res && res.length > 0) {
                    onUploadComplete(res[0].url);
                    toast.success('Upload successful');
                }
            }}
            className="mt-4 ut-button:bg-indigo-500 ut-button:text-white ut-button:hover:bg-indigo-600 ut-button:active:bg-indigo-700 ut-button:disabled:bg-neutral-200 ut-button:disabled:text-neutral-500 w-fit ut-uploading:text-white"
            onUploadError={(error: Error) => {
                toast.error('Upload failed');
            }}
        />
    );
}