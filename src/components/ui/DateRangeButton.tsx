"use client";

import React, { useEffect, useRef, useState } from "react";
import type { DateRange } from "@/src/type/date-range";
import DateRangeModal from "../modal/DateRangeModal";
import { Calendar, ChevronDown } from "lucide-react";
import { formatDate } from "@/src/lib/utils/date-formatter";
import { Button } from "./Button";
import { useRouter, useSearchParams } from "next/navigation";

function DateRangeButton() {
  const [isOpen, setIsOpen] = useState(false);
  //Used for checking mouse events
  const containerRef = useRef<HTMLDivElement>(null);
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    to: new Date(),
  });

  useEffect(() => {
    if (!isOpen) return;

    //Closes the modal if clicked outside the modal
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    //Removes listener when setIsOpen changes
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  function formatDateToString(date: Date | null): string {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const router = useRouter();
  const searchParam = useSearchParams();

  const onDateChange = (range: DateRange) => {
    setDateRange(range);
    setIsOpen(false);
    const params = new URLSearchParams(searchParam.toString());
    params.set("from", formatDateToString(range.from));
    params.set("to", formatDateToString(range.to));
    router.push(`?${params.toString()}`);
  };

  return (
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
              onDateChange(range);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default DateRangeButton;
