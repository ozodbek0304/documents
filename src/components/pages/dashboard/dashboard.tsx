import React from "react";
import SidebarLayout from "../../layout/sidebar-layout";
import { DashboardCards } from "./dashboard-card";
import { DashboardChart } from "./chart";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <div className="my-5 w-full space-y-8">
      <DashboardCards />
      <SidebarLayout>
        <DashboardChart />
      </SidebarLayout>
    </div>
  );
};

export default DashboardPage;
