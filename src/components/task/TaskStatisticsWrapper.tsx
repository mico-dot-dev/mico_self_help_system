import React from "react";
import { Check, Calendar, Plus } from "lucide-react";
import TaskCompletionRate from "../chart/TaskCompletionRate";

function TaskStatisticsWrapper() {
  const data = [
    { day: "Mon", value: 30 },
    { day: "Tue", value: 25 },
    { day: "Wed", value: 45 },
    { day: "Thu", value: 47 },
    { day: "Fri", value: 75 },
    { day: "Sat", value: 62 },
    { day: "Sun", value: 75 },
  ];

  const recentData = [
    {
      title: "Completed",
      desc: "Finish Ui Design",
      time: "Hours",
      time_amt: 2,
      DataIcon: Check,
      color: "#8b5cf6",
    },
    {
      title: "Completed",
      desc: "Finish Ui Design",
      time: "Hours",
      time_amt: 2,
      DataIcon: Calendar,
      color: "#38bdf8",
    },
    {
      title: "Completed",
      desc: "Finish Ui Design",
      time: "Hours",
      time_amt: 2,
      DataIcon: Check,
      color: "#22c55e",
    },
    {
      title: "Completed",
      desc: "Finish Ui Design",
      time: "Hours",
      time_amt: 2,
      DataIcon: Plus,
      color: "#38bdf8",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="card-base p-5 col-span-2">
        <p className="font-semibold text-xl"> Task Completion Rate</p>
        <TaskCompletionRate data={data} />
      </div>
      <div className="p-5 flex flex-col card-base gap-3">
        <p className="">Recent Activity</p>
        <ul className="flex flex-col gap-5">
          {recentData.map((d, i) => {
            const Icon = d.DataIcon;
            const header = d.title + ': "' + d.desc + '"';
            const time = d.time_amt + " " + d.time;
            return (
              <li className="flex flex-row gap-8" key={i}>
                <div
                  className="flex rounded-4xl items-center p-2 h-fit self-center"
                  style={{ backgroundColor: d.color }}
                >
                  <Icon />
                </div>
                <span className="flex flex-col">
                  <p>{header}</p>
                  <p className="text-text-muted m-0 0-0">{time}</p>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TaskStatisticsWrapper;
