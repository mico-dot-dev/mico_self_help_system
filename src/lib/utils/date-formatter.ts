import { DateRepeatType } from "@/src/generated/prisma";

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
