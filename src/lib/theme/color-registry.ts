import { IconContents, IconTypes } from "@/src/type/ui";

export const colorRegistry: Record<IconTypes, IconContents> = {
  none: { color: "", background: "" },
  violet: { color: "text-primary-light", background: "bg-primary/15" },
  violetA: { color: "text-text-primary", background: "bg-primary/15" },
  green: { color: "text-green-icon", background: "bg-success/15" },
  amber: { color: "text-amber-icon", background: "bg-warning/15" },
  red: { color: "text-red-icon", background: "bg-error/15" },
  blue: { color: "text-info", background: "bg-info/15" },
};
