"use server";

import { ActionResponse } from "../schema/auth.schema";
import { prisma } from "@/src/lib/prisma-client";
import { authenticateUser } from "../lib/utils/validation-wrapper";
import { ExpenseFrequency } from "@/src/type/chart";
import {
  CashFlowPointModel,
  DateRangeModel,
  HeaderStatisticsModel,
  HeaderStatisticsSchema,
} from "../schema/dashboard.schema";
import { ReturnErrorMessage } from "../hook/ReturnErrorMessage";
import { tr } from "zod/v4/locales";
import { DateRange } from "../type/date-range";
import { subMonths } from "date-fns";

export async function getUserHeaderStatistics(
  daterange: DateRangeModel,
): Promise<ActionResponse<HeaderStatisticsModel>> {
  return authenticateUser(async (userId) => {
    const prevRange: DateRange = {
      from: subMonths(daterange.from, 1),
      to: subMonths(daterange.to, 1),
    };
    try {
      const res = await prisma.$queryRaw<
        HeaderStatisticsModel[]
      >`WITH flows AS (
          SELECT i.amount::float8 AS amount, i.date_obtained AS at, 'in' AS transit
          FROM public.income i
          WHERE i.user_id = ${userId}

          UNION ALL

          SELECT t.price::float8, t.created_at, 'out'
          FROM public.expense e
          JOIN public."transaction" t ON t.expense_id = e.id
          WHERE e.user_id = ${userId}
            AND t.status IS DISTINCT FROM 'CANCELLED'
        )
        SELECT
          COALESCE(SUM(amount) FILTER (WHERE transit = 'in'), 0)  AS total_income,
          COALESCE(SUM(amount) FILTER (WHERE transit = 'out'), 0) AS total_expense,
          COALESCE(SUM(amount) FILTER (WHERE transit = 'in'  AND at >= ${daterange.from} AND at < ${daterange.to}), 0) AS period_income,
          COALESCE(SUM(amount) FILTER (WHERE transit = 'out' AND at >= ${daterange.from} AND at < ${daterange.to}), 0) AS period_expense,
          COALESCE(SUM(amount) FILTER (WHERE transit = 'in'  AND at >= ${prevRange.from} AND at < ${prevRange.to}), 0) AS prev_income,
          COALESCE(SUM(amount) FILTER (WHERE transit = 'out' AND at >= ${prevRange.from} AND at < ${prevRange.to}), 0) AS prev_expense
        FROM flows`;

      const parsed = HeaderStatisticsSchema.safeParse(res[0]);
      if (!parsed.success)
        return { success: false, error: "Invalid stats shape" };
      return { success: true, data: parsed.data };
    } catch (e) {
      return {
        success: false,
        error: ReturnErrorMessage(e),
      };
    }
  });
}

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
        error: ReturnErrorMessage(e),
      };
    }
  });
}

export async function getUserExpenseBreakdown(
  daterange: DateRangeModel,
): Promise<ActionResponse<ExpenseFrequency[]>> {
  return authenticateUser(async (userID) => {
    try {
      const res = await prisma.$queryRaw<ExpenseFrequency[]>`SELECT
    e.expense_type AS "type",
    SUM(t.price) AS amount
  FROM public.expense e
  JOIN public.transaction t
    ON t.expense_id = e.id
  WHERE e.user_id = ${userID}
    AND t.created_at >= ${daterange.from}
    AND t.created_at <= ${daterange.to}
  GROUP BY e.expense_type
  ORDER BY amount DESC`;

      if (!res) {
        return { success: false, error: "Query Error" };
      }

      return {
        success: true,
        data: res,
      };
    } catch (e) {
      return { success: false, error: ReturnErrorMessage(e) };
    }
  });
}
