"use server";
import React from "react";
import { Square } from "lucide-react";
import BarGraph from "@/src/components/chart/BarGraph";
import {
  getUserBarStatistics,
  getUserExpenseBreakdown,
} from "@/src/actions/dashboard.action";
import PieGraph from "@/src/components/chart/PieGraph";

async function CashFlowChart() {
  const granularity = "month";
  const [barData, pieData] = await Promise.all([
    getUserBarStatistics(granularity),
    getUserExpenseBreakdown(),
  ]);
  if (!barData.success || !pieData.success) {
    return <p>No data Found</p>;
  }

  return (
    <div className="flex flex-row w-full gap-4">
      <div className="p-5 col-span-2 w-[60%] info-card-base">
        <div className="flex justify-between mb-4">
          <div>
            <p>Cash Flow Overflow</p>
            <p className="text-text-muted text-sm">
              Comparing monthly income and outbound spend
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Square />
              <p>Money in</p>
            </div>
            <div className="flex flex-row">
              <Square />
              <p>Money Out</p>
            </div>
          </div>
        </div>
        <div>
          <BarGraph data={barData.data} granularity={granularity} />
        </div>
      </div>
      <div className=" p-5 info-card-base flex-1 bg-surface">
        <div className="flex flex-col mb-5">
          <p>Expense Breakdown</p>
          <p className="text-text-muted text-sm">
            Distribution across key categories
          </p>
        </div>
        <PieGraph data={pieData.data} />
      </div>
    </div>
  );
}

export default CashFlowChart;
