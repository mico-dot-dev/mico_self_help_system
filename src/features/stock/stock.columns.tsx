"use client";

import React, { useState, useEffect, useCallback } from "react";
import { StockModel, AdjustStockInputModel } from "@/src/schema/stock.schema";
import { manageStockAmount } from "@/src/actions/stock.action";
import { Plus, Minus } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

const handleStockUpdate = async (
  method: "increment" | "decrement",
  stockId: string,
) => {
  const input: AdjustStockInputModel = { stockId: stockId, action: method };
  const res = await manageStockAmount(input);
  if (!res.success) {
    console.log(res.error);
  }
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
            onClick={async () => {
              await handleStockUpdate("increment", row.original.id);
            }}
          >
            <Plus />
          </button>
          <button
            className="button-base"
            onClick={async () => {
              await handleStockUpdate("decrement", row.original.id);
            }}
          >
            <Minus />
          </button>
        </div>
      );
    },
  },
];
