import Layout from "@/components/layout";
import PurchasedPage from "@/components/pages/purchased";
import { getToken } from "@/constants/api";
import React from "react";
import NotFound from "./404";
import { useAuthStore } from "@/store/auth-store";

function Purchased() {
  const { token } = useAuthStore();

  return <Layout>{token ? <PurchasedPage /> : <NotFound />}</Layout>;
}

export default Purchased;
