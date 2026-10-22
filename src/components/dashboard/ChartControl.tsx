"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { twJoin } from "tailwind-merge";
import type { ChartGranularity } from "@/src/type/chart";

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
    <div className="flex flex-row p-0 px-5 w-full">
      <div className="flex flex-row flex-1  ">
        <button
          type="button"
          className="cursor-pointer disabled:opacity-40"
          disabled={!canPrev}
          onClick={onPrev}
          aria-label="Previous range"
        >
          <ChevronLeft
            size={15}
            strokeWidth={3}
            className="text-text-secondary hover:text-text-primary"
          />
        </button>
        <span className="content-center">{rangeLabel}</span>
        <button
          type="button"
          className="cursor-pointer disabled:opacity-40"
          disabled={!canNext}
          onClick={onNext}
          aria-label="Next range"
        >
          <ChevronRight
            size={15}
            strokeWidth={3}
            className="text-text-secondary hover:text-text-primary"
          />
        </button>
      </div>

      <div className="flex flex-row border border-border rounded-2xl h-8">
        {options.map((key) => (
          <button
            key={key}
            type="button"
            className={twJoin(
              "px-3 rounded-2xl transition-colors capitalize cursor-pointer",
              granularity === key
                ? "bg-primary text-white font-medium"
                : "bg-transparent text-text-muted hover:bg-white/5",
            )}
            onClick={() => onGranularityChange(key)}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}
