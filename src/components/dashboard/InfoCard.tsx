import React, { ReactNode } from "react";
import { HeaderCardProps } from "@/src/type/component";
import { PhilippinePeso } from "lucide-react";
import IconContainer from "../ui/IconContainer";
import CompletionAreaGraph from "../chart/TransactionGraph";
import { twJoin } from "tailwind-merge";
import { formatFloat } from "@/src/lib/utils/formatter";

function InfoCard({
  kind,
  title,
  CardIcon,
  amount,
  status,
  statsData,
}: HeaderCardProps) {
  const cardFooter: string =
    kind === "custom"
      ? formatFloat(statsData)
      : (status === "up" ? "+" : "-") +
        formatFloat(statsData) +
        "% from last month";
  const statsColor =
    kind === "base"
      ? status === "up"
        ? "text-green-icon"
        : "text-red-icon"
      : "text-secondary-text";
  return (
    <div className="flex flex-row p-5 shadow-shadow card-base">
      <div className="flex flex-col flex-1 ">
        <div className="flex flex-row items-center gap-3 mb-3">
          <div className="">
            <IconContainer
              Icon={CardIcon.Icon}
              iconColorScheme={CardIcon.iconColorScheme}
            />
          </div>
          <p className="text-text-secondary font-semibold">{title}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row text-xl font-bold items-center gap-1">
            <PhilippinePeso size={22} className="" />
            <p> {formatFloat(amount)}</p>
          </div>
        </div>
        <div>
          <span className={twJoin("text-xs", statsColor)}>{cardFooter}</span>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
