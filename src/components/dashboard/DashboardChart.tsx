"use client";

import React, { useEffect, useState, useMemo } from "react";
import BarGraph from "@/src/components/charts/BarGraph";
import PieGraph from "@/src/components/charts/PieGraph";
import { CashFlowPointModel } from "@/src/schema/dashboard.schema";
import { ExpenseFrequency } from "@/src/type/chart";
import { ChartGranularity } from "@/src/type/chart";
import { ChartPage, groupIntoPages } from "@/src/lib/utils/chart-pagintation";
import { Square, ChartNoAxesCombined, PieChart } from "lucide-react";
import ChartControls from "./ChartControl";
import { formatPageRange } from "@/src/lib/format/date";
import IconContainer from "../shared/IconContainer";

interface CashChartProps {
  barData: CashFlowPointModel[];
  pieData: ExpenseFrequency[];
  g: ChartGranularity[];
}

function CashFlowChart({ barData, pieData, g }: CashChartProps) {
  const [granularity, setGranularity] = useState<ChartGranularity>("day");

  const pages = useMemo(
    () => groupIntoPages(barData, granularity),
    [barData, granularity],
  );
  const [pageIndex, setPageIndex] = useState(0);
  useEffect(() => setPageIndex(0), [granularity]);

  const currentPage: ChartPage = pages[pageIndex] ?? { label: "", points: [] };

  const handleGranularityChange = (g: ChartGranularity) => {
    setGranularity(g);
    setPageIndex(0);
  };

  const firstPoint = currentPage.points[0]?.date || new Date();
  const lastPoint =
    currentPage.points[currentPage.points.length - 1]?.date || new Date();
  const rangeDisplay = formatPageRange(firstPoint, lastPoint);

  if (!currentPage.points) {
    return <p>No data</p>;
  }

  return (
    <div className="grid w-full gap-3 grid-rows-2 grid-cols-1 lg:grid-cols-3 lg:grid-rows-1">
      {/* Bar */}
      <div className="flex flex-col card-base w-full lg:col-span-2">
        <div className="flex justify-between ">
          <div className="flex flex-row gap-5 items-center">
            <IconContainer
              Icon={ChartNoAxesCombined}
              size={"md"}
              tone={"blue"}
              shape={"semi"}
              className="p-2"
            />
            <span>
              <p className="text-sm">Cash Flow Overview</p>
              <p className="text-text-muted text-xs">Income vs Expense</p>
            </span>
          </div>
          <div className="flex flex-1 hidden lg:block">
            <ChartControls
              rangeLabel={rangeDisplay}
              canPrev={pageIndex > 0}
              canNext={pageIndex < pages.length - 1}
              onPrev={() => setPageIndex((i) => i - 1)}
              onNext={() => setPageIndex((i) => i + 1)}
              granularity={granularity}
              options={g}
              onGranularityChange={handleGranularityChange}
            />
          </div>
        </div>
        {barData.length !== 0 ? (
          <>
            <div>
              <div className="flex flex-row  text-xs text-text-secondary justify-self-end gap-3">
                <div className="flex flex-row items-center gap-1">
                  <Square size={8} className="text-success " />
                  <p>Money in</p>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <Square size={8} className="text-error" />
                  <p>Money Out</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between flex-1 min-h-0 ">
              <div className="flex-1 h-full min-h-0">
                <BarGraph data={currentPage.points} granularity={granularity} />
              </div>
            </div>
          </>
        ) : (
          <p className="text-sm text-text-muted">
            No expense or income data yet
          </p>
        )}
      </div>

      {/* Pie */}
      <div className="flex flex-col card-base ">
        <div className="flex flex-row items-center gap-5">
          <IconContainer
            Icon={PieChart}
            size={"md"}
            tone={"violet"}
            shape={"semi"}
            className="p-2"
          />
          <span className="">
            <p className="text-sm">Expense Breakdown</p>
            <p className="text-text-muted text-xs">
              See where your expenses go
            </p>
          </span>
        </div>

        {pieData.length !== 0 ? (
          <div>
            <PieGraph data={pieData} />
          </div>
        ) : (
          <p className="text-sm text-text-muted">No expense data yet</p>
        )}
      </div>
    </div>
  );
}

export default CashFlowChart;
