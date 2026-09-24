"use client";

import React, { useEffect, useRef, useState } from "react";
import type { DateRange } from "@/src/type/date-range";
import DateRangeModal from "../modal/DateRangeModal";
import { Calendar, ChevronDown } from "lucide-react";
import { formatDate } from "@/src/lib/utils/date-formatter";
import { Button } from "./Button";

function DateRangeButton() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    to: new Date(),
  });

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    // `relative` here is what lets the dropdown position itself
    // against this element instead of the page.
    <div className="relative w-full " ref={containerRef}>
      <Button
        type="button"
        className="flex flex-row gap-2 border-3 hover:border-primary p-5 max-w-fit"
        variant={"secondary"}
        size={"sm"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Calendar size={20} />
        <span>{formatDate(dateRange.from ?? new Date())}</span>
        <span>-</span>
        <span>{formatDate(dateRange.to ?? new Date())}</span>
        <ChevronDown size={20} />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2">
          <DateRangeModal
            open={isOpen}
            value={dateRange}
            onClose={() => setIsOpen(false)}
            onApply={(range) => {
              setDateRange(range);
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default DateRangeButton;
