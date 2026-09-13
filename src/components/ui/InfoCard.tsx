import React from "react";
import { CreditCard } from "lucide-react";
import { DashboardProps } from "@/src/type/page-types";
import { PhilippinePeso } from "lucide-react";

function InfoCard({ title, CardIcon, amount }: DashboardProps) {
  return (
    <div className="flex flex-col justify-between bg-foreground h-36 p-5 shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded">
      <div className="flex flex-row justify-between">
        <p className="text-muted-text font-semibold">{title}</p>
        <CardIcon />
      </div>
      <div>
        <p className="text-2xl font-bold">
          <PhilippinePeso /> {amount}
        </p>
        <p className="text-sm text-primary">+12.5% from last month</p>
      </div>
    </div>
  );
}

export default InfoCard;
