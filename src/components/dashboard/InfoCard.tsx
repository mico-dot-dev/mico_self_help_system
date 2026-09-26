import React from "react";
import { HeaderCardProps } from "@/src/type/component";
import { PhilippinePeso } from "lucide-react";
import IconContainer from "../ui/IconContainer";
import CompletionAreaGraph from "../chart/TransactionGraph";

function InfoCard({
  title,
  CardIcon,
  amount,
  status,
  statsAmount,
}: HeaderCardProps) {
  const data = [
    { day: "Week 0", value: 0 },
    { day: "Week 1", value: 30 },
    { day: "Week 2", value: 25 },
    { day: "Week 3", value: 45 },
    { day: "Week 4", value: 47 },
  ];
  return (
    <div className="grid grid-cols-2 p-5 shadow-shadow card-base">
      <div className="flex flex-col  ">
        <div className="flex flex-row items-center gap-3 mb-3">
          <div className="">
            <IconContainer
              Icon={CardIcon.Icon}
              iconColorScheme={CardIcon.iconColorScheme}
            />
          </div>
          <p className="text-text-muted font-semibold">{title}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row text-2xl font-bold items-center gap-1">
            <PhilippinePeso size={22} className="text-text-secondary" />
            <p> {amount}</p>
          </div>
        </div>
        <div>
          <p className="text-xs text-green-icon">
            +{statsAmount}% from last month
          </p>
        </div>
      </div>
      <div className="flex self-center justify-end">
        <CompletionAreaGraph data={data} />
      </div>
    </div>
  );
}

export default InfoCard;
