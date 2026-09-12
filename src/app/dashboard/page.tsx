import React from "react";
import InfoCard from "@/src/components/ui/InfoCard";
import Chart from "@/src/components/chart/BarGraph";
import Pie from "@/src/components/chart/PieGraph";
import AddButton from "@/src/components/ui/AddButton";
import { Square } from "lucide-react";
import IncomeList from "@/src/components/income/IncomeList";

async function page() {
  return (
    <div className="w-full pl-5 pt-5 border border-border overflow-hidden overflow-y-scroll h-full pb-15">
      <header className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full ">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </header>

      <section className="flex flex-row w-full mt-4 gap-4">
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
                <div className="flex flex-row">
                  <Square />
                  <p>Money in</p>
                </div>
                <div className="flex flex-row">
                  <Square />
                  <p>Money Out</p>
                </div>
              </div>
              <div>
                <input type="date" name="" id="" />
              </div>
            </div>
          </div>

          <div>
            <Chart />
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
      </section>

      <footer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 w-full mt-4">
        <div className="h-36 p-5 info-card-base">
          <div className="flex flex-row justify-between">
            <p>Income History</p>
            <AddButton content="income" />
          </div>
          <div>
            <IncomeList />
          </div>
        </div>
        <div className="h-36 p-5 info-card-base">
          <p>Budget Recommendation</p>
        </div>
      </footer>
    </div>
  );
}

export default page;
