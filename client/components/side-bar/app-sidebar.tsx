import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Shield } from "lucide-react";
import { SwitchMode } from "../ui/toggle-mode";
import SidebarLinks from "./sidebar-links";

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
          <SidebarLinks />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SwitchMode />
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
