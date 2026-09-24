"use client";

import React, { useState } from "react";
import type { DateRange } from "@/src/type/date-range";
import DateRangeModal from "../modal/DateRangeModa";
import { Calendar, ChevronDown } from "lucide-react";
import { formatDate } from "@/src/lib/utils/date-formatter";
import { Button } from "./Button";

function DateRangeButton() {
  //   const [dateModalOpen, setDateModalOpen] = useState(false);

  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    to: new Date(),
  });

  return (
    <div className=" collapse">
      <input type="checkbox" className="" />
      <Button
        type="button"
        className="flex flex-row gap-2 border-3 hover:border-primary p-5 collapse-title max-w-fit"
        variant={"secondary"}
        size={"sm"}
      >
        <Calendar size={20} />
        <span>{formatDate(dateRange.from ?? new Date())}</span>
        <span className="">-</span>
        <span>{formatDate(dateRange.to ?? new Date())}</span>
        <ChevronDown size={20} />
      </Button>
      <div className="flex collapse-content relative p-0 ">
        <span className="absolute bg-red-500 ">
          <DateRangeModal />
        </span>
      </div>
    </div>
  );
}

export default DateRangeButton;
