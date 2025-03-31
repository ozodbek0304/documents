import { GetServerSideProps } from "next";
import Layout from "@/components/layout";
import ProductDetail from "@/views/product-detail";
import { getRequest } from "@/hooks/useGet";
import { PRODUCTS_DETAILS, SIMILAR_PRODUCTS } from "@/lib/api-endpoints";
import Head from "next/head";
import React from "react";
import { Document } from "@/components/shared/product-list";
import ProductCard from "@/components/shared/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  product: Document | null;
  productSimilar: Document[];
  error: string | null;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { slug } = context.params as { slug: string };

  try {
    const product = await getRequest(`${PRODUCTS_DETAILS}/${slug}`);
    const productSimilar = await getRequest(`${SIMILAR_PRODUCTS}/${slug}`);

    return {
      props: { product, productSimilar, error: null },
    };
  } catch (error: any) {
    return {
      props: {
        product: null,
        productSimilar: [],
        error: error.message || "Something went wrong",
      },
    };
  }
};

export default function ProductPage({ product, productSimilar, error }: Props) {
  if (error) return <p>{error}</p>;
  if (!product) return <p>Yuklanmoqda...</p>;

  console.log(productSimilar);

  return (
    <Layout>
      <Head>
        <title>{product.name || "Product Detail Page"}</title>
      </Head>
      <ProductDetail product={product} />
      <div className="container mx-auto mt-12 relative">
        <h1 className="text-2xl font-bold my-3">O'xshash mahsulotlar</h1>
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent className="p-1">
            {productSimilar.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/3 p-0 ml-3  rounded-xl shadow-sm border lg:basis-1/5"
              >
                <ProductCard key={index} product={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -top-7 left-[94%] cursor-pointer " />
          <CarouselNext className="absolute -top-7 right-0  cursor-pointer " />
        </Carousel>
      </div>
    </Layout>
  );
}
