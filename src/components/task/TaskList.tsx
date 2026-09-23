import React from "react";
import { GetUserTasks } from "@/src/actions/task.action";
import { ListParams } from "@/src/type/data-list";
import { taskColumns } from "@/src/components/task/TaskTableStructure";
import DataShowcase from "@/src/components/ui/DataShowcase";
import TaskItemCard from "./TaskItemCard";

interface TaskListProps {
  searchParams?: ListParams;
}

async function TaskList({ searchParams }: TaskListProps) {
  const tasks = await GetUserTasks({ ...searchParams });
  if (!tasks.success) {
    return <p>Task Data Not Found</p>;
  }
  return (
    <DataShowcase
      data={tasks.data}
      columns={taskColumns}
      CardComponent={TaskItemCard}
      module="task"
    />
  );
}

export default TaskList;
