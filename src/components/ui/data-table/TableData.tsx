"use client";

import React, { useState } from "react";
import {
  tableFeatures,
  rowSortingFeature,
  createSortedRowModel,
  useTable,
  RowData,
  sortFns,
  createPaginatedRowModel,
  rowPaginationFeature,
  type PaginationState,
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
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0, // initial page index
    pageSize: 10, // default page size
  });
  const features = tableFeatures({
    rowSortingFeature,
    sortedRowModel: createSortedRowModel(),
    sortFns,
    rowPaginationFeature,

    paginatedRowModel: createPaginatedRowModel(),
  });
  const table = useTable({
    data,
    columns,
    features,
    manualPagination: false,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
  });

  return (
    <>
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

      <div className="flex flex-row justify-between">
        <button
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
          className="button-base"
        >
          {"<<"}
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="button-base"
        >
          {"<"}
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="button-base"
        >
          {">"}
        </button>
        <button
          onClick={() => table.lastPage()}
          disabled={!table.getCanLastPage()}
          className="button-base"
        >
          {">>"}
        </button>
        <select
          value={table.state.pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default TableData;
