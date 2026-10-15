"use client";

import React from "react";
import { DynamicListModel } from "@/src/schema/expense.schema";
import { ColumnDef, tableFeatures } from "@tanstack/react-table";
import { upperCaseFormat } from "@/src/lib/utils/formatter";
import { getExpenseListSubContent } from "@/src/lib/utils/expense-mapper";
import { Ellipsis } from "lucide-react";

export const expenseColumns: Array<ColumnDef<{}, DynamicListModel>> = [
  { accessorKey: "number", header: "No.", cell: ({ row }) => row.id },
  {
    accessorKey: "title",
    header: "Title",
    cell: (data) => data.getValue(),
  },
  {
    accessorKey: "expense_type",
    header: "Expense Type",
    cell: ({ row }) => upperCaseFormat(row.original.expense_type),
  },
  {
    header: "Info 1",
    cell: ({ row }) => getExpenseListSubContent(row.original).primary,
  },
  {
    header: "Info 2",
    cell: ({ row }) => getExpenseListSubContent(row.original).secondary,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <button className="cursor-pointer self-start ">
          <details className="dropdown dropdown-right">
            <summary className="btn bg-transparent border-none h-auto w-auto p-0">
              <Ellipsis size={20} />
            </summary>
            <ul className="menu dropdown-content ml-1 bg-white text-background w-24 p-0 px-3 py-1 flex flex-col">
              <li className="hover:bg-gray-200 w-full items-start">Delete</li>
              <li className="hover:bg-gray-200 w-full items-start">Edit</li>
            </ul>
          </details>
        </button>
      );
    },
  },
];
