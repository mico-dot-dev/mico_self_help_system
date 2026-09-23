import React from "react";
import DataListContainer from "@/src/components/ui/DataListContainer";
import { ExpenseType } from "@/src/generated/prisma";
import { upperCaseFormat } from "@/src/lib/utils/formatter";
import { ListParams } from "@/src/type/data-list";

interface PageProps {
  searchParams?: Promise<ListParams>;
}

async function page({ searchParams }: PageProps) {
  const params = await searchParams;

  return (
    <div className="content-container-base">
      <header className="flex flex-col mb-5 gap-3">
        <p className="text-2xl font-bold text-text-primary">Expenses</p>
        <div className="flex flex-row justify-between">
          <div className="w-70 h-18 bg-gray-500 opacity-25 border border-border rounded-2xl"></div>
          <div className="w-70 h-18 bg-gray-500 opacity-25 border border-border rounded-2xl"></div>
          <div className="w-70 h-18 bg-gray-500 opacity-25 border border-border rounded-2xl"></div>
          <div className="w-70 h-18 bg-gray-500 opacity-25 border border-border rounded-2xl"></div>
        </div>
      </header>
      <div className="flex flex-col flex-1 h-full">
        <DataListContainer
          module="expense"
          buttonModule="expense"
          searchParams={params}
          toolBarProps={{
            categoryContent: Object.values(ExpenseType).map((e) => ({
              id: e,
              label: upperCaseFormat(e),
            })),
          }}
        />
      </div>
    </div>
  );
}

export default page;
