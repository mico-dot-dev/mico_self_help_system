import React, { Suspense } from "react";
import DataListContainer from "@/src/components/ui/DataListContainer";

async function page() {
  // const res =

  return (
    <div className="content-container-base">
      <div className="flex flex-col flex-1 h-full">
        <div className="overflow-y-scroll flex-1 h-fit pb-24">
          <DataListContainer
            module="transaction"
            toolBarProps={{ categoryContent: [] }}
            buttonModule="transaction"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
