import React from "react";
import QuickStartButtons from "@/src/components/dashboard/QuickStartButtons";
import DataListContainer from "@/src/components/shared/DataListContainer";
import { ListParams } from "@/src/type/data-list";
import { TrendingUp, ArrowRight } from "lucide-react";
import IconContainer from "@/src/components/shared/IconContainer";

function Footer(params: ListParams) {
  return (
    <footer className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
      <div className="flex flex-col card-base gap-2 col-span-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <IconContainer Icon={TrendingUp} tone={"green"} size={"sm"} />
              <p className="flex flex-col text-xs self-center">
                <span> Income History</span>
                <span className="text-text-secondary">
                  Your Income Deposits
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-row text-sm items-center gap-1 text-info">
            <p>View All</p>
            <ArrowRight size={15} />
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
  );
}

export default Footer;
