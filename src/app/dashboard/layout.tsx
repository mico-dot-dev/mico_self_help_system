import AppSidebar from "@/components/layout/AppSidebar";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh w-full text-text-primary">
      <SidebarProvider className="">
        <div>
          <AppSidebar />
        </div>

        <main className="overflow-hidden dashboard-scrollbar overflow-y-auto flex-1 py-5 pl-2 pr-2 ">
          <SidebarTrigger className={"lg:hidden md:hidden sm:block"} />
          <div className="">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
}

export default layout;
