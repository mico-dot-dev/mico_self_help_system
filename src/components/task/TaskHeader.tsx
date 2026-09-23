import React from "react";
import AddButton from "@/src/components/ui/AddButton";
import TaskInfoCard from "@/src/components/task/HeaderInfoCard";
import { HeaderCardProps } from "@/src/type/component";
import { Check, Clock, CircleAlert, CalendarRange } from "lucide-react";

function TaskHeader() {
  const cardInfo: HeaderCardProps[] = [
    {
      title: "Completed",
      CardIcon: {
        Icon: Check,
        iconColorScheme: "green",
      },
      amount: 8,
      statsAmount: 12.5,
      status: "up",
    },
    {
      title: "Pending",
      CardIcon: {
        Icon: Clock,
        iconColorScheme: "violet",
      },
      amount: 5,
      statsAmount: 17,
      status: "down",
    },
    {
      title: "Overdue",
      CardIcon: {
        Icon: CircleAlert,
        iconColorScheme: "red",
      },
      amount: 50,
      statsAmount: 2,
      status: "down",
    },
    {
      title: "Total Task",
      CardIcon: {
        Icon: CalendarRange,
        iconColorScheme: "blue",
      },
      amount: 25,
      statsAmount: 15,
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
