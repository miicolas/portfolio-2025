import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    
    .onUploadComplete(async ({file }) => {
      console.log("Upload complete");

      console.log("file url", file.url);

      return { uploadedBy : "Nicolas" };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
