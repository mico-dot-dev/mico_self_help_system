"use client";

import { twJoin } from "tailwind-merge";
import { expenseIconProps } from "@/src/lib/utils/expense-mapper";
import { ExpenseType } from "@/src/generated/prisma";
import { Circle } from "lucide-react";

type expenseButtonProps = {
  isSelected: boolean;
  expenseType: ExpenseType;
  iconConfig: expenseIconProps;
  onSelectType: (type: ExpenseType) => void;
};

function ExpenseTypeCard({
  isSelected,
  expenseType,
  iconConfig,
  onSelectType,
}: expenseButtonProps) {
  const IconComponent = iconConfig.icon;

  return (
    <button
      className={twJoin(
        "border bg-background border-border w-full cursor-pointer flex mb-3 py-3.5 items-center rounded-xl hover:border-primary hover:bg-surface",
        isSelected && "border-primary font-semibold text-primary bg-surface",
      )}
      type="button"
      onClick={() => onSelectType(expenseType)}
    >
      <div className=" ml-3">
        <Circle size={18} fill={isSelected ? "#a855f7" : ""} />
      </div>
      <div className=" mx-3 p-2">
        <IconComponent />
      </div>
      <div className="flex flex-col text-start">
        <p className="p-0 m-0 ">{iconConfig.title}</p>
      </div>
    </button>
  );
}

export default ExpenseTypeCard;
