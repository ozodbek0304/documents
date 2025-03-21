import ProductList from "@/components/shared/product-list";
import ProductDetail from "@/views/product-detail";
import Head from "next/head";
import React from "react";

export default function slug() {
  return (
    <section className="container">
      <Head>
        <title>This page is Product detail page</title>
      </Head>
      <ProductDetail />
      <ProductList title="O'xshash mahsulotlar" className="mt-5" />
    </section>
  );
}
