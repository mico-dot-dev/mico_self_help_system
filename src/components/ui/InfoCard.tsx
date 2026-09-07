import React from "react";
import { CreditCard } from "lucide-react";

function InfoCard() {
  return (
    <div className="flex flex-col justify-between bg-foreground h-36 p-5 shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded">
      <div>
        <p className="text-muted-text font-semibold">Info Card Title</p>
        <CreditCard />
      </div>
      <div>
        <p className="text-2xl font-bold">$24,563.80</p>
        <p className="text-sm text-primary">+12.5% from last month</p>
      </div>
    </div>
  );
}

export default InfoCard;
