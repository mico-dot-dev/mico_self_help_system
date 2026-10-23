"use client";

import { twJoin } from "tailwind-merge";
import { expenseIconProps } from "@/src/lib/utils/expense-mapper";
import { ExpenseType } from "@/src/generated/prisma";
import { Circle } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import IconContainer from "@/src/components/shared/IconContainer";

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
    <Button
      variant={isSelected ? "default" : "secondary"}
      type="button"
      onClick={() => onSelectType(expenseType)}
      className="flex flex-row justify-items-start"
    >
      <IconContainer Icon={IconComponent} tone="none" />
      {/* <div className="p-2">
        <IconComponent />
      </div> */}
      <div className="flex flex-col ">
        <p className="p-0 m-0 ">{iconConfig.title}</p>
      </div>
    </Button>
  );
}

export default ExpenseTypeCard;
