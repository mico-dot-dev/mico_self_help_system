import React from "react";
import InfoCard from "@/src/components/ui/InfoCard";
import Chart from "@/src/components/ui/Chart";

async function page() {
  return (
    <div className="w-full pl-5 pt-5 border border-border">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full ">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      <div className="grid h-50 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full mt-4 ">
        <div className="p-5 col-span-2 w-full info-card-base">
          <div className="flex justify-between mb-4">
            <div>
              <p>Cash Flow Overflow</p>
              <p>Comparing monthly income and outbound spend</p>
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
        <div className=" h-36 p-5 info-card-base bg-active"></div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 w-full mt-4">
        <div className="h-36 p-5 info-card-base"></div>
        <div className="h-36 p-5 info-card-base"></div>
      </div>
    </div>
  );
}

export default page;
