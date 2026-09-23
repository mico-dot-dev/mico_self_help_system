import { ComponentType } from "react";
import TaskList from "@/src/components/task/TaskList";
import ExpenseList from "@/src/components/expense/ExpenseList";
import StockList from "@/src/components/stock/StockList";
import TransactionList from "@/src/components/transaction/TransactionList";
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
  income: ExpenseList,
  stock: StockList,
  transaction: TransactionList,
};
