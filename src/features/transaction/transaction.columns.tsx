"use client";
import React from "react";
import { EllipsisVertical } from "lucide-react";
import { TransactionListModel } from "@/src/schema/transaction.schema";
import { ColumnDef } from "@tanstack/react-table";

export const transactionColumn: Array<ColumnDef<{}, TransactionListModel>> = [
  {
    accessorKey: "number",
    header: "No.",
    cell: ({ row }) => row.id,
  },
  {
    accessorKey: "checkbox",
    header: "Checkbox",
    cell: ({ row }) => {
      return <button>Checkbox</button>;
    },
  },
  {
    accessorKey: "name",
    header: "Expense Name",
    cell: (data) => data.getValue(),
  },
  {
    accessorKey: "expense_type",
    header: "Expense Type",
    cell: (data) => data.getValue(),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (data) => data.getValue(),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: (data) => data.getValue(),
  },
  {
    accessorKey: "price",
    header: "Total Price",
    cell: (data) => data.getValue(),
  },
  {
    accessorKey: "date_added",
    header: "Date Added",
    cell: ({ row }) => row.original.date_added?.toLocaleDateString(),
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
    cell: ({ row }) => row.original.due_date?.toLocaleDateString(),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <button>
          <EllipsisVertical></EllipsisVertical>
        </button>
      );
    },
  },
];
