import React, { ReactNode } from "react";
import { HeaderCardModel } from "@/src/type/component";
import { PhilippinePeso } from "lucide-react";
import IconContainer from "../ui/IconContainer";
import { twJoin } from "tailwind-merge";
import { formatFloat } from "@/src/lib/utils/formatter";
import CompletionAreaGraph from "../chart/TransactionGraph";

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
          <div className="flex flex-col">
            <div
              className={twJoin(
                "flex flex-row items-center gap-0.5 font-semibold",
                data.kind === "budget" ? "text-xl " : "text-xl ",
              )}
            >
              <PhilippinePeso
                size={data.kind === "budget" ? 12 : 22}
                className="self-center"
              />
              <p> {formatFloat(data.amount)}</p>
            </div>
          </div>
        </div>
        <div>
          {data.kind == "trend" ? (
            <div
              className={twJoin(
                "text-xs flex flex-row",
                data.status === "up" ? "text-green-icon" : "text-red-icon",
              )}
            >
              <span>
                {data.status === "up" ? " +" : "-"}
                {data.statsData} % from last month
              </span>
            </div>
          ) : (
            <div className="text-xs text-text-muted flex flex-row gap-1 font-semibold">
              <span className="flex flex-row">
                <PhilippinePeso
                  size={9}
                  className="self-center"
                  strokeWidth={3}
                />
                <span>{data.budgetRemaining}</span>
              </span>
              <span>of</span>
              <span className="flex flex-row">
                <PhilippinePeso
                  size={9}
                  className="self-center"
                  strokeWidth={3}
                />
                <span>{data.budgetRemaining}</span>
              </span>
              <span> budget</span>
            </div>
          )}
        </div>
      </div>

      <div className=" content-center">
        {data.chartData !== undefined &&
          (data.kind === "trend" ? (
            <CompletionAreaGraph data={data.chartData} />
          ) : (
            <></>
          ))}
      </div>
    </div>
  );
}

export default InfoCard;
