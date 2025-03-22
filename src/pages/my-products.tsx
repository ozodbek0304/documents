import SidebarLayout from "@/components/layout/sidebar-layout";
import MyProductsPage from "@/components/pages/my-products";
import React from "react";

function MyProducts() {
  return (
    <SidebarLayout>
      <MyProductsPage />
    </SidebarLayout>
  );
}

export default MyProducts;
