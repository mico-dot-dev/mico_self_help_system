import Navbar from "@/components/layout/Navbar";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh w-full text-text-primary">
      <SidebarProvider>
        <Navbar />

        <main className="overflow-y-scroll flex-1">
          <SidebarTrigger className={"lg:hidden md:hidden sm:block"} />
          <div className="pr-2">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
}

export default layout;
