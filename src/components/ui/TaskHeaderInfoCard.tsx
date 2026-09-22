import React from "react";
import { TaskCardProps } from "@/src/type/page-types";
import {
  TrendingUp,
  TrendingDown,
  ArrowUp,
  LucideIcon,
  ArrowDown,
} from "lucide-react";
import { twJoin } from "tailwind-merge";

function TaskHeaderInfoCard({
  title,
  stats,
  amount,
  HeaderIcon,
  color,
  status,
}: TaskCardProps) {
  const bgColor = color + "80";
  const ArrowIcon: LucideIcon = status === "up" ? ArrowUp : ArrowDown;
  let TrendingIcon: LucideIcon = TrendingDown;
  let trendColor = "text-[#ef4444]";

  // Make it green under these specific conditions:
  if (status === "down" && title === "Overdue") {
    trendColor = "text-[#22c55e]";
    TrendingIcon = TrendingUp;
  } else if (status === "up" && title !== "Overdue") {
    trendColor = "text-[#22c55e]";
    TrendingIcon = TrendingUp;
  }
  return (
    <div className="flex flex-col card-base p-5 gap-3">
      <div
        className="h-fit p-2 rounded-4xl w-fit"
        style={{ backgroundColor: bgColor }}
      >
        <HeaderIcon
          className={twJoin("rounded-2xl ")}
          color={color}
          size={24}
        />
      </div>

      <div className="flex flex-col flex-1 gap-3">
        <p className="">{title}</p>
        <p className="text-2xl font-semibold">{amount}</p>
        <span
          className={twJoin("flex flex-row items-center text-sm", trendColor)}
        >
          <ArrowIcon size={15} />
          <p>{stats}% from last week</p>
        </span>
      </div>
      <div></div>
    </div>
  );
}

export default TaskHeaderInfoCard;
