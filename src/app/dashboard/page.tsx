import React, { Suspense } from "react";
import AddButton from "@/src/components/ui/AddButton";
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
import { Button } from "@/src/components/ui/Button";
import { BanknoteArrowUp, BanknoteArrowDown } from "lucide-react";
import IconContainer from "@/src/components/ui/IconContainer";
import { ButtonWithIconModel } from "@/src/type/component";
import DataListContainer from "@/src/components/ui/DataListContainer";
import { ListParams } from "@/src/type/data-list";

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
      from: startOfMonth(new Date()),
      to: endOfMonth(new Date()),
    }),
  ]);
  const granularityRange = getAvailableGranularities(dateRange);

  const quickStartButtons: ButtonWithIconModel[] = [
    {
      label: "Add Income",
      icon: BanknoteArrowUp,
    },
    {
      label: "Add Transaction",
      icon: BanknoteArrowDown,
    },
    {
      label: "Add Expense",
      icon: BanknoteArrowUp,
    },
    {
      label: "Set Budget",
      icon: BanknoteArrowUp,
    },
  ];

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
          <div className="flex flex-col card-base gap-2">
            <p className="font-semibold">Quick Start</p>
            <div className="grid grid-cols-2 gap-3">
              {quickStartButtons.map((value, i) => {
                return (
                  <Button
                    variant={"secondary"}
                    className="h-fit p-1 gap-1"
                    key={i}
                  >
                    <IconContainer
                      Icon={value.icon}
                      iconColorScheme="none"
                      size={"sm"}
                    ></IconContainer>
                    {value.label}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="card-base flex-1">
            <p>Budget Recommendation</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default page;
