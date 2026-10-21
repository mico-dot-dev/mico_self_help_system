import { DateRepeatType } from "@/src/generated/prisma";
import { ChartGranularity } from "@/src/type/chart";
import { getWeekOfMonth } from "date-fns";
import { format, isSameMonth, isSameYear } from "date-fns";

export function getNextDueDate(repeatType: DateRepeatType) {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const options: Intl.DateTimeFormatOptions = {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const stringDate = new Intl.DateTimeFormat("en-US", options).format();
  const date = new Date(stringDate);

  switch (repeatType) {
    case "YEARLY":
      date.setUTCFullYear(date.getUTCFullYear() + 1);
      break;
    case "MONTHLY":
      date.setUTCMonth(date.getUTCMonth() + 1);
      break;
    case "DAILY":
      date.setUTCDate(date.getUTCDate() + 1);
      break;
    case "BIWEEKLY":
      date.setDate(date.getUTCDate() + 14);
      break;
    default:
      break;
  }

  return date;
}

export function formatDate(dateInput: Date): string {
  const date = new Date(dateInput);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export const createDateRange = (
  date: Date,
  granularity: ChartGranularity,
): string => {
  //Format monthly periods, e.g. "Jan", "Feb", "Mar".
  if (granularity === "month") {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
    }).format(date);
  }

  if (granularity === "week") {
    return "Week " + getWeekOfMonth(date);
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    weekday: "short",
  }).format(date);
};

export function formatPageRange(from: Date, to: Date): string {
  if (from.getTime() === to.getTime()) {
    return format(from, "MMM d, yyyy"); // single-point page, e.g. one month bucket
  }
  if (isSameMonth(from, to)) {
    return `${format(from, "MMM d")} – ${format(to, "d, yyyy")}`; // "Sep 1 – 6, 2026"
  }
  if (isSameYear(from, to)) {
    return `${format(from, "MMM d")} – ${format(to, "MMM d, yyyy")}`; // crosses months
  }
  return `${format(from, "MMM d, yyyy")} – ${format(to, "MMM d, yyyy")}`; // crosses years
}

// export function formatAxisLabel(
//   date: Date,
//   granularity: ChartGranularity,
// ): string {
//   switch (granularity) {
//     case "day":
//       return `${format(date, "EEE")}\n${format(date, "MMM d")}`; // "Mon\nSep 16"
//     case "week":
//       return format(date, "MMM d"); // start-of-week date, single line
//     case "month":
//       return format(date, "MMM yyyy");
//     default:
//       return format(date, "MMM d");
//   }
// }
