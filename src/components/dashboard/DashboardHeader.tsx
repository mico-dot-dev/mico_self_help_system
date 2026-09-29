import React from "react";
import InfoCard from "@/src/components/dashboard/InfoCard";
import { HeaderCardModel } from "@/src/type/component";
import {
  CreditCard,
  TrendingUp,
  TrendingDown,
  PhilippinePeso,
} from "lucide-react";
import { HeaderStatisticsModel } from "@/src/schema/dashboard.schema";
import DateRangeButton from "../ui/DateRangeButton";

interface HeaderStatisticsProps {
  data: HeaderStatisticsModel;
}

async function InfoCardHeader({ data }: HeaderStatisticsProps) {
  const pct = (curr: number, prev: number) =>
    prev === 0 ? 0 : ((curr - prev) / prev) * 100;
  const cardData: HeaderCardModel[] = [
    {
      kind: "trend",
      title: "Total Balance",
      CardIcon: {
        Icon: CreditCard,
        iconColorScheme: "violet",
      },
      amount: data.total_income - data.total_expense,
      status: "up",
      statsData: 12.5,
    },
    {
      kind: "trend",

      title: "Monthly Income",
      CardIcon: {
        Icon: TrendingUp,
        iconColorScheme: "green",
      },

      amount: data.period_income,
      status: data.period_income >= data.prev_income ? "up" : "down",
      statsData: Math.abs(pct(data.period_income, data.prev_income)),
    },
    {
      kind: "trend",
      title: "Monthly Expense",
      CardIcon: {
        Icon: TrendingDown,
        iconColorScheme: "red",
      },
      amount: data.period_expense,
      status: data.period_expense >= data.prev_expense ? "up" : "down",
      statsData: Math.abs(pct(data.period_expense, data.prev_expense)),
    },

    {
      kind: "budget",
      title: "Budget Usage",
      CardIcon: {
        Icon: PhilippinePeso,
        iconColorScheme: "amber",
      },
      amount: 5127.45,
      percentage: 0,
      budgetInfo: <></>,
    },
  ];

  return (
    <header className=" w-full">
      <div className="flex flex-row justify-between min-w-full mb-3">
        <div>
          <p className="text-2xl font-bold">Good Evening, Aki!</p>
          <p className="text-text-secondary text-sm">
            Here's Your Finance Statistics Overview
          </p>
        </div>
        <div className="flex items-center mr-3 ">
          <DateRangeButton />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cardData.map((data, i) => {
          return <InfoCard key={i} data={data} />;
        })}
      </div>
    </header>
  );
}

export default InfoCardHeader;
