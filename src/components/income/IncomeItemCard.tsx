import React from "react";
import { ModuleCardProps } from "@/src/type/data-table";
import { incomeListModel } from "@/src/schema/income.schema";
import { EllipsisVertical } from "lucide-react";

function IncomeItemCard({ data }: ModuleCardProps<incomeListModel>) {
  return (
    <li className="card-container-base">
      <div className="flex flex-row m-5">
        <div className="self-start flex flex-col ml-3 flex-1">
          <p className="text-base flex w-full">{data.amount}</p>
          <p className="text-sm text-muted-text">{data.amount}</p>
          <div className="flex lg:flex-row text-sm justify-between mt-3 md:flex-col">
            <p className="">Due: June 15, 2026</p>
            <p className="">{data.amount}</p>
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

export default IncomeItemCard;
