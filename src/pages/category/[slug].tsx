import Layout from "@/components/layout";
import React from "react";
import { getRequest } from "@/hooks/useGet";
import { CATEGORIES, PRODUCTS_HOME } from "@/lib/api-endpoints";
import CategorySidebar from "@/components/pages/category";
import ProductCard from "@/components/shared/product-card";
import ParamInput from "@/components/param/input";
import { Document } from "@/types/products";
import { CategoriesType } from "@/views/home/hero";
import { toast } from "sonner";

interface CategoryPageProps {
  categories: CategoriesType[];
  document: {
    next_cursor: number;
    products: Document[];
  };
  currentSlug: string;
}

export async function getStaticPaths() {
  const categories = await getRequest(CATEGORIES);

  const paths = categories.map((category: { slug: string }) => ({
    params: { slug: category.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  let categories = [];
  let document = null;

  try {
    categories = await getRequest(CATEGORIES);
  } catch (error: any) {
    toast.error(error);
    categories = [];
  }
  try {
    document = await getRequest(`${PRODUCTS_HOME}/${slug}`);
  } catch (error: any) {
    toast.error(error);
    categories = [];
  }

  return {
    props: {
      document,
      categories,
    },
    revalidate: 10,
  };
}

const CategoryPage = ({
  currentSlug,
  categories,
  document,
}: CategoryPageProps) => {
  return (
    <Layout>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 py-8 sm:px-0 px-3">
        <div className="col-span-4">
          <ParamInput
            redirectPath={`/category/${currentSlug}`}
            fullWidth
            type="search"
            placeholder="Qidirish..."
            className="w-full rounded-full focus-visible:ring-1  px-6"
          />
        </div>
        <div className="col-span-1 hidden lg:block">
          <CategorySidebar categories={categories} currentSlug={currentSlug} />
        </div>
        <div className="lg:col-span-3 col-span-4 items-start grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 py-2 gap-3">
          {document.products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
