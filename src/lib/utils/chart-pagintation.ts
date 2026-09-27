import type { ChartGranularity } from "@/src/type/chart";
import type { CashFlowPointModel } from "@/src/schema/dashboard.schema";
import { getISOWeek, format } from "date-fns";

export interface ChartPage {
  label: string; // "Sep 1 – Sep 6", "Week 1 – Sep", "2026"
  points: CashFlowPointModel[];
}

function pageKey(date: Date, granularity: ChartGranularity): string {
  switch (granularity) {
    case "day":
      return getISOWeek(date).toLocaleString(); // groups days by their containing week
    case "week":
      return format(date, "yyyy-MM"); // groups weeks by their containing month
    case "month":
      return format(date, "yyyy"); // groups months by their containing year
  }
}

export function groupIntoPages(
  points: CashFlowPointModel[],
  granularity: ChartGranularity,
): ChartPage[] {
  const pages = new Map<string, ChartPage>();

  for (const point of points) {
    const key = pageKey(point.date, granularity); // e.g. "2026-W37" for weekly boundary
    const existing = pages.get(key);
    if (existing) {
      existing.points.push(point);
    } else {
      pages.set(key, {
        label: pageKey(point.date, granularity),
        points: [point],
      });
    }
  }

  return [...pages.values()]; // already insertion-ordered if points arrive sorted
}
