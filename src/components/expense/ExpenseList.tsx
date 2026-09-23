import React from "react";
import { GetUserExpenses } from "@/src/actions/expense.action";
import { ListParams } from "@/src/type/data-list";
import { expenseColumns } from "./ExpenseTableStructure";
import DataShowcase from "../ui/DataShowcase";
import ExpenseItemCard from "./ExpenseItemCard";

interface TaskListProps {
  searchParams?: ListParams;
}

async function ExpenseList({ searchParams }: TaskListProps) {
  const expenses = await GetUserExpenses({ ...searchParams });
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
