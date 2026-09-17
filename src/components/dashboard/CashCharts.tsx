"use server";
import React from "react";
import { Square } from "lucide-react";
import BarGraph from "@/src/components/chart/BarGraph";
import { getUserStatistics } from "@/src/actions/dashboard.action";
import Pie from "@/src/components/chart/PieGraph";

async function CashFlowChart() {
  const res = await getUserStatistics("month");
  if (!res.success) {
    return <p>No data Found</p>;
  }

  console.log("backend data: " + res.data);

  return (
    <div className="flex flex-row w-full gap-4">
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
          <BarGraph data={res.data} granularity="month" />
        </div>
      </div>
      <div className=" p-5 info-card-base flex-1 bg-foreground">
        <div className="flex flex-col mb-5">
          <p>Expense Breakdown</p>
          <p className="text-muted-text text-sm">
            Distribution across key categories
          </p>
        </div>
        <Pie />
      </div>
    </div>
  );
}

export default CashFlowChart;
