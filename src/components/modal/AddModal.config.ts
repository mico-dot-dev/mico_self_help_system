import dynamic from "next/dynamic";
import React from "react";
import { ModuleWithModals } from "@/src/type/module";

interface AddContents {
  label: string;
  description: string;
  AddFormComponent: React.ComponentType<{ closeModal: () => void }>;
}

const TaskForm = dynamic(() => import("@/src/components/form/TaskForm"));
const TaskCategoryForm = dynamic(
  () => import("@/src/components/form/TaskCatForm"),
);
const ExpenseForm = dynamic(() => import("@/src/components/form/ExpenseForm"));
const TransactionForm = dynamic(
  () => import("@/src/components/form/TransactionForm"),
);
const IncomeForm = dynamic(() => import("@/src/components/form/IncomeForm"));

export const FORM_REGISTRY: Record<ModuleWithModals, AddContents> = {
  task: {
    label: "Task",
    description:
      "Capture, organize, and track your daily to-dos, priorities, and deadlines to stay productive and focused.",
    AddFormComponent: TaskForm,
  },

  task_category: {
    label: "Category",
    description:
      "Toss your tasks into tidy little buckets so your dashboard stays organized.",
    AddFormComponent: TaskCategoryForm,
  },

  expense: {
    label: "Expense",
    description:
      "Set up and manage your go-to spending items so you can log them easily later.",
    AddFormComponent: ExpenseForm,
  },

  transaction: {
    label: "Transaction",
    description:
      "Log your cash flow without the headache—see where your money is actually going.",
    AddFormComponent: TransactionForm,
  },

  income: {
    label: "Income",
    description: "Add a new income source and track your earnings.",
    AddFormComponent: IncomeForm,
  },

  budget: {
    label: "Budget",
    description: "Set spending limits and keep your finances organized.",
    AddFormComponent: IncomeForm,
  },
};
