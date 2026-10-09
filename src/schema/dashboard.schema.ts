import z from "zod";
import { LineChartModel } from "@/srctype/chart";

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

export const WeeklyStatisticsSchema = z.object({
  week_index: z.coerce.number().int(),
  week_start: z.coerce.date(),
  week_end: z.coerce.date(),
  income: z.coerce.number(),
  expense: z.coerce.number(),
});

export const HeaderStatisticsSchema = z.object({
  total_income: z.coerce.number(),
  total_expense: z.coerce.number(),
  period_income: z.coerce.number(),
  period_expense: z.coerce.number(),
  prev_income: z.coerce.number(),
  prev_expense: z.coerce.number(),
  // weekly_statistics: z.array(WeeklyStatisticsSchema),
});

export const EMPTY_HEADER_STATS: HeaderStatisticsModel = {
  total_income: 0,
  total_expense: 0,
  period_income: 0,
  period_expense: 0,
  prev_income: 0,
  prev_expense: 0,
  // weekly_statistics: [],
};

export type CashFlowPointModel = z.infer<typeof CashFlowPointSchema>;
export type DateRangeModel = z.infer<typeof DateRangeSchema>;
export type HeaderStatisticsModel = z.infer<typeof HeaderStatisticsSchema>;
