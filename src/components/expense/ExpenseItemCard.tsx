"use client";

import { DynamicListModel } from "@/src/schema/expense.schema";
import { EllipsisVertical } from "lucide-react";
import {
  expenseCardSubContent,
  getExpenseListSubContent,
  expenseIconMap,
} from "@/src/lib/utils/expense-mapper";
import { twJoin } from "tailwind-merge";
import { ModuleCardProps } from "@/src/type/data-table";

function ExpenseItemCard({ data }: ModuleCardProps<DynamicListModel>) {
  const expenseIconInfo = expenseIconMap[data.expense_type];
  const IconComponent = expenseIconInfo.icon;
  const subInfo: expenseCardSubContent = getExpenseListSubContent(data);

  return (
    <li className="card-container-base flex flex-col p-5">
      <div className="flex flex-row pb-3 border-b border-border">
        <div
          className={twJoin(
            "self-center justify-items-center content-center w-10 h-10 mr-3 rounded-md bg-",
            expenseIconInfo.bg,
          )}
        >
          {" "}
          <IconComponent size={25} strokeWidth={1.5} />
        </div>

        <div className="flex-1">
          {" "}
          <p>{data.title}</p>
          <p className="text-sm text-text-muted">{data.description}</p>
        </div>
        <div className="">
          <EllipsisVertical size={20} />
        </div>
      </div>

      <div className="flex flex-row items-end justify-between pt-3">
        <p>{subInfo.primary}</p>
        <p className="text-sm text-text-muted">{subInfo.secondary}</p>
      </div>
    </li>
  );
}

export default ExpenseItemCard;
