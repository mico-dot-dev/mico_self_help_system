import React, { ReactNode } from "react";
import { HeaderCardModel } from "@/src/type/component";
import { Minus, PhilippinePeso, Plus, TrendingUp } from "lucide-react";
import IconContainer from "../ui/IconContainer";
import CompletionAreaGraph from "../chart/TransactionGraph";
import { twJoin } from "tailwind-merge";
import { formatFloat } from "@/src/lib/utils/formatter";

type HeaderProps = {
  data: HeaderCardModel;
};

function InfoCard({ data }: HeaderProps) {
  return (
    <div className="flex flex-row p-5 shadow-shadow card-base">
      <div className="flex flex-col flex-1 ">
        <div className="flex flex-row items-center gap-3 mb-3">
          <div className="">
            <IconContainer
              Icon={data.CardIcon.Icon}
              iconColorScheme={data.CardIcon.iconColorScheme}
            />
          </div>
          <p className="text-text-secondary font-semibold">{data.title}</p>
        </div>
        <div>
          {data.kind === "budget" && <>{data.percentage}</>}
          <div className="flex flex-col">
            <div className="flex flex-row text-xl font-bold items-center gap-1">
              <PhilippinePeso size={22} className="" />
              <p> {formatFloat(data.amount)}</p>
            </div>
          </div>
        </div>
        <div>
          {data.kind == "trend" && (
            <div
              className={twJoin(
                "text-xs flex flex-row",
                data.status === "up" ? "text-green-icon" : "text-red-icon",
              )}
            >
              <span>
                {data.status === "up" ? " +" : "-"}
                {formatFloat(data.statsData)} % from last month
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
