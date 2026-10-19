import React from "react";
import { twJoin } from "tailwind-merge";
import { DynamicListModel } from "@/src/schema/expense.schema";
import { Button } from "@/src/components/ui/button";

interface TransactionExpenseCardProps {
  data: DynamicListModel;
  isSelected: boolean;
  onSelectType: (type: string) => void;
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
      variant={isSelected ? "default" : "secondary"}
      onClick={() => {
        onSelectType(data.id);
      }}
    >
      {data.title}
    </Button>
  );
}

export default TransactionExpenseCard;
