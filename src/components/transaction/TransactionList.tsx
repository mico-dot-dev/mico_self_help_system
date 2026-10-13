import React from "react";
import { transactionColumn } from "@/src/components/transaction/TransactionTableStructure";
import { getTransactions } from "@/src/actions/transaction.action";
import TransactionCard from "./TransactionCard";
import DataShowcase from "../ui/DataShowcase";

async function TaskList() {
  const userTransactions = await getTransactions();

  if (!userTransactions.success) {
    return <p> No User Transaction</p>;
  }

  return (
    <DataShowcase
      data={userTransactions.data}
      columns={transactionColumn}
      CardComponent={TransactionCard}
      module="transaction"
    />
  );
}

export default TaskList;
