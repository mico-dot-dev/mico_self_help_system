import Navbar from "@/src/components/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh w-full text-text-primary">
      <div className="">
        <Navbar />
      </div>

      <div className="overflow-y-scroll flex-1">
        <div className="pr-2">{children}</div>
      </div>
    </div>
  );
}

export default layout;
