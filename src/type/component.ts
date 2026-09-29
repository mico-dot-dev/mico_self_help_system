import { IconContainerModel } from "@/src/type/ui";
type BaseHeaderCardModel = {
  title: string;
  CardIcon: IconContainerModel;
  amount: number;
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
