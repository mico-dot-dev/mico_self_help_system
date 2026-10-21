import React, { ReactNode } from "react";
import { HeaderCardModel } from "@/src/type/component";
import { PhilippinePeso } from "lucide-react";
import IconContainer from "../ui/IconContainer";
import { twJoin } from "tailwind-merge";
import { formatToDecimal } from "@/lib/format/number";
import DashboardHeaderGraph from "../chart/TransactionGraph";

type HeaderProps = {
  data: HeaderCardModel;
};

function InfoCard({ data }: HeaderProps) {
  return (
    <div className="flex flex-row p-5 shadow-shadow dashboard-card">
      <div className="flex flex-col flex-1 ">
        <div className="flex flex-row items-center gap-3 mb-3">
          <div className="">
            <IconContainer
              Icon={data.iconInfo.Icon}
              tone={data.iconInfo.tone}
            />
          </div>
          <div>
            <p className="text-text-secondary text-sm">{data.title}</p>
            <div className="flex flex-col">
              {data.kind === "trend" ? (
                <div className="flex flex-row items-center gap-0.5 font-semibold ">
                  <PhilippinePeso size={18} className="self-center" />
                  <span className="text-xl">
                    {" "}
                    {formatToDecimal.format(data.amount)}
                  </span>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div></div>
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
                {data.statsData}%{" "}
                <span className=" text-text-muted">vs last month</span>
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
                <span>{data.amount}</span>
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
            <DashboardHeaderGraph
              data={data.chartData.data}
              color={data.chartData.color}
            />
          ) : (
            <></>
          ))}
      </div>
    </div>
  );
}

export default InfoCard;
