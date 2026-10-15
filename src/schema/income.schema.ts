import { z } from "zod";

export const incomeSchema = z.object({
  amount: z.number().positive(),
  fromJob: z.boolean().default(false),
  dateObtained: z.date(),
});

export type incomeInputModel = z.input<typeof incomeSchema>;
export type incomeListModel = z.infer<typeof incomeSchema>;
