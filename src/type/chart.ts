import { ExpenseType } from "../generated/prisma";

export type ChartGranularity = "day" | "week" | "month";

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
