import z from "zod";

export const JournalSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  mode: z.string().min(1, "Mode is required"),
  collectionId: z.string().optional(),
});

export const collectionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});
