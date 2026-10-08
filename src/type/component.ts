import { IconContainerModel } from "@/src/type/ui";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
type BaseHeaderCardModel = {
  title: string;
  CardIcon: IconContainerModel;
  amount: number;
  chart?: ReactNode;
};

interface TrendCard extends BaseHeaderCardModel {
  kind: "trend";
  status: "up" | "down";
  statsData: number;
}

interface BudgetCard extends BaseHeaderCardModel {
  kind: "budget";
  percentage: number;
  budget: number;
  budgetRemaining: number;
}

export type HeaderCardModel = TrendCard | BudgetCard;

export interface ButtonWithIconModel {
  label: string;
  icon: LucideIcon;
}
