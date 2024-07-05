import { createUploadthing, type FileRouter } from "uploadthing/next";
import { z } from "zod";
import sharp from "sharp";
import { db } from "@db";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .input(
      z.object({
        configId: z.string().optional(),
      })
    )
    .middleware(async ({ input }) => {
      return { input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const { configId } = metadata.input;

      // Fetch Image
      const res = await fetch(file.url);
      //Convert it to buffer
      const buffer = await res.arrayBuffer();
      // Grab image metadata
      const imgMetadata = await sharp(buffer).metadata();
      // Grab image width and height
      const { width, height } = imgMetadata;

      if (!configId) {
        // This is executed on new image upload at Step 1 - create new configuration in DB
        const configuration = await db.configuration.create({
          data: {
            imageUrl: file.url,
            height: height || 500,
            width: width || 500,
          },
        });

        return { configId: configuration.id };
      } else {
        // This is executed on existing image edit at Step 2 - update configuration in DB
        const updatedConfiguration = await db.configuration.update({
          where: {
            id: configId,
          },
          data: {
            croppedImageUrl: file.url,
          },
        });

        return { configId: updatedConfiguration.id };
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
