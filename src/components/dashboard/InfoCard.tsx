import React from "react";
import { HeaderCardProps } from "@/src/type/component";
import { PhilippinePeso } from "lucide-react";
import IconContainer from "../ui/IconContainer";

function InfoCard({
  title,
  CardIcon,
  amount,
  status,
  statsAmount,
}: HeaderCardProps) {
  return (
    <div className="flex flex-col p-5 shadow-shadow card-base gap-3">
      <div className="flex flex-row items-center gap-3">
        <div className="">
          <IconContainer
            Icon={CardIcon.Icon}
            iconColorScheme={CardIcon.iconColorScheme}
          />
        </div>
        <p className="text-text-muted font-semibold ">{title}</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row text-2xl font-bold items-center gap-1">
          <PhilippinePeso size={22} className="text-text-secondary" />
          <p> {amount}</p>
        </div>
      </div>
      <div>
        <p className="text-sm text-success">+{statsAmount}% from last month</p>
      </div>
    </div>
  );
}

export default InfoCard;
