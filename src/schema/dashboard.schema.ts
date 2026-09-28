import z from "zod";

export const CashFlowPointSchema = z.object({
  date: z.coerce.date(),
  transit: z.enum(["in", "out"]),
  total: z.coerce.number(),
});

const DateRangeSchema = z
  .object({
    from: z.coerce.date(),
    to: z.coerce.date(),
  })
  .refine((r) => r.from < r.to, { message: "from must be before to" });

export const HeaderStatisticsSchema = z.object({
  total_income: z.coerce.number(),
  total_expense: z.coerce.number(),
  period_income: z.coerce.number(),
  period_expense: z.coerce.number(),
  prev_income: z.coerce.number(),
  prev_expense: z.coerce.number(),
});

export const EMPTY_HEADER_STATS: HeaderStatisticsModel = {
  total_income: 0,
  total_expense: 0,
  period_income: 0,
  period_expense: 0,
  prev_income: 0,
  prev_expense: 0,
};

export type CashFlowPointModel = z.infer<typeof CashFlowPointSchema>;
export type DateRangeModel = z.infer<typeof DateRangeSchema>;
export type HeaderStatisticsModel = z.infer<typeof HeaderStatisticsSchema>;
