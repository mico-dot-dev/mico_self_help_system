"use server";

import { ActionResponse } from "../schema/auth.schema";
import { prisma } from "@/src/lib/prisma-client";
import { authenticateUser } from "../lib/utils/validation-wrapper";
import { ChartGranularity, ExpenseFrequency } from "@/src/type/chart";
import { CashFlowPointModel, DateRangeModel } from "../schema/dashboard.schema";

export async function getUserHeaderStatistics() {}

export async function getUserBarStatistics(
  daterange: DateRangeModel,
): Promise<ActionResponse<CashFlowPointModel[]>> {
  return authenticateUser(async (userId) => {
    try {
      const res = await prisma.$queryRaw<CashFlowPointModel[]>`SELECT
      date_trunc('day', stats_data.created_at) as "date",
      stats_data.transit,
      SUM(stats_data.amount) as total
      FROM (
        SELECT amount, date_obtained as created_at, 'in' as transit FROM income i
        WHERE i.user_id = ${userId}

        UNION ALL 

        SELECT t.price as amount, t.created_at, 'out' as transit FROM expense e
        JOIN public.transaction t ON t.expense_id = e.id
        WHERE e.user_id = ${userId}
      ) as stats_data
      WHERE stats_data.created_at >= ${daterange.from} AND stats_data.created_at <= ${daterange.to}
      GROUP BY "date", transit
      ORDER BY "date"`;
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

// export async function getUserDashboardHeader():Promise<ActionResponse<{balance:number, income: number, expense:number}>>{

// }
