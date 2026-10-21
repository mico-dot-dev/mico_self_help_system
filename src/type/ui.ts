import { LucideIcon } from "lucide-react";
import { IconTone } from "@/components/ui/IconContainer";

export type size = "sm" | "default" | "lg";

export interface IconContainerModel {
  Icon: LucideIcon;
  tone: IconTone;
}
