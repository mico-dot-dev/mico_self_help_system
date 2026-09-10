"use client";

import React from "react";
import { TaskListModel } from "@/src/schema/task.schema";
import { twJoin } from "tailwind-merge";
import { UpdateTaskCompletion } from "@/src/actions/task.action";
import { Circle, CircleCheck, EllipsisVertical } from "lucide-react";
import { ModuleCardProps } from "@/src/type/data-table";
import Swal from "sweetalert2";

function TaskItemCard({ data }: ModuleCardProps<TaskListModel>) {
  function handleToggleComplete() {
    try {
      const res = UpdateTaskCompletion(data.id);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while toggling task completion.",
        icon: "error",
      });
    }
  }

  return (
    <li className="card-container-base">
      <div
        className={twJoin(
          "flex flex-row m-5",
          data.completed && "text-muted-text",
        )}
      >
        <button
          onClick={handleToggleComplete}
          className="cursor-pointer self-start"
        >
          {(data.completed && <CircleCheck size={20} className="" />) || (
            <Circle size={20} />
          )}
        </button>

        <div className="self-start flex flex-col ml-3 flex-1">
          <p className="text-base flex w-full">{data.title}</p>
          <p className="text-sm text-muted-text">{data.description}</p>
          <div className="flex lg:flex-row text-sm justify-between mt-3 md:flex-col">
            <p className="">Due: June 15, 2026</p>
            <p className="">{data.category}</p>
          </div>
        </div>
        <button className="cursor-pointer self-start ">
          <details className="dropdown dropdown-right">
            <summary className="btn bg-transparent border-none h-auto w-auto p-0">
              <EllipsisVertical size={20} />
            </summary>
            <ul className="menu dropdown-content bg-white text-background w-24 p-0 px-3 py-1 flex flex-col">
              <li className="hover:bg-gray-200 w-full items-start">Delete</li>
              <li className="hover:bg-gray-200 w-full items-start">Edit</li>
            </ul>
          </details>
        </button>
      </div>
    </li>
  );
}

export default TaskItemCard;
