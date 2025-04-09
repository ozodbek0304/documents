import Layout from "@/components/layout";
import SearchPage from "@/views/home/search-page";
import Head from "next/head";
import React from "react";

function Search() {
  return (
    <Layout>
      <Head>
        <title>{"Qidiruv"}</title>
      </Head>
      <SearchPage />
    </Layout>
  );
}

export default Search;
