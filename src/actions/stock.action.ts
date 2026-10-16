"use server";

import { prisma } from "@/src/lib/prisma-client";
import { ActionResponse } from "@/src/schema/auth.schema";
import {
  StockModel,
  AdjustStockSchema,
  AdjustStockInputModel,
} from "../schema/stock.schema";
import { TaskFormModelOutput } from "@/src/schema/task.schema";
import { withAuth } from "@/src/lib/utils/validation-wrapper";
import { StockListSchema } from "../schema/expense.schema";
import { AppError, getErrorMessage } from "../lib/errors";
import { DateRepeatType } from "../generated/prisma";

export async function GetUserStock(): Promise<ActionResponse<StockModel[]>> {
  return withAuth(async (userId) => {
    try {
      const userStock = await prisma.stock.findMany({
        where: {
          expense: {
            user_id: userId,
          },
        },
        include: {
          expense: true,
        },
      });

      const parsedStock: StockModel[] = userStock.map((stock) => {
        return {
          id: stock.id,
          name: stock.expense.name,
          description: stock.expense.description || "",
          curr_amount: stock.curr_amount || 0,
          min_amount: stock.min_amount || 0,
        };
      });

      return {
        success: true,
        data: parsedStock,
      };
    } catch (err) {
      console.error("Error fetching user stock:", err);
      return {
        success: false,
        error: getErrorMessage(err),
      };
    }
  });
}

const STOCK_TASK_CATEGORY = "Home";

type StockAdjustResult = {
  currAmount: number;
  taskChange: "created" | "completed" | "none";
};

export async function manageStockAmount(
  input: AdjustStockInputModel,
): Promise<ActionResponse<{ message: string }>> {
  const parsedData = AdjustStockSchema.safeParse(input);

  if (!parsedData.success) {
    return {
      success: false,
      error: "Stock Parsed Failed",
    };
  }

  const { stockId, action } = parsedData.data;

  return withAuth(async (userId) => {
    try {
      const res = await prisma.$transaction(async (tsc) => {
        //Updates the stock table
        const { count } = await tsc.stock.updateMany({
          where: {
            id: stockId,
            expense: { user_id: userId },
            ...(action === "decrement" ? { curr_amount: { gt: 0 } } : {}),
          },
          data: {
            curr_amount:
              action === "increment" ? { increment: 1 } : { decrement: 1 },
          },
        });

        if (count === 0) {
          throw new AppError(
            action === "decrement"
              ? "Stock not found, or already at 0"
              : "Stock not found",
          );
        }

        const stock = await tsc.stock.findFirstOrThrow({
          where: { id: stockId, expense: { user_id: userId } },
          select: {
            curr_amount: true,
            min_amount: true,
            expense: { select: { id: true, name: true } },
          },
        });

        const needsRestock = stock.curr_amount < stock.min_amount;

        const openTask = await tsc.task.findFirst({
          where: {
            expense_id: stock.expense.id,
            completed: false,
            is_archived: false,
            task_category: { user_id: userId },
          },
          select: { id: true },
        });

        let taskChange: StockAdjustResult["taskChange"] = "none";

        //Checks if the current stock amount exceeds or falls short of the minimum value
        if (needsRestock && !openTask) {
          const category = await tsc.task_category.findFirst({
            where: { is_system: true, title: STOCK_TASK_CATEGORY },
            select: { id: true },
          });

          if (!category) {
            throw new AppError(
              `Create a "${STOCK_TASK_CATEGORY}" task category first`,
            );
          }

          //Creates a task if doesn't exist or update existing task to buy new stock (curr value is below minimum)
          await tsc.task.create({
            data: {
              title: `Buy ${stock.expense.name}`,
              task_category_id: category.id,
              expense_id: stock.expense.id,
              repeating_type: DateRepeatType.MANUAL,
            },
          });
          taskChange = "created";
        } else if (!needsRestock && openTask) {
          //Completes a task for the buy stock (curr value is above minimum)
          await tsc.task.update({
            where: { id: openTask.id },
            data: { completed: true },
          });
          taskChange = "completed";
        }

        //  await tsc.task.upsert({
        //           where: {
        //             id: existingTask.id,
        //             task_category: {
        //               user_id: userId,
        //             },
        //           },
        //           update: {
        //             completed: true,
        //           },
        //           create: {
        //             title: updateTask.title,
        //             description: updateTask.description,
        //             task_category_id: updateTask.category_id,
        //             completed: updateTask.completed,
        //             priority_level: updateTask.priority_level,
        //             repeating_type: updateTask.repeating_type,
        //             expense_id: updateTask.expense_id ?? "",
        //           },
        //         });

        //  if (
        //         existingTask &&
        //         updatedStock.curr_amount >= updatedStock.min_amount
        //       ) {
        //   await tsc.task.update({
        //     where: {
        //       id: existingTask.id,
        //       task_category: {
        //         user_id: userId,
        //       },
        //     },
        //     data: {
        //       completed: true,
        //     },
        //   });
        // } else if (
        //   !existingTask &&
        //   updatedStock.curr_amount < updatedStock.min_amount
        // ) {
        //   await tsc.task.create({
        //     data: {
        //       title: updateTask.title,
        //       description: updateTask.description,
        //       task_category_id: updateTask.category_id,
        //       completed: updateTask.completed,
        //       priority_level: updateTask.priority_level,
        //       repeating_type: updateTask.repeating_type,
        //       expense_id: updateTask.expense_id,
        //     },
        //   });
        // }
      });

      return {
        success: true,
        data: { message: "Success" },
      };
    } catch (err) {
      console.error("Error managing stock amount:", err);
      return {
        success: false,
        error: getErrorMessage(err),
      };
    }
  });
}
