import React, { Suspense, use } from "react";
import { ListParams } from "@/src/type/page-types";
import { GetUserCategory } from "@/src/actions/category.action";
import DataListContainer from "@/src/components/ui/DataListContainer";
import TaskStatisticsWrapper from "@/src/components/task/TaskStatisticsWrapper";
import TaskHeader from "@/src/components/task/TaskHeader";

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

  return (
    <div className="content-container-base h-full overflow-y-scroll">
      <header className="flex flex-col mb-5 gap-3">
        <TaskHeader />
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
