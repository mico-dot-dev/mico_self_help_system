"use server";

import { ActionResponse } from "../schema/auth.schema";
import { prisma } from "@/src/lib/prisma-client";
import { authenticateUser } from "../lib/utils/validation-wrapper";
import { CashFlowPoint } from "@/src/type/chart";

export async function getUserStatistics(): Promise<
  ActionResponse<CashFlowPoint[]>
> {
  return authenticateUser(async (userId) => {
    try {
      const res = await prisma.$queryRaw<CashFlowPoint[]>`SELECT
  date_trunc('month', stats_data.created_at) as month_start,
  to_char(date_trunc('month', stats_data.created_at), 'Mon') as month,
  stats_data.transit,
  SUM(stats_data.amount) as total
FROM (
  SELECT amount, created_at, 'in' as transit FROM income inc 
  WHERE inc.user_id = ${userId}

  UNION ALL

  SELECT t.amount, t.created_at, 'out' as transit FROM expense e
  JOIN public.transaction t ON t.expense_id = e.id
   WHERE e.user_id = ${userId}
) as stats_data
GROUP BY month_start, transit
ORDER BY month_start`;

      if (!res) {
        return {
          success: false,
          error: "",
        };
      }

      return {
        success: true,
        data: res,
      };
    } catch (e) {
      return {
        success: false,
        error: "",
      };
    }
  });
}

// export const example: financeRow[] = [
//   { dateRange: "Jan", financeType: "in", total: 1200 },
//   { dateRange: "Jan", financeType: "out", total: 450 },
//   { dateRange: "Feb", financeType: "in", total: 950 },
//   { dateRange: "Feb", financeType: "out", total: 300 },
//   { dateRange: "Mar", financeType: "in", total: 1500 },
//   { dateRange: "Mar", financeType: "out", total: 600 },
//   { dateRange: "Apr", financeType: "in", total: 1100 },
//   { dateRange: "Apr", financeType: "out", total: 400 },
//   { dateRange: "May", financeType: "in", total: 1350 },
//   { dateRange: "May", financeType: "out", total: 750 },
//   { dateRange: "Jun", financeType: "in", total: 1600 },
//   { dateRange: "Jun", financeType: "out", total: 500 },
//   { dateRange: "Jul", financeType: "in", total: 100 },
//   { dateRange: "Jul", financeType: "in", total: 850 },
//   { dateRange: "Jul", financeType: "out", total: 620 },
//   { dateRange: "Aug", financeType: "in", total: 1400 },
//   { dateRange: "Aug", financeType: "out", total: 550 },
//   { dateRange: "Sep", financeType: "in", total: 1250 },
//   { dateRange: "Sep", financeType: "out", total: 480 },
//   { dateRange: "Oct", financeType: "in", total: 1900 },
//   { dateRange: "Oct", financeType: "out", total: 800 },
//   { dateRange: "Nov", financeType: "in", total: 1750 },
//   { dateRange: "Nov", financeType: "out", total: 900 },
//   { dateRange: "Dec", financeType: "in", total: 2200 },
//   { dateRange: "Dec", financeType: "out", total: 1100 },
// ];

// export const financeExample: readonly financeFrequency[] = [
//   { type: "GROCERY", frequency: 0.095 },
//   { type: "HOUSE", frequency: 0.065 },
//   { type: "TRANSPORTATION", frequency: 0.045 },
//   { type: "PERSONAL", frequency: 0.028 },
//   { type: "MISC", frequency: 0.01 },
//   { type: "GROCERY", frequency: 0.085 },
//   { type: "HOUSE", frequency: 0.058 },
//   { type: "TRANSPORTATION", frequency: 0.04 },
//   { type: "PERSONAL", frequency: 0.022 },
//   { type: "MISC", frequency: 0.009 },
//   { type: "GROCERY", frequency: 0.08 },
//   { type: "HOUSE", frequency: 0.052 },
//   { type: "TRANSPORTATION", frequency: 0.038 },
//   { type: "PERSONAL", frequency: 0.02 },
//   { type: "MISC", frequency: 0.008 },
//   { type: "GROCERY", frequency: 0.075 },
//   { type: "HOUSE", frequency: 0.05 },
//   { type: "TRANSPORTATION", frequency: 0.035 },
//   { type: "PERSONAL", frequency: 0.018 },
//   { type: "MISC", frequency: 0.007 },
//   { type: "GROCERY", frequency: 0.065 },
//   { type: "HOUSE", frequency: 0.045 },
//   { type: "TRANSPORTATION", frequency: 0.032 },
//   { type: "PERSONAL", frequency: 0.012 },
//   { type: "MISC", frequency: 0.006 },
// ];
