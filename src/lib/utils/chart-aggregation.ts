// src/lib/utils/chart-aggregation.ts
import { ChartGranularity } from "@/src/type/chart";
import { CashFlowPointModel } from "@/src/schema/dashboard.schema";

function bucketKey(date: Date, granularity: ChartGranularity): string {
  if (granularity === "day") return date.toISOString().slice(0, 10);
  if (granularity === "week") {
    const d = new Date(date);
    const day = d.getDay() === 0 ? 6 : d.getDay() - 1; // Monday-start week
    d.setDate(d.getDate() - day);
    return d.toISOString().slice(0, 10);
  }
  return date.toISOString().slice(0, 7); // "month" → "YYYY-MM"
}

export function aggregateByGranularity(
  points: CashFlowPointModel[],
  granularity: ChartGranularity,
): CashFlowPointModel[] {
  const buckets = new Map<string, CashFlowPointModel>();

  for (const point of points) {
    const key = `${bucketKey(point.date, granularity)}-${point.transit}`;
    const existing = buckets.get(key);
    if (existing) {
      existing.total += point.total;
    } else {
      buckets.set(key, {
        ...point,
        date: new Date(bucketKey(point.date, granularity)),
      });
    }
  }

  return [...buckets.values()].sort(
    (a, b) => a.date.getTime() - b.date.getTime(),
  );
}
