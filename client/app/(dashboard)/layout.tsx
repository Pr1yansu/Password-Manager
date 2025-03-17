import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import AppSidebar from "@/components/side-bar/app-sidebar";

const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className="w-full h-full">
        <SidebarTrigger className="cursor-pointer ms-1 mt-1" />
        <section className="p-2 container mx-auto">{children}</section>
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
