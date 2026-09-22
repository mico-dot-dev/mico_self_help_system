import React from "react";
import AddButton from "@/src/components/ui/AddButton";
import TaskInfoCard from "@/src/components/ui/TaskHeaderInfoCard";
import { TaskCardProps } from "@/src/type/page-types";
import { Check, Clock, CircleAlert, CalendarRange } from "lucide-react";

function TaskHeader() {
  const cardInfo: TaskCardProps[] = [
    {
      title: "Completed",
      amount: 8,
      stats: 33,
      HeaderIcon: Check,
      color: "#22c55e",
      status: "up",
    },
    {
      title: "Pending",
      amount: 5,
      stats: 17,
      HeaderIcon: Clock,
      color: "#a2bbfa",
      status: "down",
    },
    {
      title: "Overdue",
      stats: 2,
      amount: 50,
      HeaderIcon: CircleAlert,
      color: "#ef4444",
      status: "down",
    },
    {
      title: "Total Task",
      stats: 15,
      amount: 25,
      HeaderIcon: CalendarRange,
      color: "#388df8",
      status: "up",
    },
  ];

  return (
    <div>
      {" "}
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-2xl font-bold text-text-primary">Hi Aki</p>
          <p className="p-0 m-0">
            Here's what's happening with your task today
          </p>
        </div>
        <div className="w-50 content-center">
          <AddButton content="task" size="sm" />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-5 ">
        {cardInfo.map((info, i) => {
          return <TaskInfoCard key={i} {...info} />;
        })}
        <div className="card-base col-span-2 p-3">
          <p>Focus Mode</p>
        </div>
      </div>
    </div>
  );
}

export default TaskHeader;
