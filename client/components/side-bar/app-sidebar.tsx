import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { LayoutDashboard, List, Settings2, Shield, User2 } from "lucide-react";
import Link from "next/link";

const SideBarItems = [
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

function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
        >
          <div className="flex items-center justify-center">
            <Shield className="size-8 flex text-primary mr-2" />
            <h1 className="text-xl font-bold">SecureVault</h1>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="space-y-2">
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          {SideBarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center"
              passHref
            >
              <SidebarMenuButton
                tooltip={item.title}
                title={item.title}
                className="hover:bg-black/10 group hover:text-primary text-zinc-800 transition-all duration-300"
              >
                <item.icon />
                <span className="text-sm font-medium">{item.title}</span>
              </SidebarMenuButton>
            </Link>
          ))}
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default AppSidebar;
