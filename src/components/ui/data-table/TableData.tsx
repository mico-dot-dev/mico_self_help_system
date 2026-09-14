"use client";

import React from "react";
import {
  tableFeatures,
  rowSortingFeature,
  createSortedRowModel,
  useTable,
  RowData,
  sortFns,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import { ChevronUp, ChevronDown } from "lucide-react";
import { twJoin } from "tailwind-merge";
import { AppModule } from "@/src/type/module";

interface TableDataProps<T extends RowData> {
  columns: Array<ColumnDef<any, T>>;
  data: T[];
  module: AppModule;
}

function TableData<T extends RowData>({ columns, data }: TableDataProps<T>) {
  const features = tableFeatures({
    rowSortingFeature,
    sortedRowModel: createSortedRowModel(),
    sortFns,
  });
  const table = useTable({
    data,
    columns,
    features,
  });

  return (
    <table className="table table-auto border border-border ">
      <thead className="bg-table-header">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder ? null : (
                  <div
                    className={twJoin(
                      "flex items-center gap-1",
                      header.column.getCanSort() &&
                        "cursor-pointer select-none",
                    )}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <table.FlexRender header={header} />
                    {{
                      asc: <ChevronUp />,
                      desc: <ChevronDown />,
                    }[header.column.getIsSorted() as string] ?? ""}
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => {
          return (
            <tr key={row.id}>
              {row.getAllCells().map((cell) => (
                <td key={cell.id}>
                  <table.FlexRender cell={cell} />
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableData;
