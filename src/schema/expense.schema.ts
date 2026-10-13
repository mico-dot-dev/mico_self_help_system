import z from "zod";
import { ExpenseType, DateRepeatType } from "@/src/generated/prisma";

const ExpenseSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
});

//Declaration for each content type subcategories for dynamic inputs/fetch

const BillsFormBaseSchema = ExpenseSchema.extend({
  repeating_type: z.nativeEnum(DateRepeatType),
  running_bill: z.number(),
});

const HouseFormSchema = BillsFormBaseSchema.extend({
  expense_type: z.literal(ExpenseType.HOUSE),
});

const PersonalFormSchema = BillsFormBaseSchema.extend({
  expense_type: z.literal(ExpenseType.PERSONAL),
});

const TranspoFormSchema = ExpenseSchema.extend({
  expense_type: z.literal(ExpenseType.TRANSPORTATION),
  cost_list: z
    .array(
      z.object({
        amount: z.coerce.number().int("Value must be an integer"),
      }),
    )
    .min(1, "Add at least one cost"),
});

const StockFormSchema = ExpenseSchema.extend({
  expense_type: z.literal(ExpenseType.GROCERY),
  min_amount: z.number(),
});

const ManualFormSchema = ExpenseSchema.extend({
  expense_type: z.literal(ExpenseType.MISC),
});

export const DynamicFormSchema = z.discriminatedUnion("expense_type", [
  HouseFormSchema,
  PersonalFormSchema,
  StockFormSchema,
  TranspoFormSchema,
  ManualFormSchema,
]);

export type HouseFormModel = z.infer<typeof HouseFormSchema>;
export type PersonalFormModel = z.infer<typeof PersonalFormSchema>;
export type StockFormModel = z.infer<typeof StockFormSchema>;
export type TranspoFormModel = z.infer<typeof TranspoFormSchema>;
export type ManualFormModel = z.infer<typeof ManualFormSchema>;

export type DynamicFormModel = z.infer<typeof DynamicFormSchema>;
export type DynamicFormInputModel = z.input<typeof DynamicFormSchema>;

//For List or Fetch

export const PersonalListSchema = PersonalFormSchema.extend({
  id: z.string().uuid(),
});

export const HouseListSchema = HouseFormSchema.extend({
  id: z.string().uuid(),
});

export const TranspoListSchema = TranspoFormSchema.extend({
  id: z.string().uuid(),
});

export const StockListSchema = StockFormSchema.extend({
  id: z.string().uuid(),

  curr_amount: z.number(),
});

export const ManualListSchema = ManualFormSchema.extend({
  id: z.string().uuid(),
});

export const DynamicListSchema = z.discriminatedUnion("expense_type", [
  HouseListSchema,
  PersonalListSchema,
  StockListSchema,
  TranspoListSchema,
  ManualListSchema,
]);

export type DynamicListModel = z.infer<typeof DynamicListSchema>;
