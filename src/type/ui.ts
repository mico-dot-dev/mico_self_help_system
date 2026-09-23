import { LucideIcon } from "lucide-react";

export type size = "sm" | "md" | "lg";

//Reusable Icon  Color Mapping
export type IconTypes = "violet" | "green" | "amber" | "red" | "blue";

export interface IconContents {
  color: string;
  background: string;
}

export interface IconContainerModel {
  Icon: LucideIcon;
  iconColorScheme: IconTypes;
}
