import z from "zod";

export const CategorySchema = z.object({
  title: z
    .string()
    .min(2, { message: "Category name must be at least 2 characters long" })
    .max(100, { message: "Category name must be at most 100 characters long" }),
});

export const CategoryListSchema = CategorySchema.extend({
  id: z.string().uuid(),
});

export type CategoryFormModel = z.input<typeof CategorySchema>;
export type CategoryListModel = z.output<typeof CategoryListSchema>;
