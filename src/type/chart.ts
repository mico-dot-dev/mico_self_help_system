import { ExpenseType } from "../generated/prisma";

export type ChartGranularity = "day" | "week" | "month";

export interface CashFlowPoint {
  dateStart: Date;
  transit: "in" | "out";
  total: number;
}

export interface ExpenseFrequency {
  type: ExpenseType;
  frequency: number;
}

export const granularityMap = {
  month: "month",
  week: "week",
  day: "day",
} as const;
