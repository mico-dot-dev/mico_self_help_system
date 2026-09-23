import React from "react";
import InfoCard from "@/src/components/dashboard/InfoCard";
import { HeaderCardProps } from "@/src/type/component";
import { CreditCard, TrendingUp, TrendingDown } from "lucide-react";

function InfoCardHeader() {
  const dashboardCardData: HeaderCardProps[] = [
    {
      title: "Total Balance",
      CardIcon: {
        Icon: CreditCard,
        iconColorScheme: "violet",
      },
      amount: 24563.8,
      statsAmount: 12.5,
      status: "up",
    },
    {
      title: "Monthly Income",
      CardIcon: {
        Icon: TrendingUp,
        iconColorScheme: "green",
      },

      amount: 8350.0,
      statsAmount: 12.5,
      status: "up",
    },
    {
      title: "Monthly Expenses",
      CardIcon: {
        Icon: TrendingDown,
        iconColorScheme: "violet",
      },
      amount: 5127.45,
      statsAmount: 12.5,
      status: "down",
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
