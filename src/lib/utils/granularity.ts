import { differenceInCalendarDays } from "date-fns";
import type { ChartGranularity } from "@/src/type/chart";
import type { DateRange } from "@/src/type/date-range";

// The longest a single bucket of this granularity can ever be, in days.
// Using the max (31 for month) rather than an average keeps the check
// correct regardless of where the range starts.
const MAX_BUCKET_DAYS: Record<ChartGranularity, number> = {
  day: 0, // day granularity is always valid, even for a single day
  week: 7,
  month: 31,
};

function totalDaysInRange(range: DateRange): number {
  if (!range.from || !range.to) return 0;
  return differenceInCalendarDays(range.to, range.from) + 1; // inclusive
}

export function canAccommodateGranularity(
  range: DateRange,
  granularity: ChartGranularity,
): boolean {
  const totalDays = totalDaysInRange(range);
  if (totalDays === 0) return false; // no range selected yet

  return totalDays > MAX_BUCKET_DAYS[granularity];
}

export function getAvailableGranularities(
  range: DateRange,
): ChartGranularity[] {
  return (Object.keys(MAX_BUCKET_DAYS) as ChartGranularity[]).filter((g) =>
    canAccommodateGranularity(range, g),
  );
}
