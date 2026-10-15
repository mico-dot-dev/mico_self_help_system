"use server";

import { parse } from "path";
import { ActionResponse } from "../schema/auth.schema";
import { withAuth } from "../lib/utils/validation-wrapper";
import {
  incomeSchema,
  incomeListModel,
  incomeInputModel,
} from "../schema/income.schema";
import { prisma } from "@/src/lib/prisma-client";
import { error } from "console";
import { getErrorMessage } from "../lib/errors";

export async function createIncome(
  data: incomeInputModel,
): Promise<ActionResponse<{ message: string }>> {
  const parsedData = incomeSchema.safeParse(data);
  if (!parsedData.success) {
    return {
      success: false,
      error: "Parsing failed",
    };
  }

  return withAuth(async (userId) => {
    try {
      await prisma.income.create({
        data: {
          user_id: userId,
          amount: data.amount,
          from_job: data.fromJob,
          date_obtained: data.dateObtained,
        },
      });

      return {
        success: true,
        data: { message: "success" },
      };
    } catch (error) {
      console.error("Error creating income:", error);
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  });
}

export async function getUserIncome(): Promise<
  ActionResponse<incomeListModel[]>
> {
  return withAuth(async (userId) => {
    try {
      const userIncome = await prisma.income.findMany({
        where: {
          user_id: userId,
        },
      });

      const parsedIncome: incomeListModel[] = userIncome.map((income) => {
        return {
          amount: income.amount.toNumber(),
          dateObtained: income.date_obtained ?? new Date(),
          fromJob: income.from_job,
        };
      });

      return {
        success: true,
        data: parsedIncome,
      };
    } catch (error) {
      console.error("Error fetching user income:", error);
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  });
}
