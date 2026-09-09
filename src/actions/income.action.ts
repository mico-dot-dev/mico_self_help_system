"use server";

import { parse } from "path";
import { ActionResponse } from "../schema/auth.schema";
import { authenticateUser } from "../lib/utils/validation-wrapper";
import {
  incomeSchema,
  incomeListModel,
  incomeInputModel,
} from "../schema/income.schema";
import { prisma } from "@/src/lib/prisma-client";
import { error } from "console";

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

  return authenticateUser(async (userId) => {
    try {
      const newUserIncome = await prisma.income.create({
        data: {
          user_id: userId,
          amount: data.amount,
          from_job: data.fromJob,
          date_obtained: data.dateObtained,
        },
      });

      if (!newUserIncome) {
        return {
          success: false,
          error: "error insertin data",
        };
      }

      return {
        success: true,
        data: { message: "success" },
      };
    } catch (e) {
      return {
        success: false,
        error: "income insert backend error",
      };
    }
  });
}

export async function getUserIncome(): Promise<
  ActionResponse<incomeListModel[]>
> {
  return authenticateUser(async (userId) => {
    try {
      const userIncome = await prisma.income.findMany({
        where: {
          user_id: userId,
        },
      });

      if (!userIncome) {
        return {
          success: false,
          error: "",
        };
      }

      const parsedIncome: incomeListModel[] = userIncome.map((income) => {
        return {
          amount: income.amount ?? 0,
          dateObtained: income.date_obtained ?? new Date(),
          fromJob: income.from_job,
        };
      });

      return {
        success: true,
        data: parsedIncome,
      };
    } catch (e) {
      return {
        success: false,
        error: "",
      };
    }
  });
}
