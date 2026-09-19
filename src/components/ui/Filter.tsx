"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function Filter() {
  const [groupBy, setGroupBy] = useState<string | null>();

  return (
    <div className="flex flex-row gap-3 text-background h-full">
      <div className="dropdown relative h-full">
        <button
          tabIndex={0}
          className="flex flex-row gap-1.5  button-base rounded-xl px-3 h-full"
        >
          <p className="text-text-muted">Group by: </p>
          <p className="font-semibold">None</p>
          <ChevronDown size={18} />
        </button>

        <ul className="flex flex-col dropdown-content menu bg-surface text-text-primary broder border-border w-full text-md">
          <li className="button-base border-none py-2"> Category</li>
          <li className="button-base border-none py-2"> Category</li>
          <li className="button-base border-none py-2"> Category</li>
        </ul>
      </div>

      <div className="h-full">
        <button className="button-base rounded-xl px-3 h-full">Filter</button>
      </div>
    </div>
  );
}

export default Filter;
