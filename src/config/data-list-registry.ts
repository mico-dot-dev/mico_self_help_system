import { ComponentType } from "react";
import TaskList from "@/features/task/components/TaskList";
import ExpenseList from "@/features/expense/components/ExpenseList";
import StockList from "@/features/stock/components/StockList";
import IncomeList from "@/features/income/components/IncomeList";
import TransactionList from "@/features/transaction/components/TransactionList";
import { AppModule } from "@/src/type/module";
import { ListParams } from "@/src/type/data-list";

interface TaskListProps {
  searchParams?: ListParams;
}

export const dataListRegistry: Record<
  AppModule,
  ComponentType<TaskListProps>
> = {
  task: TaskList,
  expense: ExpenseList,
  income: IncomeList,
  stock: StockList,
  transaction: TransactionList,
};
