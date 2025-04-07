import { GetServerSideProps } from "next";
import Layout from "@/components/layout";
import ProductDetail from "@/views/product-detail";
import { getRequest } from "@/hooks/useGet";
import { PRODUCTS_DETAILS } from "@/lib/api-endpoints";
import Head from "next/head";
import React from "react";
import ProductCard from "@/components/shared/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Document } from "@/types/products";

type Props = {
  product: Document | null;
  error: string | null;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { slug } = context.params as { slug: string };

  try {
    const product = await getRequest(`${PRODUCTS_DETAILS}/${slug}`);

    return {
      props: { product, error: null },
    };
  } catch (error: any) {
    return {
      props: {
        product: null,
        error: error.message || "Something went wrong",
      },
    };
  }
};

export default function ProductPage({ product, error }: Props) {
  if (error) return <p>{error}</p>;
  if (!product) return <p>Yuklanmoqda...</p>;

  return (
    <Layout>
      <Head>
        {/* Sahifa sarlavhasi */}
        <title>{product.name} | Hujjat24</title>

        {/* SEO uchun asosiy meta teglari */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={
            product.desc?.slice(0, 160) ||
            "Yuqori sifatli mahsulotlar Hujjat24.uz. Sifat, ishonch va qulaylik."
          }
        />
        <meta
          name="keywords"
          content={
            product.tags?.join(", ") ||
            `${product.name}, kurs ishi, slaydlar, taqdimotlar, mustaqil ishlar , diplom ishlar`
          }
        />
        <meta name="author" content="Hujjat24.uz" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`https://hujjat24.uz/product/${product.slug}`}
        />

        {/* Open Graph (Facebook va boshqalar uchun) */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content={`${product.name} | Hujjat24.uz`} />
        <meta
          property="og:description"
          content={
            product.desc?.slice(0, 160) ||
            "Yuqori sifatli mahsulotlarni bizda toping"
          }
        />
        <meta
          property="og:image"
          content={
            product.images?.[0]?.[Object.keys(product.images?.[0] || {})[0]] ||
           "/logo.png"
          }
        />
        <meta
          property="og:url"
          content={`https://hujjat24.uz/product/${product.slug}`}
        />
        <meta property="og:site_name" content="Hujjat24.uz" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${product.name} | Hujjat24.uz`} />
        <meta
          name="twitter:description"
          content={
            product.desc?.slice(0, 160) ||
            "Yuqori sifatli mahsulotlar bilan tanishing"
          }
        />
        <meta
          name="twitter:image"
          content={
            product.images?.[0]?.[Object.keys(product.images?.[0] || {})[0]] ||
            "/logo.png"
          }
        />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ProductDetail product={product} />

      {product?.similar?.length > 0 ? (
        <div className="container mx-auto lg:mt-12 mt-8 relative lg:px-0 px-3">
          <h1 className="lg:text-2xl text-xl font-bold my-3">
            O'xshash mahsulotlar
          </h1>
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full"
          >
            <CarouselContent className="p-1">
              {product?.similar?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/3 p-0 ml-3  rounded-xl shadow-sm border lg:basis-1/5"
                >
                  <ProductCard key={index} product={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center  absolute -top-7 right-12">
              <CarouselPrevious className=" cursor-pointer " />
              <CarouselNext className=" cursor-pointer " />
            </div>
          </Carousel>
        </div>
      ) : null}
    </Layout>
  );
}
