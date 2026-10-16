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

export const AdjustStockSchema = z.object({
  stockId: z.string().uuid(),
  action: z.enum(["increment", "decrement"]),
});

export type StockModel = z.infer<typeof StockSchema>;
export type AdjustStockModel = z.infer<typeof AdjustStockSchema>;
export type AdjustStockInputModel = z.input<typeof AdjustStockSchema>;
