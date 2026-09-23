import { ReactNode } from "react";
import { AppModule } from "../type/module";
import { ModuleWithModals } from "../type/module";
import { LucideIcon } from "lucide-react";

//Reusable Icon  Color Mapping
type IconTypes = "violet" | "green";
interface IconContents {
  color: string;
  background: string;
}
export const colorRegistry: Record<IconTypes, IconContents> = {
  violet: { color: "text-primary-light", background: "bg-primary/15" },
  green: { color: "text-green-icon", background: "bg-success/15" },
};

export interface IconContainerModel {
  Icon: LucideIcon;
  iconColorScheme: IconTypes;
}

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

export interface StatisticCardProps {
  title: string;
  CardIcon: LucideIcon;
  amount?: string;
  iconColor: IconTypes;
  status?: "up" | "down";
}

export interface TaskCardProps {
  title: string;
  amount: number;
  stats: number;
  color?: string;
  HeaderIcon: LucideIcon;
  status?: "up" | "down";
}
