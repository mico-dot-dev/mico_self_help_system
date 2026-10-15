"use server";

import { prisma } from "../lib/prisma-client";
import { ActionResponse } from "../schema/auth.schema";
import {
  TransactionFormModel,
  TransactionListModel,
  TransactionSchema,
} from "@/src/schema/transaction.schema";
import { withAuth } from "@/src/lib/utils/validation-wrapper";
import { TransactionStatus } from "@/src/generated/prisma";
import { getErrorMessage } from "../lib/errors";

export async function getTransactions(): Promise<
  ActionResponse<TransactionListModel[]>
> {
  return withAuth(async (userId) => {
    try {
      const userTransaction = await prisma.expense.findMany({
        where: {
          user_id: userId,
        },
        select: {
          transaction: true,
          expense_type: true,
          name: true,
        },
      });

      const parsedData: TransactionListModel[] = userTransaction.flatMap(
        (transactionArray) =>
          transactionArray.transaction.map((transaction) => {
            return {
              name: transactionArray.name,
              expense_type: transactionArray.expense_type,
              status: transaction.status,
              amount: transaction.amount,
              price: transaction.price.toNumber(),
              date_added: transaction.created_at,
              due_date: transaction.repeat_at ?? undefined,
              expense_id: transaction.expense_id,
            };
          }),
      );

      return {
        success: true,
        data: parsedData,
      };
    } catch (error) {
      console.error("Error fetching transactions:", error);
      return { success: false, error: getErrorMessage(error) };
    }
  });
}

export async function createTransaction(
  input: TransactionFormModel,
): Promise<ActionResponse<{ message: boolean }>> {
  const parsed = TransactionSchema.safeParse(input);
  if (!parsed.success) {
    return {
      success: false,
      error: "Invalid input",
    };
  }

  const { expense_id, amount, price } = parsed.data;

  return await withAuth(async (userId) => {
    try {
      await prisma.expense.update({
        where: { id: expense_id, user_id: userId, is_archived: false },
        data: {
          transaction: {
            create: {
              amount: amount,
              price: price,
              status: TransactionStatus.PENDING,
            },
          },
        },
      });

      return {
        success: true,
        data: { message: true },
      };
    } catch (error) {
      console.error("Error creating transaction:", error);
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  });
}
