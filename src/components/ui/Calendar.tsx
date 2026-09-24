"use client";

import {
  addMonths,
  format,
  isSameDay,
  isSameMonth,
  isWithinInterval,
  subMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getCalendarDays } from "@/src/lib/date-range";
import type { DateRange } from "@/src/type/date-range";

interface CalendarDayProps {
  date: Date;
  isCurrentMonth: boolean;
  isStart: boolean;
  isEnd: boolean;
  isInRange: boolean;
  onClick: () => void;
}

function CalendarDay({
  date,
  isCurrentMonth,
  isStart,
  isEnd,
  isInRange,
  onClick,
}: CalendarDayProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative flex h-10 w-full items-center justify-center
        text-sm transition-colors

        ${!isCurrentMonth ? "text-text-disabled" : "text-text-body"}

        ${isInRange ? "bg-primary/15" : ""}

        ${isStart ? "rounded-l-lg" : ""}

        ${isEnd ? "rounded-r-lg" : ""}

        ${isStart || isEnd ? "text-white" : "hover:bg-primary/10"}
      `}
    >
      {(isStart || isEnd) && (
        <span
          className="
            absolute inset-1
            rounded-full
            bg-primary
            shadow-[0_0_16px_rgba(139,92,246,0.35)]
          "
        />
      )}

      <span className="relative z-10">{format(date, "d")}</span>
    </button>
  );
}

interface CalendarMonthProps {
  month: Date;
  range: DateRange;
  onMonthChange: (month: Date) => void;
  onDateSelect: (date: Date) => void;
}

const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function CalendarMonth({
  month,
  range,
  onMonthChange,
  onDateSelect,
}: CalendarMonthProps) {
  const days = getCalendarDays(month);

  return (
    <div className="p-3">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-15 ">
        <button
          type="button"
          onClick={() => onMonthChange(subMonths(month, 1))}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-text-muted transition hover:bg-white/5 hover:text-text-primary"
        >
          <ChevronLeft size={17} />
        </button>

        <h3 className="text-sm font-semibold text-text-primary min-w-fit">
          {format(month, "MMMM yyyy")}
        </h3>

        <button
          type="button"
          onClick={() => onMonthChange(addMonths(month, 1))}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-text-muted transition hover:bg-white/5 hover:text-text-primary"
        >
          <ChevronRight size={17} />
        </button>
      </div>

      {/* Weekdays */}
      <div className="mb-2 grid grid-cols-7">
        {weekdays.map((day) => (
          <div
            key={day}
            className="flex h-8 items-center justify-center text-xs font-semibold text-text-muted"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7">
        {days.map((date) => {
          const isCurrentMonth = isSameMonth(date, month);

          const isStart = range.from !== null && isSameDay(date, range.from);

          const isEnd = range.to !== null && isSameDay(date, range.to);

          const isInRange =
            range.from &&
            range.to &&
            isWithinInterval(date, {
              start: range.from,
              end: range.to,
            });

          return (
            <CalendarDay
              key={date.toISOString()}
              date={date}
              isCurrentMonth={isCurrentMonth}
              isStart={isStart}
              isEnd={isEnd}
              isInRange={Boolean(isInRange)}
              onClick={() => onDateSelect(date)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CalendarMonth;
