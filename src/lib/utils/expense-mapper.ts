import {
  House,
  UserRound,
  Bus,
  ShoppingCart,
  Package,
  LucideIcon,
} from "lucide-react";
import { ExpenseType } from "@/src/generated/prisma";
import { DynamicListModel } from "@/src/schema/expense.schema";
import { upperCaseFormat } from "./formatter";

//Move to types
export interface expenseCardSubContent {
  primary: string;
  secondary: string;
}

//Move to types
export interface expenseIconProps {
  title: string;
  description: string;
  icon: LucideIcon;
  bg: string;
  color?: string;
}

const EMPTY: expenseCardSubContent = { primary: "", secondary: "" };

export const expenseIconMap: Record<ExpenseType, expenseIconProps> = {
  [ExpenseType.HOUSE]: {
    title: "House",
    description: "Bills from the house",
    icon: House,
    bg: "bg-active",
  },
  [ExpenseType.PERSONAL]: {
    title: "Personal",
    description: "Personal Expenses",
    icon: UserRound,
    bg: "bg-hover",
  },
  [ExpenseType.TRANSPORTATION]: {
    title: "Transportation",
    description: "",
    icon: Bus,
    bg: "bg-info",
  },
  [ExpenseType.GROCERY]: {
    title: "Grocery",
    description: "",
    icon: ShoppingCart,
    bg: "bg-warning",
  },
  [ExpenseType.MISC]: {
    title: "Miscellaneous",
    description: "",
    icon: Package,
    bg: "bg-success",
  },
};

export function getExpenseListSubContent(
  expense: DynamicListModel,
): expenseCardSubContent {
  switch (expense.expense_type) {
    case ExpenseType.HOUSE:
    case ExpenseType.PERSONAL:
      const type = expense.repeating_type;
      return {
        primary: upperCaseFormat(type),
        secondary: "Repeating Cost: " + "₱" + expense.running_bill.toString(),
      };

    case ExpenseType.GROCERY:
      return {
        primary:
          "Current Amount: " +
          (expense.curr_amount ? expense.curr_amount.toString() : "0"),
        secondary: "Minimum Amount: " + expense.min_amount.toString(),
      };
    case ExpenseType.TRANSPORTATION:

    case ExpenseType.MISC:
      return EMPTY;
    default:
      throw new Error("Unidentified Expense Type");
  }
}
