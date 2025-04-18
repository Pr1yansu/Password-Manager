"use client";
import React from "react";
import Link from "next/link";
import { SidebarMenuButton, useSidebar } from "../ui/sidebar";
import { LayoutDashboard, List, Settings2, User2 } from "lucide-react";

export const SideBarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Password Vault",
    icon: List,
    href: "/",
  },
  {
    title: "Settings",
    icon: Settings2,
    href: "/settings",
  },
  {
    title: "Profile",
    icon: User2,
    href: "/profile",
  },
];

const SidebarLinks = () => {
  const { setOpenMobile } = useSidebar();

  return (
    <div>
      {SideBarItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="flex items-center"
          passHref
          onClick={() => {
            setOpenMobile(false);
          }}
        >
          <SidebarMenuButton
            tooltip={item.title}
            title={item.title}
            className="hover:bg-black/10 dark:hover:bg-white/10 dark:text-zinc-50 group hover:text-primary dark:hover:text-primary text-zinc-800 transition-all duration-200"
          >
            <item.icon />
            <span className="text-sm font-medium">{item.title}</span>
          </SidebarMenuButton>
        </Link>
      ))}
    </div>
  );
};

export default SidebarLinks;
