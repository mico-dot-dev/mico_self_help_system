"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "./Button";

function Filter() {
  const [groupBy, setGroupBy] = useState<string | null>();

  return (
    <div className="flex flex-row gap-3 text-background h-full">
      <div className="dropdown relative h-full">
        <button
          tabIndex={0}
          className="flex flex-row gap-1.5 input-select rounded-xl px-3 h-full"
        >
          <p className="text-text-primary">Group by: </p>
          <p className="font-semibold text-text-primary">None</p>
          <ChevronDown size={18} />
        </button>

        <ul className="dropdown-content menu input-dropdown w-full">
          <li className="input-dropdown-option-selected"> Category</li>
          <li className="input-dropdown-option"> Category</li>
        </ul>
      </div>

      <div className="h-full">
        <Button>Filter</Button>
      </div>
    </div>
  );
}

export default Filter;
