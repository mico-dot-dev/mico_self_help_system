import { ReactNode } from "react";
import { AppModule } from "../type/module";
import { ModuleWithModals } from "../type/module";
import { LucideIcon } from "lucide-react";

export type ListParams = {
  category?: string;
  searchText?: string;
  filter?: string;
  groupBy?: string;
};

export type CategoryFilterModel = {
  id: string;
  label: string;
};

export interface ToolBarProps {
  categoryContent: CategoryFilterModel[];
}

export interface DataListProps {
  module: AppModule;
  buttonModule?: ModuleWithModals;
  toolBarProps: ToolBarProps;
  searchParams?: ListParams;
}

export interface DashboardProps {
  title: string;
  CardIcon: LucideIcon;
  amount: string;
}
