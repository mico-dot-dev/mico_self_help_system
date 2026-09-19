"use server";

import { prisma } from "@/src/lib/prisma-client";
import { ActionResponse } from "@/src/schema/auth.schema";
import { StockModel } from "../schema/stock.schema";
import { TaskFormModelOutput } from "@/src/schema/task.schema";
import { revalidatePath } from "next/cache";
import { authenticateUser } from "@/src/lib/utils/validation-wrapper";
import { StockListSchema } from "../schema/expense.schema";

export async function GetUserStock(): Promise<ActionResponse<StockModel[]>> {
  return authenticateUser(async (userId) => {
    try {
      const userStock = await prisma.expense.findMany({
        where: {
          user_id: userId,
          stock: {
            isNot: null,
          },
        },
        include: {
          stock: true,
        },
      });

      const parsedStock: StockModel[] = userStock.map((stock) => {
        return {
          id: stock.stock!.id.toString(),
          name: stock.name!,
          description: stock.description!,
          curr_amount: stock.stock?.curr_amount || 0,
          min_amount: stock.stock?.min_amount || 0,
        };
      });

      return {
        success: true,
        data: parsedStock,
      };
    } catch (err) {
      console.error(err);
      return {
        success: false,
        error: "Get Stock Error",
      };
    }
  });
}

export async function ManageStockAmount(
  stock: StockModel,
  action: "increment" | "decrement",
) {
  const parsedStock = StockListSchema.safeParse(stock);

  if (!parsedStock) {
    return {
      success: false,
      error: "Stock Parsed Failed",
    };
  }

  if (action === "decrement" && stock.curr_amount <= 0) {
    return {
      success: false,
      error: "Current amount cannot be less than 0",
    };
  }

  const insertRes = await authenticateUser(async (userId) => {
    try {
      const res = await prisma.$transaction(async (tsc) => {
        //Updates the stock table
        const updatedStock = await tsc.stock.update({
          where: {
            id: parseInt(stock.id),
            expense: {
              user_id: userId,
            },
          },
          select: {
            curr_amount: true,
            min_amount: true,
            expense: {
              select: {
                id: true,
                name: true,
              },
            },
          },
          data: {
            curr_amount:
              action === "increment"
                ? stock.curr_amount + 1
                : stock.curr_amount - 1,
          },
        });

        if (!updatedStock || updatedStock.curr_amount === null) {
          return {
            success: false,
            error: "Failed to update stock amount",
          };
        }

        // Fetches a pre inserted category
        const stockTaskCategory = await tsc.task_category.findUnique({
          where: {
            title: "Home",
            user_id: userId,
          },
        });

        if (!stockTaskCategory) {
          return {
            success: false,
            error: "Stock task category not found",
          };
        }

        const updateTask: TaskFormModelOutput = {
          title: "Buy " + updatedStock.expense.name,
          description: "",
          category_id: Number(stockTaskCategory.id),
          completed: false,
          priority_level: 0,
          repeating_type: "MANUAL",
          expense_id: Number(updatedStock.expense.id),
        };

        const existingTask = await tsc.task.findFirst({
          where: {
            expense_id: Number(updatedStock.expense.id),
            completed: false,
            task_category: {
              user_id: userId,
            },
          },
        });

        if (!existingTask) {
          return {
            success: false,
            error: "No existingTask",
          };
        }

        //Checks if the current stock amount exceeds or falls short of the minimum value
        //Creates a task if doesn't exist or update existing task to buy new stock (curr value is below minimum)
        //Completes a task for the buy stock (curr value is above minimum)

        await tsc.task.upsert({
          where: {
            id: existingTask.id,
            task_category: {
              user_id: userId,
            },
          },
          update: {
            completed: true,
          },
          create: {
            title: updateTask.title,
            description: updateTask.description,
            task_category_id: updateTask.category_id,
            completed: updateTask.completed,
            priority_level: updateTask.priority_level,
            repeating_type: updateTask.repeating_type,
            expense_id: updateTask.expense_id,
          },
        });
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

      if (!res) {
        return {
          success: false,
          error: "Update Failed",
        };
      }
      return {
        success: true,
        data: { message: "Success" },
      };
    } catch (err) {
      return {
        success: false,
        error: "ManageStockAmount Failure",
      };
    }
  });
  revalidatePath("/(dashboard)/stock");
}
