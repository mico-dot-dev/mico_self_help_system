"use client";

import { useEffect, useState } from "react";
import type { DateRange, DateRangePreset } from "@/src/type/date-range";
import { getDateRangeFromPreset } from "@/src/lib/date-range";

type DateRangeModalProps = {
  open: boolean;
  value: DateRange;
  onClose: () => void;
  onApply: (range: DateRange) => void;
};

const presets: {
  label: string;
  value: DateRangePreset;
}[] = [
  {
    label: "Today",
    value: "today",
  },
  {
    label: "This Week",
    value: "this-week",
  },
  {
    label: "This Month",
    value: "this-month",
  },
  {
    label: "Last 7 Days",
    value: "last-7-days",
  },
  {
    label: "Last 30 Days",
    value: "last-30-days",
  },
  {
    label: "This Year",
    value: "this-year",
  },
];

function formatDateForInput(date: Date | null) {
  if (!date) return "";

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

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

function DateRangeModal() {
  // const [range, setRange] = useState<DateRange>(value);

  // useEffect(() => {
  //   if (open) {
  //     setRange(value);
  //   }
  // }, [open, value]);

  if (!open) return null;

  // const handlePreset = (preset: DateRangePreset) => {
  //   setRange(getDateRangeFromPreset(preset));
  // };

  // const handleStartDate = (value: string) => {
  //   const from = parseInputDate(value);

  //   setRange((current) => ({
  //     ...current,
  //     from,
  //   }));
  // };

  // const handleEndDate = (value: string) => {
  //   const to = parseInputDate(value);

  //   setRange((current) => ({
  //     ...current,
  //     to,
  //   }));
  // };

  // const canApply =
  //   range.from !== null && range.to !== null && range.from <= range.to;

  return (
    <div className="">
      <div
        className=" p-3
          card-base
          shadow-card"
      >
        {/* Header */}
        <header className="">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="">Select Date Range</h2>

              <p className="">Choose the period you want to analyze.</p>
            </div>

            <button
              type="button"
              // onClick={onClose}
              aria-label="Close date range modal"
              className="modal-close"
            >
              <span className="text-lg">×</span>
            </button>
          </div>
        </header>

        {/* Body */}
        <div className="">
          <div className="space-y-7">
            {/* Presets */}
            <section>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-text-muted">
                Quick Ranges
              </h3>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {presets.map((preset) => (
                  <button
                    key={preset.value}
                    type="button"
                    // onClick={() => handlePreset(preset.value)}
                    className="
                      rounded-lg
                      border border-border
                      bg-surface
                      px-3 py-2.5
                      text-sm font-medium
                      text-text-body
                      transition-colors

                      hover:border-primary
                      hover:bg-primary/10
                      hover:text-primary-light
                    "
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </section>

            {/* Custom range */}
            <section>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-text-muted">
                Custom Range
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Start */}
                <div className="space-y-2">
                  <label htmlFor="date-range-start" className="">
                    Start Date
                  </label>

                  <input
                    id="date-range-start"
                    type="date"
                    // value={formatDateForInput(range.from)}
                    // onChange={(event) => handleStartDate(event.target.value)}
                    className=""
                  />
                </div>

                {/* End */}
                <div className="space-y-2">
                  <label htmlFor="date-range-end" className="">
                    End Date
                  </label>

                  <input
                    id="date-range-end"
                    type="date"
                    // min={formatDateForInput(range.from)}
                    // value={formatDateForInput(range.to)}
                    // onChange={(event) => handleEndDate(event.target.value)}
                    className=""
                  />
                </div>
              </div>
            </section>

            {/* Preview */}
            <section>
              <div
                className="
                  rounded-xl
                  border border-border-subtle
                  bg-surface
                  px-4 py-3
                "
              >
                <p className="text-xs font-medium text-text-muted">
                  Selected period
                </p>

                <p className="mt-1 text-sm font-medium text-text-primary">
                  {/* {formatDisplayDate(range.from)}
                  <span className="mx-2 text-text-muted">→</span>
                  {formatDisplayDate(range.to)} */}
                </p>
              </div>

              {/* {!canApply && range.from && range.to && (
                <p className="mt-2 text-xs text-error">
                  End date must be on or after the start date.
                </p>
              )} */}
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="">
          <button
            type="button"
            // onClick={onClose}
            className=""
          >
            Cancel
          </button>

          <button
            type="button"
            // disabled={!canApply}
            onClick={() => {
              // if (!canApply) return;
              // onApply(range);
              // onClose();
            }}
            className="modal-button-primary"
          >
            Apply Range
          </button>
        </footer>
      </div>
    </div>
  );
}

export default DateRangeModal;
