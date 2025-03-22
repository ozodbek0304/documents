import SidebarLayout from "@/components/layout/sidebar-layout";
import OrdersPage from "@/components/pages/orders";
import React from "react";

function Orders() {
  return <SidebarLayout>
    <OrdersPage/>
  </SidebarLayout>;
}

export default Orders;
