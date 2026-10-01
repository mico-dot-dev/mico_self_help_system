import React, { Suspense } from "react";
import SearchBar from "@/src/components/ui/SearchBar";
import CategoryList from "@/src/components/ui/CategoryList";
import Filter from "@/src/components/ui/Filter";
import { DataListProps } from "@/src/type/data-list";
import AddButton from "@/src/components/ui/AddButton";

function Toolbar({
  module,
  buttonModule,
  toolBarProps,
  groupBy,
}: DataListProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row  items-stretch h-12">
        {/* Search Bar */}
        <div className="flex-1 min-h-full ">
          <SearchBar />
        </div>
        {/* Filter Buttons */}
        {groupBy && (
          <div className="flex pl-15 min-h-full">
            <Filter />
          </div>
        )}
        {/* Add Button */}
        <div className="flex min-h-full pl-3">
          {buttonModule && <AddButton content={buttonModule} size="md" />}
        </div>
      </div>
      {toolBarProps && (
        <div className="w-full overflow-x-auto scrollbar-styled pb-3">
          <Suspense>
            <CategoryList
              module={module}
              content={toolBarProps.categoryContent}
            />
          </Suspense>
        </div>
      )}
    </div>
  );
}

export default Toolbar;
