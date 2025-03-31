import Layout from "@/components/layout";
import React from "react";
import { useGet } from "@/hooks/useGet";
import { CATEGORIES, PRODUCTS_HOME } from "@/lib/api-endpoints";
import CategorySidebar from "@/components/pages/category";
import { useRouter } from "next/router";
import { Document } from "@/components/shared/product-list";
import ProductCard from "@/components/shared/product-card";

const CategoryPage = () => {
  const { data } = useGet(CATEGORIES);
  const { query } = useRouter();
  const currentSlug = Array.isArray(query.slug)
    ? query.slug[0]
    : query.slug || "";
  const { data: document, isSuccess } = useGet<{
    next_cursor: number;
    products: Document[];
  }>(`${PRODUCTS_HOME}/${currentSlug}`, {
    options: { enabled: Boolean(currentSlug) },
  });

  console.log(document);

  return (
    <Layout>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 py-8">
        <div className="col-span-1 hidden lg:block">
          <CategorySidebar categories={data || []} currentSlug={currentSlug} />
        </div>
        <div className="lg:col-span-3 col-span-4 items-start grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 py-2 gap-3">
          {isSuccess &&
            document.products.length > 0 &&
            document.products.map((item, index) => (
              <ProductCard key={index} product={item} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
