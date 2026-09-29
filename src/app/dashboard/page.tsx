import React, { Suspense } from "react";
import AddButton from "@/src/components/ui/AddButton";
import IncomeList from "@/src/components/income/IncomeList";
import CashFlowChart from "@/src/components/dashboard/CashCharts";
import DashboardHeader from "@/src/components/dashboard/DashboardHeader";
import {
  DateRangeModel,
  EMPTY_HEADER_STATS,
} from "@/src/schema/dashboard.schema";
import {
  getUserBarStatistics,
  getUserExpenseBreakdown,
  getUserHeaderStatistics,
} from "@/src/actions/dashboard.action";
import { getAvailableGranularities } from "@/src/lib/utils/granularity";
import { endOfMonth, startOfMonth } from "date-fns";

interface PageProps {
  searchParams?: Promise<{ from?: string; to?: string }>;
}

async function page({ searchParams }: PageProps) {
  const params = await searchParams;
  const now = new Date();
  const dateRange: DateRangeModel = {
    from: params?.from
      ? new Date(params.from)
      : new Date(now.getFullYear(), now.getMonth(), 1),
    to: params?.to ? new Date(params.to) : now,
  };
  const [barData, pieData, headerData] = await Promise.all([
    getUserBarStatistics(dateRange),
    getUserExpenseBreakdown(dateRange),
    getUserHeaderStatistics({
      from: startOfMonth(new Date()),
      to: endOfMonth(new Date()),
    }),
  ]);
  const granularityRange = getAvailableGranularities(dateRange);

  return (
    <div className="flex flex-col w-full pl-5 pt-5 h-full pb-15 gap-3">
      <DashboardHeader
        data={headerData.success ? headerData.data : EMPTY_HEADER_STATS}
      />

      <section className="lg:block sm:hidden">
        <Suspense>
          <CashFlowChart
            barData={barData.success ? barData.data : []}
            pieData={pieData.success ? pieData.data : []}
            g={granularityRange}
          />
        </Suspense>
      </section>

      <footer className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 w-full">
        <div className="flex flex-col p-5 card-base gap-2">
          <div className="flex flex-row justify-between">
            <p className="self-end">Income History</p>
            <div>
              <AddButton content="income" size="sm" />
            </div>
          </div>
          <div className="">
            <IncomeList />
          </div>
        </div>
        <div className="card-base">
          <p>Budget Recommendation</p>
        </div>
      </footer>
    </div>
  );
}

export default page;
