import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Logs,
  Menu,
  ScrollText,
  Settings,
  Store,
  X,
} from "lucide-react";
import Link from "next/link";

const urlLink = [
  { url: "/dashboard", name: "Dashboard", icon: <LayoutDashboard size={20} /> },
  {
    url: "/my-products",
    name: "Mening mahsulotlarim",
    icon: <Store size={20} />,
  },
  { url: "/orders", name: "Buyurtmalar", icon: <Logs size={20} /> },
  {
    url: "/applications",
    name: "Mening Arizalarim",
    icon: <ScrollText size={20} />,
  },
  { url: "/settings", name: "Sozlamalar", icon: <Settings size={20} /> },
];

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex  gap-5 items-start">
      {/* Sidebar */}
      <div
        className={cn(
          "bg-zinc-100 text-slate-800 h-full p-4 flex flex-col justify-center  rounded-lg transition-all duration-300",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div
          className="cursor-pointer  p-2  rounded-lg hover:bg-zinc-200"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </div>
        {/* Menu Items */}
        <nav className="space-y-2 ">
          {urlLink.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className={cn(
                "flex items-center px-3 py-2 rounded-md transition-all",
                "hover:bg-zinc-200",
                collapsed ? "justify-center" : "gap-3"
              )}
            >
              <div className="w-5 h-5">{item.icon}</div>
              {!collapsed && <span className="whitespace-nowrap">{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ">{children}</div>
    </div>
  );
};

export default SidebarLayout;
