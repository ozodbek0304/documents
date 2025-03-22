"use client";

import * as React from "react";
import {
  LayoutDashboard,
  Logs,
  ScrollText,
  Settings,
  Store,
} from "lucide-react";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";

const data = [
  {
    title: "Boshqaruv paneli",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Mening mahsulotlarim",
    url: "my-products",
    icon: Store,
  },
  {
    title: "Buyurtmalar",
    url: "/orders",
    icon: Logs,
  },
  {
    title: "Arizalarim",
    url: "/applications",
    icon: ScrollText,
  },
  {
    title: "Sozlamalar",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data} />
      </SidebarContent>
    </Sidebar>
  );
}
