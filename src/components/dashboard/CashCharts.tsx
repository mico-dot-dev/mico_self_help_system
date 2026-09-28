"use client";

import React, { useEffect, useState, useMemo } from "react";
import BarGraph from "@/src/components/chart/BarGraph";
import PieGraph from "@/src/components/chart/PieGraph";
import { CashFlowPointModel } from "@/src/schema/dashboard.schema";
import { ExpenseFrequency } from "@/src/type/chart";
import { ChartGranularity, granularityMap } from "@/src/type/chart";
import { twJoin } from "tailwind-merge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { groupIntoPages } from "@/src/lib/utils/chart-pagintation";
import { formatPageRange } from "@/src/lib/utils/date-formatter";
import DateRangeButton from "../ui/DateRangeButton";
import { Square } from "lucide-react";

interface CashChartProps {
  barData: CashFlowPointModel[];
  pieData: ExpenseFrequency[];
  g: ChartGranularity[];
}

function CashFlowChart({ barData, pieData, g }: CashChartProps) {
  if (!barData || !pieData) {
    return <p>No data Found</p>;
  }
  const [granularity, setGranularity] = useState<ChartGranularity>("day");

  const pages = useMemo(
    () => groupIntoPages(barData, granularity),
    [barData, granularity],
  );
  const [pageIndex, setPageIndex] = useState(0);
  useEffect(() => setPageIndex(0), [granularity]);

  const currentPage = pages[pageIndex] ?? { label: "", points: [] };

  if (!currentPage.points) {
    return <p>No data</p>;
  }

  const firstPoint = currentPage.points[0].date;
  const lastPoint = currentPage.points[currentPage.points.length - 1].date;
  const rangeDisplay = formatPageRange(firstPoint, lastPoint);

  return (
    <div className="flex flex-col gap-3">
      {/* <div className="flex flex-row justify-between">
        <div className="flex items-center mr-3 ">
          <DateRangeButton />
        </div>
        <div className="flex flex-row justify-between w-1/3">
          <button
            className="cursor-pointer"
            disabled={pageIndex === 0}
            onClick={() => setPageIndex((i) => i - 1)}
          >
            <ChevronLeft />
          </button>
          <span className="content-center">{rangeDisplay}</span>
          <button
            className="cursor-pointer"
            disabled={pageIndex === pages.length - 1}
            onClick={() => setPageIndex((i) => i + 1)}
          >
            <ChevronRight />
          </button>
        </div>
        <div className="flex flex-row border border-border rounded-2xl">
          {g.map((key, index) => {
            return (
              <button
                key={index}
                className={twJoin(
                  "px-7 rounded-2xl transition-colors capitalize",
                  granularity === key
                    ? "bg-primary text-white font-medium"
                    : "bg-transparent text-text-muted hover:bg-white/5",
                )}
                onClick={() => setGranularity(key)}
              >
                {key}
              </button>
            );
          })}
        </div>
      </div> */}

      <div className="grid lg:grid-cols-5 sm:grid-cols-2 w-full gap-4 ">
        <div className="flex flex-col p-5 lg:col-span-3 sm:grid:col-span-1 card-base">
          <div className="flex justify-between mb-4">
            <div>
              <p>Cash Flow Overview</p>
              <p className="text-text-muted text-sm">
                Comparison of income and expense spending
              </p>
            </div>
            <div className="flex flex-col  text-sm justify-self-end">
              <div className="flex flex-row items-center gap-2">
                <Square size={8} className="text-success " fill="#22c55e" />
                <p>Money in</p>
              </div>
              <div className="flex flex-row items-center gap-2 ">
                <Square size={8} className="text-error" fill="#ef4444" />
                <p>Money Out</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between flex-1 min-h-0 ">
            <div className="flex-1 h-full min-h-0">
              {barData && (
                <BarGraph data={currentPage.points} granularity={granularity} />
              )}
            </div>
          </div>
        </div>
        <div className="col-span-2 sm:grid:col-span-1 card-base ">
          <div className="flex flex-col mb-5">
            <p>Expense Breakdown</p>
            <p className="text-text-muted text-sm">
              Distribution across key categories
            </p>
          </div>
          <div>
            <PieGraph data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashFlowChart;
