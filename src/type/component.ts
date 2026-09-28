import { IconContainerModel } from "@/src/type/ui";

export interface HeaderCardProps {
  title: string;
  CardIcon: IconContainerModel;
  amount: number;
  status: "up" | "down";
  statsData: number;
  statsInfo?: React.ReactNode;
}
