import type { DateRange, DateRangePreset } from "@/src/type/date-range";

function startOfDay(date: Date) {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

function endOfDay(date: Date) {
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
}

export function getDateRangeFromPreset(
  preset: DateRangePreset,
  now = new Date(),
): DateRange {
  const today = startOfDay(now);

  switch (preset) {
    case "today":
      return {
        from: today,
        to: endOfDay(now),
      };

    case "this-week": {
      const day = today.getDay();
      const diff = day === 0 ? 6 : day - 1;

      const from = new Date(today);
      from.setDate(today.getDate() - diff);

      return {
        from: startOfDay(from),
        to: endOfDay(now),
      };
    }

    case "this-month": {
      const from = new Date(today.getFullYear(), today.getMonth(), 1);

      return {
        from: startOfDay(from),
        to: endOfDay(now),
      };
    }

    case "last-7-days": {
      const from = new Date(today);
      from.setDate(today.getDate() - 6);

      return {
        from: startOfDay(from),
        to: endOfDay(now),
      };
    }

    case "last-30-days": {
      const from = new Date(today);
      from.setDate(today.getDate() - 29);

      return {
        from: startOfDay(from),
        to: endOfDay(now),
      };
    }

    case "this-year": {
      const from = new Date(today.getFullYear(), 0, 1);

      return {
        from: startOfDay(from),
        to: endOfDay(now),
      };
    }

    default:
      return {
        from: null,
        to: null,
      };
  }
}

import {
  addDays,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";

export function getCalendarDays(month: Date) {
  const start = startOfWeek(startOfMonth(month), {
    weekStartsOn: 0,
  });

  const end = endOfWeek(endOfMonth(month), {
    weekStartsOn: 0,
  });

  const days: Date[] = [];

  let current = start;

  while (current <= end) {
    days.push(current);
    current = addDays(current, 1);
  }

  return days;
}
