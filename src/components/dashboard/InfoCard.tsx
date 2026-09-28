import React from "react";
import { HeaderCardProps } from "@/src/type/component";
import { PhilippinePeso } from "lucide-react";
import IconContainer from "../ui/IconContainer";
import CompletionAreaGraph from "../chart/TransactionGraph";
import { twJoin } from "tailwind-merge";

function InfoCard({
  title,
  CardIcon,
  amount,
  status,
  statsAmount,
}: HeaderCardProps) {
  const formattedAmount = (amount: number) => {
    return amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const data = [
    { day: "Week 1", value: 15 },
    { day: "Week 2", value: 18 },
    { day: "Week 3", value: 22 },
    { day: "Week 4", value: 38 },
  ];
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
            <p> {formattedAmount(amount)}</p>
          </div>
        </div>
        <div>
          <p
            className={twJoin(
              "text-xs",
              status === "up" ? "text-green-icon" : "text-red-icon",
            )}
          >
            {status === "up" ? "+" : "-"}
            {formattedAmount(statsAmount)}% from last month
          </p>
        </div>
      </div>
      {/* <div className="flex self-end justify-end shrink-0">
        <CompletionAreaGraph data={data} />
      </div> */}
    </div>
  );
}

export default InfoCard;
