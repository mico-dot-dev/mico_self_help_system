// src/lib/utils/chart-aggregation.ts
import { ChartGranularity } from "@/src/type/chart";
import { CashFlowPointModel } from "@/src/schema/dashboard.schema";

export function getWeekOfMonth(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);

  // Sunday = 0, Monday = 1, ..., Saturday = 6
  const firstDayOfWeek = firstDay.getDay();

  // Days until the first Monday
  const daysUntilMonday = firstDayOfWeek === 0 ? 1 : 8 - firstDayOfWeek;

  const firstMonday = new Date(year, month, 1 + daysUntilMonday);

  // Before the first Monday = Week 1
  if (date < firstMonday) {
    return 1;
  }

  const diff = date.getDate() - firstMonday.getDate();

  return Math.floor(diff / 7) + 2;
}

function getContinuousWeek(date: Date): number {
  const yearStart = new Date(date.getFullYear(), 0, 1);

  const difference = date.getTime() - yearStart.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const firstDay = yearStart.getDay();

  // Number of days until the first Monday
  const daysUntilMonday = (8 - firstDay) % 7;

  if (days < daysUntilMonday) {
    return 1;
  }

  return Math.floor((days - daysUntilMonday) / 7) + 2;
}

// export function getDateBucket(
//   data: Date,
// ):  {

//   return data;
// }
