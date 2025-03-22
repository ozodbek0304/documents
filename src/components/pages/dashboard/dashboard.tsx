import React from "react";
import { DashboardCards } from "./dashboard-card";
import { DashboardChart } from "./chart";

const DashboardPage = () => {
  return (
    <React.Fragment>
        <DashboardCards />
        <DashboardChart />
    </React.Fragment>
  );
};

export default DashboardPage;
