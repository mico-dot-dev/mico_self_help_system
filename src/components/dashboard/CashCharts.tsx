import React from "react";
import { Square } from "lucide-react";
import BarGraph from "@/src/components/chart/BarGraph";
import {
  getUserBarStatistics,
  getUserExpenseBreakdown,
} from "@/src/actions/dashboard.action";
import PieGraph from "@/src/components/chart/PieGraph";
import { DateRangeModel } from "@/src/schema/dashboard.schema";

interface DateRangeProps {
  dateRange: DateRangeModel;
}

async function CashFlowChart({ dateRange }: DateRangeProps) {
  console.log(dateRange);
  const [barData, pieData] = await Promise.all([
    getUserBarStatistics(dateRange),
    getUserExpenseBreakdown(),
  ]);

  if (!barData.success || !pieData.success) {
    return <p>No data Found</p>;
  }

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
          <div className="flex flex-col text-sm self-center gap-0.5">
            <div className="flex flex-row items-center gap-2">
              <Square size={12} className="text-success" fill="#22c55e" />
              <p>Money in</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Square size={12} className="text-error" fill="#ef4444" />
              <p>Money Out</p>
            </div>
          </div>
        </div>
        <div>
          <BarGraph data={barData.data} granularity={"day"} />
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
          <PieGraph data={pieData.data} />
        </div>
      </div>
    </div>
  );
}

export default CashFlowChart;
