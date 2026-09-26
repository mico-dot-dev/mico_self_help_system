"use client";

import React, { useState } from "react";
import BarGraph from "@/src/components/chart/BarGraph";
import PieGraph from "@/src/components/chart/PieGraph";
import { CashFlowPointModel } from "@/src/schema/dashboard.schema";
import { ExpenseFrequency } from "@/src/type/chart";
import { ChartGranularity, granularityMap } from "@/src/type/chart";
import { twJoin } from "tailwind-merge";

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

  return (
    <div className="grid lg:grid-cols-5 sm:grid-cols-2 w-full gap-4">
      <div className="p-5 lg:col-span-3 sm:grid:col-span-1 card-base ">
        <div className="flex justify-between mb-4">
          <div>
            <p>Cash Flow Overview</p>
            <p className="text-text-muted text-sm">
              Comparison of income and expense spending
            </p>
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
        </div>
        <div>
          <BarGraph data={barData} granularity={granularity} />
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
  );
}

export default CashFlowChart;
