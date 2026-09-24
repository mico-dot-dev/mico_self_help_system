export type DateRange = {
  from: Date | null;
  to: Date | null;
};

export type DateRangePreset =
  | "today"
  | "this-week"
  | "this-month"
  | "last-7-days"
  | "last-30-days"
  | "this-year"
  | "custom";
