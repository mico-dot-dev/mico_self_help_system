import { ComponentType } from "react";
import { RowData } from "@tanstack/react-table";
import { ColumnDef } from "@tanstack/react-table";
import { AppModule } from "./module";

export interface ModuleCardProps<T> {
  data: T;
}

export interface ResponsiveDataProps<T extends RowData> {
  data: T[];
  columns: Array<ColumnDef<{}, T>>;
  CardComponent: ComponentType<ModuleCardProps<T>>;
  module: AppModule;
}
