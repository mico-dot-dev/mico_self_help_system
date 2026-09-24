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
      <div className="p-5 col-span-2 w-[60%] card-base ">
        <div className="flex justify-between mb-4">
          <div>
            <p>Cash Flow Overview</p>
            <p className="text-text-muted text-sm">
              Comparison of income and expense spending
            </p>
          </div>
          <div className="flex flex-col text-sm self-center gap-0.5">
            <div className="flex flex-row items-center gap-2">
              <Square size={15} className="text-success" fill="#22c55e" />
              <p>Money in</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Square size={15} className="text-error" fill="#ef4444" />
              <p>Money Out</p>
            </div>
          </div>
        </div>
        <div>
          <BarGraph data={barData.data} granularity={granularity} />
        </div>
      </div>
      <div className=" card-base flex-1">
        <div className="flex flex-col mb-5">
          <p>Expense Breakdown</p>
          <p className="text-text-muted text-sm">
            Distribution across key categories
          </p>
        </div>
        <div>
          <PieGraph data={pieData.data} />
        </div>
      </div>
    </div>
  );
}

export default CashFlowChart;
