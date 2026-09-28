import React from "react";
import InfoCard from "@/src/components/dashboard/InfoCard";
import { HeaderCardProps } from "@/src/type/component";
import { CreditCard, TrendingUp, TrendingDown } from "lucide-react";
import { HeaderStatisticsModel } from "@/src/schema/dashboard.schema";

interface HeaderStatisticsProps {
  data: HeaderStatisticsModel;
}

async function InfoCardHeader({ data }: HeaderStatisticsProps) {
  const pct = (curr: number, prev: number) =>
    prev === 0 ? 0 : ((curr - prev) / prev) * 100;
  const dashboardCardData: HeaderCardProps[] = [
    {
      title: "Total Balance",
      CardIcon: {
        Icon: CreditCard,
        iconColorScheme: "violet",
      },
      amount: data.total_income - data.total_expense,
      statsAmount: 12.5,
      status: "up",
    },
    {
      title: "Monthly Income",
      CardIcon: {
        Icon: TrendingUp,
        iconColorScheme: "green",
      },

      amount: data.period_income,
      statsAmount: Math.abs(pct(data.period_income, data.prev_income)),
      status: data.period_income >= data.prev_income ? "up" : "down",
    },
    {
      title: "Monthly Expenses",
      CardIcon: {
        Icon: TrendingDown,
        iconColorScheme: "violet",
      },
      amount: data.period_expense,
      statsAmount: Math.abs(pct(data.period_expense, data.prev_expense)),
      status: data.period_expense >= data.prev_expense ? "up" : "down",
    },

    {
      title: "Budget Usage",
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
          <p className="text-2xl font-bold">Good Evening, Aki!</p>
          <p className="text-text-secondary">
            Here's Your Finance Statistics Overview
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardCardData.map((data, i) => {
          return <InfoCard key={i} {...data} />;
        })}
      </div>
    </>
  );
}

export default InfoCardHeader;
