import React, { Suspense, use } from "react";
import { ListParams } from "@/src/type/page-types";
import { GetUserCategory } from "@/src/actions/category.action";
import DataListContainer from "@/src/components/ui/DataListContainer";
import TaskInfoCard from "@/src/components/ui/TaskInfoCard";
import { TaskCardProps } from "@/src/type/page-types";

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
      title: "Total Backlog",
      stats: 8,
      desc: "registered issues",
    },
    {
      title: "Completed",
      stats: 1,
      desc: "tasks in archive",
    },
    {
      title: "Pending Queue",
      stats: 5,
      desc: "scheduled events",
    },
    {
      title: "Overdue / Blocked",
      stats: 2,
      desc: "requires operator action",
    },
  ];

  return (
    <div className="content-container-base h-full overflow-y-scroll">
      <header className="flex flex-col mb-5 gap-3">
        <p className="text-2xl font-bold text-primary-text">Hi Aki</p>
        <div className="grid grid-cols-4">
          {cardInfo.map((info, i) => {
            return <TaskInfoCard key={i} {...info} />;
          })}
        </div>
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
