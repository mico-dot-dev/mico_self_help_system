import React from "react";
import { TaskCardProps } from "@/src/type/page-types";

function TaskInfoCard({ title, stats, desc }: TaskCardProps) {
  return (
    <>
      <div className="w-70 h-18 bg-gray-500 opacity-25 border border-border rounded-2xl"></div>
    </>
  );
}

export default TaskInfoCard;
