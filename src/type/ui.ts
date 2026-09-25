import { LucideIcon } from "lucide-react";

export type size = "sm" | "md" | "lg";

//Reusable Icon  Color Mapping
export type IconTypes =
  | "none"
  | "violet"
  | "green"
  | "amber"
  | "red"
  | "blue"
  | "violetA";

export interface IconContents {
  color: string;
  background: string;
}

export interface IconContainerModel {
  Icon: LucideIcon;
  iconColorScheme: IconTypes;
  fill?: boolean;
}
