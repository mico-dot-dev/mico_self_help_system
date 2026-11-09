import React from "react";
import { getExpense } from "@/src/actions/expense.action";
import { ListParams } from "@/src/type/data-list";
import { expenseColumns } from "../expense.column";
import DataShowcase from "../../../components/shared/DataShowcase";
import ExpenseItemCard from "./ExpenseItemCard";

interface TaskListProps {
  searchParams?: ListParams;
}

async function ExpenseList({ searchParams }: TaskListProps) {
  const expenses = await getExpense({ ...searchParams });
  if (!expenses.success) {
    return <p>Expense Data Not Found</p>;
  }
  return (
    <DataShowcase
      columns={expenseColumns}
      data={expenses.data}
      CardComponent={ExpenseItemCard}
      module="expense"
    />
  );
}

export default ExpenseList;
