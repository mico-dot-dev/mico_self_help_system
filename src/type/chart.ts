import { ExpenseType } from "../generated/prisma";

export type ChartGranularity = "day" | "week" | "month";

export interface CashFlowPoint {
  date: Date;
  transit: "in" | "out";
  total: number;
}

export const granularityMap = {
  month: "month",
  week: "week",
  day: "day",
} as const;

//Pie Chart
export interface ExpenseFrequency {
  type: ExpenseType;
  frequency: number;
}
