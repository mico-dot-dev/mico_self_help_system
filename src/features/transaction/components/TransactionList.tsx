import React from "react";
import { transactionColumn } from "@/features/transaction/transaction.columns";
import { getTransactions } from "@/src/actions/transaction.action";
import TransactionCard from "./TransactionCard";
import DataShowcase from "@/components/ui/DataShowcase";

async function TransactionList() {
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

export default TransactionList;
