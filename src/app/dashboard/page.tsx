import React, { Suspense } from "react";
import InfoCard from "@/src/components/ui/InfoCard";
import Pie from "@/src/components/chart/PieGraph";
import AddButton from "@/src/components/ui/AddButton";
import { CreditCard, TrendingUp, TrendingDown } from "lucide-react";
import IncomeList from "@/src/components/income/IncomeList";
import { DashboardProps } from "@/src/type/page-types";
import CashFlowChart from "@/src/components/dashboard/CashFlowChart";

async function page() {
  const dashboardCardData: DashboardProps[] = [
    { title: "Total Balance", CardIcon: CreditCard, amount: "24,563.80" },
    { title: "Monthly Income", CardIcon: TrendingUp, amount: "8,350.00" },
    { title: "Monthly Expenses", CardIcon: TrendingDown, amount: "5,127.45" },
  ];

  return (
    <div className="w-full pl-5 pt-5 border border-border overflow-hidden overflow-y-scroll h-full pb-15">
      <header className=" w-full ">
        <div>
          <p>Welcome</p>
          <p>Your Finance Statistics</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dashboardCardData.map((data, i) => {
            return <InfoCard key={i} {...data} />;
          })}
        </div>
      </header>
      <section className="flex flex-row w-full mt-4 gap-4">
        <Suspense>
          <CashFlowChart />
        </Suspense>
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
