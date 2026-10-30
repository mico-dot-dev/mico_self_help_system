import React, { Suspense } from "react";
import CashFlowChart from "@/src/components/dashboard/DashboardChart";
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
import DataListContainer from "@/src/components/shared/DataListContainer";
import { ListParams } from "@/src/type/data-list";
import QuickStartButtons from "@/src/components/dashboard/QuickStartButtons";

interface PageProps {
  searchParams?: Promise<DateRangeModel & ListParams>;
}

async function page({ searchParams }: PageProps) {
  const params = await searchParams;

  const now = new Date();
  const dateRange: DateRangeModel = {
    from: params?.from
      ? new Date(params.from)
      : new Date(Date.UTC(now.getFullYear(), now.getMonth(), 1)),
    to: params?.to ? new Date(params.to) : now,
  };
  const [barData, pieData, headerData] = await Promise.all([
    getUserBarStatistics(dateRange),
    getUserExpenseBreakdown(dateRange),
    getUserHeaderStatistics({
      from: startOfMonth(now),
      to: endOfMonth(now),
    }),
  ]);
  const granularityRange = getAvailableGranularities(dateRange);

  return (
    <div className="flex flex-col w-full h-full gap-3">
      <DashboardHeader
        data={headerData.success ? headerData.data : EMPTY_HEADER_STATS}
      />

      <section className="lg:block">
        <Suspense>
          <CashFlowChart
            barData={barData.success ? barData.data : []}
            pieData={pieData.success ? pieData.data : []}
            g={granularityRange}
          />
        </Suspense>
      </section>

      <footer className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
        <div className="flex flex-col p-5 card-base gap-2 col-span-2">
          <div className="flex flex-row justify-between">
            <div>
              <p className="self-end">Income History</p>
              <p className="self-end text-sm text-text-muted ">
                Your Money Deposits
              </p>
            </div>
          </div>
          <div className="">
            <DataListContainer module="income" searchParams={params} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <QuickStartButtons />
          <div className="card-base flex-1">
            <p>Budget Recommendation</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default page;
