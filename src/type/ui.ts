import { LucideIcon } from "lucide-react";
import { IconTone } from "@/src/components/shared/IconContainer";

export type size = "sm" | "default" | "lg";

export interface IconContainerModel {
  Icon: LucideIcon;
  tone: IconTone;
}
