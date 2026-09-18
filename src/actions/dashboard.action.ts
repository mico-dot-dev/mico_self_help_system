"use server";

import { ActionResponse } from "../schema/auth.schema";
import { prisma } from "@/src/lib/prisma-client";
import { authenticateUser } from "../lib/utils/validation-wrapper";
import {
  CashFlowPoint,
  ChartGranularity,
  granularityMap,
  ExpenseFrequency,
} from "@/src/type/chart";
import { success } from "zod";

export async function getUserBarStatistics(
  dateGranuality: ChartGranularity,
): Promise<ActionResponse<CashFlowPoint[]>> {
  const dateGroup = granularityMap[dateGranuality];

  return authenticateUser(async (userId) => {
    try {
      const res = await prisma.$queryRaw<CashFlowPoint[]>`SELECT
  date_trunc(${dateGroup}, stats_data.created_at) as "dateStart",
  stats_data.transit,
  SUM(stats_data.amount) as total
FROM (
  SELECT amount, created_at, 'in' as transit FROM income inc 
  WHERE inc.user_id = ${userId}

  UNION ALL

  SELECT t.price as amount, t.created_at, 'out' as transit FROM expense e
  JOIN public.transaction t ON t.expense_id = e.id
   WHERE e.user_id = ${userId}
) as stats_data
GROUP BY "dateStart", transit
ORDER BY "dateStart"`;

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

export async function getUserExpenseBreakdown(): Promise<
  ActionResponse<ExpenseFrequency[]>
> {
  return authenticateUser(async (userID) => {
    try {
      const res = await prisma.$queryRaw<ExpenseFrequency[]>`SELECT
    e.expense_type AS "type",
    COUNT(t.id)::int AS frequency
  FROM public.expense e
  JOIN public.transaction t
    ON t.expense_id = e.id
  WHERE e.user_id = ${userID}
    AND e.is_archived = false
  GROUP BY e.expense_type
  ORDER BY frequency DESC;`;

      if (!res) {
        return { success: false, error: "err" };
      }

      return {
        success: true,
        data: res,
      };
    } catch (e) {
      return { success: false, error: "err" };
    }
  });
}

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
