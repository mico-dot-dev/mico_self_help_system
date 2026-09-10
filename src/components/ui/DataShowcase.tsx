import React from "react";
import { ResponsiveDataProps } from "@/src/type/data-table";
import DataTable from "./data-table/TableData";
import { RowData } from "@tanstack/react-table";

function DataShowcase<T extends RowData>({
  columns,
  data,
  CardComponent,
  module,
}: ResponsiveDataProps<T>) {
  return (
    <div className="">
      <div className="lg:block hidden">
        <DataTable columns={columns} data={data} module={module} />
      </div>
      <ul className="lg:hidden">
        {data.map((item, i) => (
          <CardComponent data={item} key={i} />
        ))}
      </ul>
    </div>
  );
}

export default DataShowcase;
