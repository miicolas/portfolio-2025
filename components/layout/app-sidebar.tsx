import { Calendar, Home, BicepsFlexed } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logout from "./logout";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Skills",
    url: "/dashboard/skills",
    icon: BicepsFlexed,
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
    icon: Calendar,
  },
  {
    title: "Experiences",
    url: "/dashboard/experiences",
    icon: Calendar,
  },
];

export async function AppSidebar() {

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Logout />
      </SidebarFooter>

    </Sidebar>
  );
}