import React, { Suspense } from "react";
import SearchBar from "@/src/components/ui/SearchBar";
import CategoryList from "@/src/components/ui/CategoryList";
import Filter from "@/src/components/ui/Filter";
import { DataListProps } from "@/src/type/page-types";
import AddButton from "@/src/components/ui/AddButton";

function Toolbar({ module, buttonModule, toolBarProps }: DataListProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-3 items-stretch h-12">
        {/* Search Bar */}
        <div className="flex-1 min-h-full ">
          <SearchBar />
        </div>
        {/* Filter Buttons */}
        <div className="flex pl-15 min-h-full">
          <Filter />
        </div>
        {/* Add Button */}
        <div className="flex min-h-full pl-3">
          {buttonModule && <AddButton content={buttonModule} />}
        </div>
      </div>
      <div className="w-full overflow-x-scroll">
        <Suspense>
          <CategoryList
            module={module}
            content={toolBarProps.categoryContent}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default Toolbar;
