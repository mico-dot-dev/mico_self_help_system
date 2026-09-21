import React, { Suspense, use } from "react";
import { ListParams } from "@/src/type/page-types";
import { GetUserCategory } from "@/src/actions/category.action";
import DataListContainer from "@/src/components/ui/DataListContainer";
import TaskInfoCard from "@/src/components/ui/TaskInfoCard";
import { TaskCardProps } from "@/src/type/page-types";
import { Check, Clock, CircleAlert, CalendarRange } from "lucide-react";
import TaskStatisticsWrapper from "@/src/components/task/TaskStatisticsWrapper";
import AddButton from "@/src/components/ui/AddButton";

//Extract the search from REST
interface PageProps {
  searchParams?: Promise<ListParams>;
}

async function page({ searchParams }: PageProps) {
  const params = await searchParams;
  const res = await GetUserCategory();
  if (!res.success) {
    return;
  }

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
    <div className="content-container-base h-full overflow-y-scroll">
      <header className="flex flex-col mb-5 gap-3">
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-2xl font-bold text-text-primary">Hi Aki</p>
            <p className="p-0 m-0">
              Here's what's happening with your task today
            </p>
          </div>
          <div>
            <AddButton content="task" />
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
        <TaskStatisticsWrapper />
      </header>
      <div className="flex flex-col flex-1 h-full">
        <DataListContainer
          module="task"
          buttonModule="task"
          searchParams={params}
          toolBarProps={{
            categoryContent: res.data.map((c) => ({
              id: c.id.toString(),
              label: c.title,
            })),
          }}
        />
      </div>
    </div>
  );
}

export default page;
