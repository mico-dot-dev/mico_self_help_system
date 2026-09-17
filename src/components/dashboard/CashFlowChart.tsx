"use server";
import React from "react";
import { Square } from "lucide-react";
import BarGraph from "@/src/components/chart/BarGraph";
import { getUserStatistics } from "@/src/actions/dashboard.action";

async function CashFlowChart() {
  const res = await getUserStatistics();
  if (!res.success) {
    return <p>No data Found</p>;
  }

  return (
    <div className="p-5 col-span-2 w-[60%] info-card-base">
      <div className="flex justify-between mb-4">
        <div>
          <p>Cash Flow Overflow</p>
          <p className="text-muted-text text-sm">
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
        <BarGraph data={res.data} />
      </div>
    </div>
  );
}

export default CashFlowChart;
