"use server";

import React from "react";
import DataShowcase from "@/src/components/ui/DataShowcase";
import IncomeItemCard from "@/src/components/income/IncomeItemCard";
import { incomeColumns } from "@/src/components/income/IncomeTableStructure";
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
