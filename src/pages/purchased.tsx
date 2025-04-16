import Layout from "@/components/layout";
import PurchasedPage from "@/components/pages/purchased";
import { getToken } from "@/constants/api";
import React from "react";
import NotFound from "./404";


function Purchased() {
  const token= getToken();

  return (
    <Layout>
     {token ? <PurchasedPage /> : <NotFound/>}
    </Layout>
  );
}

export default Purchased;
