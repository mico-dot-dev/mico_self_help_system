import { IconContainerModel } from "@/src/type/ui";

export interface HeaderCardProps {
  title: string;
  CardIcon: IconContainerModel;
  amount: number;
  statsAmount: number;
  status: "up" | "down";
}
