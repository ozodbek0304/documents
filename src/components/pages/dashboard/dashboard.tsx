import React from "react";
import SidebarLayout from "../../layout/sidebar-layout";
import { DashboardCards } from "./dashboard-card";
import { DashboardChart } from "./chart";

const DashboardPage = () => {
  return (
    <React.Fragment>
      <SidebarLayout>
        <DashboardCards />
        <DashboardChart />
      </SidebarLayout>
    </React.Fragment>
  );
};

export default DashboardPage;
