import React from "react";
import { Check } from "lucide-react";
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
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-surface border border-border">
        <TaskCompletionRate data={data} />
      </div>
      <div className="bg-surface border border-border">
        <p>Recent Activity</p>
        <ul>
          <li>
            <Check />
            <span className="flex flex-col">
              <p>Completed</p> <p className="text-text-muted">2 hours ago</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TaskStatisticsWrapper;
