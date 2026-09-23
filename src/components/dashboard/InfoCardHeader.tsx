import React from "react";
import InfoCard from "@/src/components/ui/InfoCard";
import { StatisticCardProps } from "@/src/type/page-types";
import { CreditCard, TrendingUp, TrendingDown } from "lucide-react";

function InfoCardHeader() {
  const dashboardCardData: StatisticCardProps[] = [
    {
      title: "Total Balance",
      CardIcon: CreditCard,
      amount: "24,563.80",
      iconColor: "violet",
    },
    {
      title: "Monthly Income",
      CardIcon: TrendingUp,
      amount: "8,350.00",
      iconColor: "green",
    },
    {
      title: "Monthly Expenses",
      CardIcon: TrendingDown,
      amount: "5,127.45",
      iconColor: "violet",
    },
  ];
  return (
    <>
      <div className="flex flex-row justify-between min-w-full mb-3">
        <div>
          <p className="text-2xl font-bold">Good Eveneing, Aki!</p>
          <p className="text-text-secondary">
            Here's Your Finance Statistics Overview
          </p>
        </div>
        <div>
          <input type="date" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dashboardCardData.map((data, i) => {
          return <InfoCard key={i} {...data} />;
        })}
      </div>
    </>
  );
}

export default InfoCardHeader;
