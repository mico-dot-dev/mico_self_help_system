"use client";

import React, { useState, useEffect, useCallback } from "react";
import { StockModel } from "@/src/schema/stock.schema";
import { manageStockAmount } from "@/src/actions/stock.action";
import { Plus, Minus } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

const handleStockUpdate = (
  method: "increment" | "decrement",
  stockId: string,
) => {
  manageStockAmount({ stockId: stockId, action: method });
};

export const stockColumns: Array<ColumnDef<{}, StockModel>> = [
  { accessorKey: "number", header: "No.", cell: ({ row }) => row.id },
  {
    accessorKey: "name",
    header: "Title",
    cell: (data) => data.getValue(),
  },
  {
    accessorKey: "curr_amount",
    header: "Current Amount",
    cell: (data) => data.getValue(),
  },
  {
    accessorKey: "min_amount",
    header: "Minimum Amount",
    cell: (data) => data.getValue(),
  },
  {
    header: "Action",
    cell: ({ row }) => {
      return (
        <div className="flex gap-5">
          <button
            className="button-base"
            onClick={() => handleStockUpdate("increment", row.id)}
          >
            <Plus />
          </button>
          <button
            className="button-base"
            onClick={() => handleStockUpdate("decrement", row.id)}
          >
            <Minus />
          </button>
        </div>
      );
    },
  },
];
