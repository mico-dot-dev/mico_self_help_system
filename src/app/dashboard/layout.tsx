import Navbar from "@/src/components/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh w-full text-text-primary">
      <div className="">
        <Navbar />
      </div>
      {children}
      <div className="ml-5"></div>
    </div>
  );
}

export default layout;
