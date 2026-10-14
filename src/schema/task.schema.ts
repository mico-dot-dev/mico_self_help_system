import { z } from "zod";
import { DateRepeatType } from "@/src/generated/prisma";

export const TaskSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title must be less than 255 characters"),
  description: z
    .string()
    .max(255, "Description must be less than 255 characters")
    .optional(),
  completed: z.boolean().default(false),
  priority_level: z.number().int().min(0).max(5).default(0),
  due_date: z.string().optional(),
  repeating_type: z.nativeEnum(DateRepeatType),
});

export const TaskListSchema = TaskSchema.extend({
  id: z.string(),
  category: z.string(),
});

export const TaskFormSchema = TaskSchema.extend({
  category_id: z.string().uuid(),
  expense_id: z.string().uuid().optional(),
});

export const TaskUpdateSchema = TaskSchema.extend({
  id: z.string().uuid(),
  category_id: z.string().uuid(),
});

export type TaskListModel = z.infer<typeof TaskListSchema>;
export type TaskFormModelBase = z.input<typeof TaskSchema>;
export type TaskFormModelInput = z.input<typeof TaskFormSchema>;
export type TaskFormModelOutput = z.output<typeof TaskFormSchema>;
export type TaskFormModelUpdate = z.input<typeof TaskUpdateSchema>;
