import { z } from "zod";

const StockSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  curr_amount: z
    .number()
    .min(0, "Current amount must be greater than or equal to 0"),
  min_amount: z
    .number()
    .min(0, "Minimum amount must be greater than or equal to 0"),
});

export type StockModel = z.infer<typeof StockSchema>;
