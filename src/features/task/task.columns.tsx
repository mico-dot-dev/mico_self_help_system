"use client";
import { TaskListModel } from "@/schema/task.schema";
import { ColumnDef, tableFeatures } from "@tanstack/react-table";
import { updateTaskCompletion } from "@/actions/task.action";
import { Ellipsis } from "lucide-react";
import Link from "next/link";

export const taskColumns: Array<ColumnDef<{}, TaskListModel>> = [
  {
    id: "button",
    cell: ({ row }) => (
      <button
        type="button"
        className="flex button-base w-5 aspect-square justify-self-center rounded"
        onClick={() => updateTaskCompletion(row.original.id)}
      ></button>
    ),
  },
  {
    accessorKey: "task",
    header: "Task",
    cell: ({ row }) => (
      <div>
        <p>{row.original.title}</p>
        <p className="text-text-muted text-sm">{row.original.description}</p>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: (data) => data.getValue(),
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
    cell: (data) => data.getValue() || "No Due Date",
  },
  {
    accessorKey: "completed",
    header: "Completed",
    cell: (data) => (data.getValue() ? "Completed" : "Pending"),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <button className="cursor-pointer self-start ">
          <details className="dropdown dropdown-right">
            <summary className="btn bg-transparent border-none h-auto w-auto p-0">
              <Ellipsis size={20} />
            </summary>
            <ul className="menu dropdown-content ml-1 bg-white text-background w-24 p-0 px-3 py-1 flex flex-col">
              <Link
                className="hover:bg-gray-200 w-full items-start"
                href={`/tasks?delete=${row.original.id}`}
              >
                Delete
              </Link>
              <Link
                className="hover:bg-gray-200 w-full items-start"
                href={`/dashboard/task?edit=${row.original.id}`}
              >
                Edit
              </Link>
            </ul>
          </details>
        </button>
      );
    },
  },
];
