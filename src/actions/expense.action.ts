"use server";

import { prisma } from "@/src/lib/prisma-client";
import {
  DynamicFormInputModel,
  DynamicFormSchema,
  DynamicListModel,
  DynamicFormModel,
} from "@/src/schema/expense.schema";
import { ActionResponse } from "../schema/auth.schema";
import { DateRepeatType, ExpenseType, Prisma } from "../generated/prisma";
import { authenticateUser } from "../lib/utils/validation-wrapper";
import { ListParams } from "@/src/type/data-list";
import { getNextDueDate } from "../lib/utils/date-formatter";
import { success } from "zod";
import { da } from "zod/v4/locales";

const expenseQueryInclude = {
  bill_expense: true,
  transportation_expense: true,
  stock: true,
} satisfies Prisma.expenseInclude;

type ExpenseWithRelations = Prisma.expenseGetPayload<{
  include: typeof expenseQueryInclude;
}>;

function mapPrismaToDomain(item: ExpenseWithRelations): DynamicListModel {
  const common = {
    id: item.id.toString(),
    title: item.name ?? "",
    description: item.description ?? "",
  };

  switch (item.expense_type) {
    case ExpenseType.TRANSPORTATION:
      const rawCosts = item.transportation_expense?.cost_list ?? [];
      return {
        ...common,
        expense_type: ExpenseType.TRANSPORTATION,
        cost_list: rawCosts.map((amount) => ({ amount })),
      };

    case ExpenseType.HOUSE:
    case ExpenseType.PERSONAL: {
      return {
        ...common,
        expense_type: item.expense_type,
        repeating_type:
          item.bill_expense?.repeating_type ?? DateRepeatType.MANUAL,
        running_bill: item.bill_expense?.running_bill ?? 0,
      };
    }

    case ExpenseType.GROCERY: {
      return {
        ...common,
        expense_type: ExpenseType.GROCERY,
        curr_amount: item.stock?.curr_amount ?? 0,
        min_amount: item.stock?.min_amount ?? 0,
      };
    }

    default: {
      return {
        ...common,
        expense_type: item.expense_type ?? ExpenseType.MISC,
      };
    }
  }
}

export async function CreateExpense(
  data: DynamicFormInputModel,
): Promise<ActionResponse<{ message: string }>> {
  const parsedData = DynamicFormSchema.safeParse(data);
  if (!parsedData.success) {
    return {
      success: false,
      error: "Expense Parse Error",
    };
  }

  return authenticateUser(async (userId) => {
    try {
      //creates an instance of transaction for simultaneous successful db functions or none at all
      const res = await prisma.$transaction(async (tsc) => {
        const newExpense = await tsc.expense.create({
          data: {
            name: data.title,
            description: data.description,
            expense_type: data.expense_type,
            user_id: userId,
          },
        });

        //Conditional Insert into related tables
        switch (data.expense_type) {
          //For Bill Table
          case ExpenseType.HOUSE:
          case ExpenseType.PERSONAL:
            await tsc.bill_expense.create({
              data: {
                expense_id: newExpense.id,
                repeating_type: data.repeating_type,
                running_bill: data.running_bill || 0,
              },
            });

            if (data.repeating_type !== DateRepeatType.MANUAL) {
              //insert into transaction table if an expense is repeating
              const repeatingDate = getNextDueDate(data.repeating_type);
              await tsc.transaction.create({
                data: {
                  amount: 0,
                  expense_id: newExpense.id,
                  price: data.running_bill,
                  repeat_at: repeatingDate,
                  status: "PENDING",
                },
              });
            }
            break;
          //For Transportation table
          case ExpenseType.TRANSPORTATION:
            const costList: number[] = data.cost_list.map((item) =>
              Number(item.amount),
            );
            await tsc.transportation_expense.create({
              data: {
                expense_id: newExpense.id,
                cost_list: costList,
              },
            });
            break;
          //For Stock table
          case ExpenseType.GROCERY:
            await tsc.stock.create({
              data: {
                expense_id: newExpense.id,
                min_amount: data.min_amount,
              },
            });
            break;

          default:
        }

        return newExpense;

        // switch (data.expense_type) {
        //   case ExpenseType.HOUSE:
        //   case ExpenseType.PERSONAL:
        //     await tsc.bill_expense.create({
        //       data: {
        //         expense_id: newExpense.id,
        //         repeating_type: data.repeating_type,
        //         running_bill: data.running_bill || 0,
        //       },
        //     });

        //     if (data.repeating_type !== DateRepeatType.MANUAL) {
        //       //insert into transaction table
        //     }
        //     break;
        //   case ExpenseType.TRANSPORTATION:
        //     const costList: number[] = data.cost_list.map((item) =>
        //       Number(item.amount),
        //     );
        //     await prisma.transportation_expense.create({
        //       data: {
        //         expense_id: newExpense.id,
        //         cost_list: costList,
        //       },
        //     });
        //     break;
        //   case ExpenseType.GROCERY:
        //     await prisma.stock.create({
        //       data: {
        //         expense_id: newExpense.id,
        //         min_amount: data.min_amount,
        //       },
        //     });

        //   default:
        // }
      });

      if (!res) {
        return {
          success: false,
          error: "Error creating new expense",
        };
      }

      return {
        success: true,
        data: { message: "Success" },
      };
    } catch (e) {
      const message =
        e instanceof Error ? e.message : "An unknown error occurred";

      return {
        success: false,
        error: message,
      };
    }
  });
}

export async function GetUserExpenses({
  category,
  filter,
  groupBy,
  searchText,
}: ListParams): Promise<ActionResponse<DynamicListModel[]>> {
  return authenticateUser(async (userId) => {
    const validType =
      category && Object.values(ExpenseType).includes(category as ExpenseType)
        ? (category as ExpenseType)
        : undefined;

    try {
      const userExpenses = await prisma.expense.findMany({
        where: {
          user_id: userId,
          ...(category ? { expense_type: validType } : {}),
        },
        include: expenseQueryInclude,
        orderBy: { expense_type: "asc" },
      });
      const parsedExpense: DynamicListModel[] =
        userExpenses.map(mapPrismaToDomain);

      return {
        success: true,
        data: parsedExpense,
      };
    } catch (e) {
      console.log("Error fetching user expense:", e);
      return {
        success: false,
        error: "e",
      };
    }
  });
}

export async function GetUserExpenseByType(
  type: ExpenseType,
): Promise<ActionResponse<DynamicListModel[]>> {
  const userExpense = await authenticateUser(async (userId) => {
    return {
      success: true,
      data: await prisma.expense.findMany({
        where: { user_id: userId, expense_type: type },
        include: expenseQueryInclude,
        orderBy: { name: "desc" },
      }),
    };
  });

  if (!userExpense.success) return { success: false, error: userExpense.error };
  const mappedExpense: DynamicListModel[] =
    userExpense.data.map(mapPrismaToDomain);

  return {
    success: true,
    data: mappedExpense,
  };
}
