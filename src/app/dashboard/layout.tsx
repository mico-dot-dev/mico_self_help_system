import Navbar from "@/components/layout/Navbar";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh w-full text-text-primary">
      <SidebarProvider className="">
        <Navbar />

        <main className="overflow-y-hidden flex-1 py-5 pl-5 pr-3 ">
          <SidebarTrigger className={"lg:hidden md:hidden sm:block"} />
          <div className="">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
}

export default layout;
