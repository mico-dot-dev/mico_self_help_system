import { ExpenseType } from "../generated/prisma";

export interface financeRow {
  dateRange: string;
  financeType: "in" | "out";
  total: number;
}

export interface financeFrequency {
  type: ExpenseType;
  frequency: number;
}
