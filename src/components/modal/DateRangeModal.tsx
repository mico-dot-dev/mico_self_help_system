"use client";

import { useEffect, useState } from "react";
import type { DateRange, DateRangePreset } from "@/src/type/date-range";
import { getDateRangeFromPreset } from "@/src/lib/date-range";
import { X } from "lucide-react";
import { Button } from "../ui/Button";
import Calendar from "../ui/Calendar";

type DateRangeModalProps = {
  open: boolean;
  value: DateRange;
  onClose: () => void;
  onApply: (range: DateRange) => void;
};

const presets: { label: string; value: DateRangePreset }[] = [
  { label: "Today", value: "today" },
  { label: "This Week", value: "this-week" },
  { label: "This Month", value: "this-month" },
  { label: "Last 7 Days", value: "last-7-days" },
  { label: "Last 30 Days", value: "last-30-days" },
  { label: "This Year", value: "this-year" },
];

function parseInputDate(value: string) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDisplayDate(date: Date | null) {
  if (!date) return "Select date";
  return new Intl.DateTimeFormat("en-PH", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function DateRangeModal({
  open,
  value,
  onClose,
  onApply,
}: DateRangeModalProps) {
  //Draft or temp value
  const [range, setRange] = useState<DateRange>(value);
  useEffect(() => {
    if (open) {
      setRange(value);
    }
  }, [open, value]);

  if (!open) return null;

  const handlePreset = (preset: DateRangePreset) => {
    setRange(getDateRangeFromPreset(preset));
  };

  const handleStartDate = (from: Date) => {
    setRange((current) => ({ ...current, from }));
  };

  const handleEndDate = (to: Date) => {
    setRange((current) => ({ ...current, to }));
  };

  //restriction
  const canApply =
    range.from !== null && range.to !== null && range.from <= range.to;

  return (
    <div className="flex flex-col p-3 card-base shadow-card gap-1">
      {/* Header */}
      <header className="flex justify-self-end">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close date range modal"
          className="modal-close cursor-pointer"
        >
          <X />
        </button>
      </header>

      {/* Body */}
      <div className="flex flex-row gap-3">
        {/* Presets */}
        <section className="border-r border-border">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-text-muted">
            Quick Ranges
          </h3>
          <div className="flex flex-col w-max">
            {presets.map((preset) => (
              <Button
                key={preset.value}
                type="button"
                onClick={() => handlePreset(preset.value)}
                variant={"ghost"}
                className="justify-start py-2 px-8"
              >
                {preset.label}
              </Button>
            ))}
          </div>
        </section>

        <section className="flex flex-col px-1 justify-between">
          <div className="flex flex-row gap-3">
            <div>
              <p>Start Date</p>
              <Calendar
                month={range.from || new Date()}
                range={range}
                onDateSelect={(day) => handleStartDate(day)}
                onMonthChange={(month) => handleStartDate(month)}
              />
            </div>
            <div>
              <p>End Date</p>
              <Calendar
                month={range.to || new Date()}
                range={range}
                onDateSelect={(day) => handleEndDate(day)}
                onMonthChange={(month) => handleEndDate(month)}
              />
            </div>
          </div>
          {/* Preview */}
          <div>
            <div className="rounded-xl border border-border-subtle bg-surface px-4 py-3">
              <p className="text-xs font-medium text-text-muted">
                Selected period
              </p>
              <p className="mt-1 text-sm font-medium text-text-primary">
                {formatDisplayDate(range.from)}
                <span className="mx-2 text-text-muted">→</span>
                {formatDisplayDate(range.to)}
              </p>
            </div>
            {!canApply && range.from && range.to && (
              <p className="mt-2 text-xs text-error">
                End date must be on or after the start date.
              </p>
            )}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="flex justify-end gap-2 pt-3 ">
        <Button
          variant={"secondary"}
          type="button"
          onClick={onClose}
          className="w-fit"
        >
          Cancel
        </Button>
        <Button
          type="button"
          disabled={!canApply}
          onClick={() => {
            if (!canApply) return;
            onApply(range);
          }}
          className="modal-button-primary w-fit"
          variant={"primary"}
        >
          Apply
        </Button>
      </footer>
    </div>
  );
}

export default DateRangeModal;
