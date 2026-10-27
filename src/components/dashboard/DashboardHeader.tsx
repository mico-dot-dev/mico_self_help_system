import React from "react";
import InfoCard from "@/components/dashboard/InfoCard";
import { HeaderCardModel } from "@/type/component";
import { Wallet, TrendingUp, TrendingDown, PhilippinePeso } from "lucide-react";
import { HeaderStatisticsModel } from "@/schema/dashboard.schema";
import DateRangeButton from "../shared/DateRangeButton";
import { LineChartModel } from "@/type/chart";
import { getHours } from "date-fns";

interface HeaderStatisticsProps {
  data: HeaderStatisticsModel;
}

async function InfoCardHeader({ data }: HeaderStatisticsProps) {
  const pct = (curr: number, prev: number) =>
    prev === 0 ? 0 : ((curr - prev) / prev) * 100;

  const incomeSeries: LineChartModel[] = data.weekly_statistics.map((w) => ({
    day: `Week ${w.week_index + 1}`,
    value: w.income,
  }));
  const expenseSeries: LineChartModel[] = data.weekly_statistics.map((w) => ({
    day: `Week ${w.week_index + 1}`,
    value: w.expense,
  }));

  const cardData: HeaderCardModel[] = [
    //Total Income
    {
      kind: "trend",
      title: "Total Balance",
      iconInfo: {
        Icon: Wallet,
        tone: "violet",
      },
      amount: data.total_income - data.total_expense,
      status: "up",
      statsData: 12.5,
    },

    //Monthly Income
    {
      kind: "trend",
      title: "Monthly Income",
      iconInfo: {
        Icon: TrendingUp,
        tone: "green",
      },
      amount: data.period_income,
      status: data.period_income >= data.prev_income ? "up" : "down",
      statsData: Math.abs(pct(data.period_income, data.prev_income)),
      chartData: {
        data: incomeSeries,
        color: "var(--chart-2)",
      },
    },

    //Monthly Expenses
    {
      kind: "trend",
      title: "Monthly Expense",
      iconInfo: {
        Icon: TrendingDown,
        tone: "red",
      },
      amount: data.period_expense,
      status: data.prev_expense >= data.period_expense ? "up" : "down",
      statsData: Math.abs(pct(data.period_expense, data.prev_expense)),
      chartData: { data: expenseSeries, color: "var(--chart-3)" },
    },

    //Monthly Budget
    {
      kind: "budget",
      title: "Budget Usage",
      iconInfo: {
        Icon: PhilippinePeso,
        tone: "amber",
      },
      amount: 5127.45,
      percentage: 0.06,
      budget: 300,
      budgetRemaining: 200,
      chartData: {
        color: "green",
        data: [],
      },
    },
  ];

  const getGreeting = (): string => {
    const hour = getHours(new Date());
    // Morning: 5:00 AM to 11:59 AM
    if (hour >= 5 && hour < 12) {
      return "Good morning";
    }

    // Afternoon: 12:00 PM to 4:59 PM (16:59)
    if (hour >= 12 && hour < 17) {
      return "Good afternoon";
    }

    // Evening: 5:00 PM (17:00) to 4:59 AM
    return "Good evening";
  };

  return (
    <header className=" w-full">
      <div className="flex flex-col lg:flex-row lg:justify-between min-w-full mb-3">
        <div>
          <p className="text-xl font-semibold capitalize">{getGreeting()}</p>
          <p className="text-text-secondary text-xs">
            Here's Your Finance Statistics Overview
          </p>
        </div>
        <div className="flex items-center mr-3 w-full lg:w-fit">
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
