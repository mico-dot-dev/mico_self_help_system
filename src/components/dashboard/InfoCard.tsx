import React, { ReactNode } from "react";
import { HeaderCardModel } from "@/src/type/component";
import { PhilippinePeso } from "lucide-react";
import IconContainer from "../shared/IconContainer";
import { twJoin } from "tailwind-merge";
import { formatToDecimal, formatToPercentage } from "@/lib/format/number";
import DashboardHeaderGraph from "../charts/TransactionGraph";
import BudgetProgressBar from "../charts/BudgetProgressBar";
import { headers } from "next/headers";
import { userAgent } from "next/server";

type HeaderProps = {
  data: HeaderCardModel;
  gridCol?: string;
};

async function InfoCard({ data, gridCol }: HeaderProps) {
  const { title, amount, iconInfo, kind, chartData, mobileTitle } = data;
  const headersList = await headers();

  // 2. Use Next.js built-in userAgent parser
  const { device } = userAgent({ headers: headersList });

  const isMobile: boolean =
    mobileTitle !== undefined && device.type === "mobile";
  return (
    <div
      className={twJoin(
        "flex flex-row shadow-shadow card-base p-3 py-2 lg:col-span-1 ",
        gridCol,
      )}
    >
      <div className="flex flex-col flex-1 self-center">
        <div className="flex flex-row items-center gap-3 mb-1 ">
          <div className="">
            <IconContainer
              Icon={iconInfo.Icon}
              tone={iconInfo.tone}
              size={"sm"}
            />
          </div>
          <div>
            <p className="text-text-secondary text-xs font-semibold">
              {isMobile ? mobileTitle : title}
            </p>
            <div
              className={twJoin("flex flex-col ", kind === "trend" && "lg:p-1")}
            >
              {kind === "trend" ? (
                <div className="flex flex-row items-center gap-0.5 font-semibold">
                  <PhilippinePeso size={16} className="self-center" />
                  <span className="text-lg">
                    {formatToDecimal.format(amount)}
                  </span>
                </div>
              ) : (
                <div>
                  {" "}
                  <span>{formatToPercentage.format(data.percentage)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div></div>
        <div>
          {kind == "trend" ? (
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
            <div className="flex flex-col gap-3">
              <div className="text-xs text-text-muted flex flex-row gap-1 font-semibold">
                <span className="flex flex-row">
                  <PhilippinePeso
                    size={9}
                    className="self-center"
                    strokeWidth={3}
                  />
                  <span>{amount}</span>
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
              <div>
                <BudgetProgressBar />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={twJoin("content-center hidden lg:block")}>
        {chartData !== undefined && kind === "trend" && (
          <DashboardHeaderGraph data={chartData.data} color={chartData.color} />
        )}
      </div>
    </div>
  );
}

export default InfoCard;
