import { ExpenseType } from "../generated/prisma";

type ChartGranularity = "day" | "week" | "month";

export interface CashFlowPoint {
  dateRange: string;
  transit: "in" | "out";
  total: number;
}

export interface financeFrequency {
  type: ExpenseType;
  frequency: number;
}
