"use client";

import React from "react";
import { incomeListModel } from "@/src/schema/income.schema";
import { ColumnDef } from "@tanstack/react-table";

import { Ellipsis } from "lucide-react";

export const incomeColumns: Array<ColumnDef<{}, incomeListModel>> = [
  { accessorKey: "number", header: "No.", cell: ({ row }) => row.id },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: (data) => data.getValue(),
  },
  {
    accessorKey: "dateObtained",
    header: "Date Obtained",
    cell: ({ row }) => row.original.dateObtained?.toLocaleDateString(),
  },
  {
    accessorKey: "fromJob",
    header: "Obtained Via",
    cell: (data) => (data.getValue() ? "Job" : "Given"),
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
