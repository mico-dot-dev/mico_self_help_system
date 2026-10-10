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
import { DateRange } from "../type/date-range";
import { subMonths } from "date-fns";
import { format } from "date-fns";
import { WeeklyStatisticsModel } from "../schema/dashboard.schema";

export async function getUserHeaderStatistics(
  daterange: DateRangeModel,
): Promise<ActionResponse<HeaderStatisticsModel>> {
  return authenticateUser(async (userId) => {
    const prevRange: DateRange = {
      from: subMonths(daterange.from, 1),
      to: subMonths(daterange.to, 1),
    };
    try {
      const from = format(daterange.from, "yyyy-MM-dd");
      const to = format(daterange.to, "yyyy-MM-dd");

      const res = await prisma.$queryRaw<HeaderStatisticsModel[]>`
        WITH weeks AS (
          SELECT
          n AS week_index
          FROM generate_series(0, (((${to}::date - ${from}::date)) / 7)::int) AS n
        ),
        flows AS (
          SELECT (i.date_obtained AT TIME ZONE 'Asia/Manila')::date AS day,
                 i.amount::float8 AS amount, 'in' AS transit
          FROM public.income i
          WHERE i.user_id = ${userId}::uuid

          UNION ALL

          SELECT (t.created_at AT TIME ZONE 'Asia/Manila')::date,
                 t.price::float8, 'out'
          FROM public.expense e
          JOIN public."transaction" t ON t.expense_id = e.id
          WHERE e.user_id = ${userId}::uuid
            AND t.status IS DISTINCT FROM 'CANCELLED'
        ),

        weekly_statistics AS(
        SELECT w.week_index,
          COALESCE(SUM(f.amount) FILTER (WHERE f.transit = 'in'),  0) AS income,
          COALESCE(SUM(f.amount) FILTER (WHERE f.transit = 'out'), 0) AS expense
        FROM weeks w
        LEFT JOIN flows f ON f.day BETWEEN ${from} AND ${to}
        GROUP BY w.week_index
        ORDER BY w.week_index),

        totals AS (
          SELECT
          COALESCE(SUM(amount) FILTER (WHERE transit = 'in'),  0) AS total_income,
          COALESCE(SUM(amount) FILTER (WHERE transit = 'out'), 0) AS total_expense,
          COALESCE(SUM(amount) FILTER (WHERE transit = 'in'  AND day BETWEEN ${from}::date AND ${to}::date), 0) AS period_income,
          COALESCE(SUM(amount) FILTER (WHERE transit = 'out' AND day BETWEEN ${from}::date AND ${to}::date), 0) AS period_expense,
          COALESCE(SUM(amount) FILTER (WHERE transit = 'in'  AND day BETWEEN ${prevRange.from}::date AND ${prevRange.to}::date), 0) AS prev_income,
          COALESCE(SUM(amount) FILTER (WHERE transit = 'out' AND day BETWEEN ${prevRange.from}::date AND ${prevRange.to}::date), 0) AS prev_expense
          FROM flows
        )
        SELECT t.*,
              (SELECT COALESCE(json_agg(w ORDER BY w.week_index), '[]'::json) FROM weekly_statistics w) AS weekly_statistics
        FROM totals t
        `;

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
