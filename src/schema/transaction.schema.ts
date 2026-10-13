import { z } from "zod";
import { ExpenseType, TransactionStatus } from "@/src/generated/prisma";

export const TransactionSchema = z.object({
  name: z.string(),
  expense_type: z.nativeEnum(ExpenseType),
  status: z.nativeEnum(TransactionStatus),
  amount: z.int(),
  price: z.float32(),
  date_added: z.date(),
  due_date: z.date().optional(),
  expense_id: z.coerce.number().int().positive(),
});

export type TransactionFormModel = z.input<typeof TransactionSchema>;
export type TransactionListModel = z.infer<typeof TransactionSchema>;
