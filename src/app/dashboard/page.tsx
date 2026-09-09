import React from "react";
import InfoCard from "@/src/components/ui/InfoCard";
import Chart from "@/src/components/Chart/BarGraph";
import Pie from "@/src/components/Chart/PieGraph";
import AddButton from "@/src/components/ui/AddButton";

async function page() {
  return (
    <div className="w-full pl-5 pt-5 border border-border overflow-hidden overflow-y-scroll h-full pb-15">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full ">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      <div className="grid  grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full mt-4 ">
        <div className="p-5 col-span-2 w-full info-card-base">
          <div className="flex justify-between mb-4">
            <div>
              <p>Cash Flow Overflow</p>
              <p className="text-muted-text text-sm">
                Comparing monthly income and outbound spend
              </p>
            </div>
            <div>
              <p>Money in</p>
              <p>Money Out</p>
            </div>
          </div>
          <div>
            <Chart />
          </div>
        </div>
        <div className=" p-5 info-card-base bg-foreground">
          <div className="flex flex-col">
            <p>Expense Breakdown</p>
            <p className="text-muted-text text-sm">
              Distribution across key categories
            </p>
          </div>
          <Pie />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 w-full mt-4">
        <div className="h-36 p-5 info-card-base">
          <div className="flex flex-row justify-between">
            <p>Income History</p>
            <AddButton content="income" />
          </div>
        </div>
        <div className="h-36 p-5 info-card-base"></div>
      </div>
    </div>
  );
}

export default page;
