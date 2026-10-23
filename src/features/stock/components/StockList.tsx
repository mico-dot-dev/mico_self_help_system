import React from "react";
import { GetUserStock } from "@/src/actions/stock.action";
import { stockColumns } from "../stock.columns";
import StockItemCard from "./StockItemCard";
import DataShowcase from "@/src/components/shared/DataShowcase";

async function StockList() {
  const userStock = await GetUserStock();

  if (!userStock.success) {
    return <p>No Use Stock Available</p>;
  }

  return (
    <DataShowcase
      columns={stockColumns}
      data={userStock.data}
      CardComponent={StockItemCard}
      module="stock"
    />
  );
}

export default StockList;
