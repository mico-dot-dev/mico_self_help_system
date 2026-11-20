import React, { Suspense } from "react";
import CashFlowChart from "@/src/components/dashboard/ChartContainer";
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
import { ListParams } from "@/src/type/data-list";
import Footer from "@/src/features/dashboard/components/Footer";

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

      <Footer />
    </div>
  );
}

export default page;
