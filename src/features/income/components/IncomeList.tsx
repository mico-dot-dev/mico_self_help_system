import React from "react";
import DataShowcase from "@/src/components/shared/DataShowcase";
import IncomeItemCard from "@/features/income/components/IncomeItemCard";
import { incomeColumns } from "@/features/income/income.columns";
import { getUserIncome } from "@/src/actions/income.action";

async function IncomeList() {
  const userIncome = await getUserIncome();

  if (!userIncome.success) {
    return <p> No Income Data</p>;
  }

  return (
    <DataShowcase
      columns={incomeColumns}
      data={userIncome.data}
      CardComponent={IncomeItemCard}
      module="income"
    />
  );
}

export default IncomeList;
