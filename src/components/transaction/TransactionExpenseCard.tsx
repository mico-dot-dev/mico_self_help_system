import React from "react";
import { twJoin } from "tailwind-merge";
import { DynamicListModel } from "@/src/schema/expense.schema";
import { Button } from "../ui/Button";

interface TransactionExpenseCardProps {
  data: DynamicListModel;
  isSelected: boolean;
  onSelectType: (type: number) => void;
}

function TransactionExpenseCard({
  data,
  isSelected,
  onSelectType,
}: TransactionExpenseCardProps) {
  return (
    <Button
      key={data.id}
      type="button"
      variant={isSelected ? "primary" : "secondary"}
      onClick={() => {
        onSelectType(Number(data.id));
      }}
    >
      {data.title}
    </Button>
  );
}

export default TransactionExpenseCard;
