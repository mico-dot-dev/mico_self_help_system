"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { twJoin } from "tailwind-merge";
import type { ChartGranularity } from "@/src/type/chart";
import { Button } from "../ui/button";

interface ChartControlsProps {
  rangeLabel: string;
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  granularity: ChartGranularity;
  options: ChartGranularity[];
  onGranularityChange: (g: ChartGranularity) => void;
}

export default function ChartControls({
  rangeLabel,
  canPrev,
  canNext,
  onPrev,
  onNext,
  granularity,
  options,
  onGranularityChange,
}: ChartControlsProps) {
  return (
    <div className="flex flex-row w-full justify-end gap-3 ">
      <div className="flex flex-row rounded-lg card-base p-0 items-center w-1/2 justify-between h-[80%] self-center">
        <Button
          type="button"
          disabled={!canPrev}
          onClick={onPrev}
          variant={"ghost"}
          aria-label="Previous range"
          className={twJoin("hover:text-text-primary")}
        >
          <ChevronLeft
            size={15}
            strokeWidth={3}
            className="text-text-secondary hover:text-text-primary"
          />
        </Button>

        <span className="content-center text-xs">{rangeLabel}</span>

        <Button
          type="button"
          className="cursor-pointer disabled:opacity-40"
          disabled={!canNext}
          onClick={onNext}
          variant={"ghost"}
          aria-label="Next range"
        >
          <ChevronRight
            size={15}
            strokeWidth={3}
            className="text-text-secondary hover:text-text-primary"
          />
        </Button>
      </div>

      <div className="flex flex-row border border-border rounded-md h-10">
        {options.map((key) => (
          <Button
            key={key}
            type="button"
            variant={granularity === key ? "default" : "ghost"}
            className="h-full capitalize px-5"
            onClick={() => onGranularityChange(key)}
          >
            {key}
          </Button>
        ))}
      </div>
    </div>
  );
}
