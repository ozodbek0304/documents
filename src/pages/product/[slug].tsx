import { GetServerSideProps } from "next";
import Layout from "@/components/layout";
import ProductDetail from "@/views/product-detail";
import { getRequest, useGet } from "@/hooks/useGet";
import { GET_VIEW_PRODUCTS, PRODUCTS_DETAILS } from "@/lib/api-endpoints";
import Head from "next/head";
import React, { useEffect, useState } from "react";
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
  slug?: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { slug } = context.params as { slug: string };
  const headers = {
    Cookie: context.req.headers.cookie || "",
  };

  try {
    const product = await getRequest(`${PRODUCTS_DETAILS}/${slug}`, {
      headers: headers,
    });
    return {
      props: { product, slug: slug, error: null },
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

export default function ProductPage({ product, error, slug }: Props) {
  const [state, setState] = useState<boolean>(false);
  useGet(`${GET_VIEW_PRODUCTS}/${slug}`, { options: { enabled: state } });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setState(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [slug]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Yuklanmoqda...</p>;

  return (
    <Layout>
      <Head>
        {/* Page Title */}
        <title>{`${product.name} | Hujjat24`}</title>
        <meta
          name="description"
          content={product.desc?.slice(0, 160) || product.name}
        />
        <meta
          name="keywords"
          content={
            product?.tags?.join(", ") ||
            `${product.name}, kurs ishlari, diplom ishlari, taqdimotlar, slaydlar, referatlar, mustaqil ishlar, dars ishlanmalari, metodik qo'llanmalar, ilmiy maqolalar, laboratoriya ishlari, testlar, dissertatsiyalar, statistika hisobotlari, tarjimalar, lug'atlar, shartnomalar, huquqiy hujjatlar`
          }
        />
        <link
          rel="canonical"
          href={`https://hujjat24.uz/product/${product.slug}`}
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={product.name} />
        <meta
          property="og:description"
          content={product.desc?.slice(0, 160) || product.name}
        />
        <meta
          property="og:image"
          content={product?.images?.[0] || "/logo.png"}
        />
        <meta
          property="og:url"
          content={`https://hujjat24.uz/product/${product.slug}`}
        />
        <meta property="og:site_name" content="hujjat24.uz" />
        <meta
          property="og:keywords"
          content={
            product?.tags?.join(", ") ||
            `${product.name}, kurs ishlari, diplom ishlari, taqdimotlar, slaydlar, referatlar, mustaqil ishlar, dars ishlanmalari, metodik qo'llanmalar, ilmiy maqolalar, laboratoriya ishlari, testlar, dissertatsiyalar, statistika hisobotlari, tarjimalar, lug'atlar, shartnomalar, huquqiy hujjatlar`
          }
        />

        {/* Twitter Metadata */}
        <meta
          property="twitter:image"
          content={product?.images?.[0] || "/logo.png"}
        />
        <meta property="twitter:type" content="website" />
        <meta property="twitter:title" content={product.name} />
        <meta
          property="twitter:description"
          content={product.desc?.slice(0, 160) || product.name}
        />
        <meta
          property="twitter:url"
          content={`https://hujjat24.uz/product/${product.slug}`}
        />
        <meta property="twitter:site_name" content="hujjat24.uz" />
        <meta
          property="twitter:keywords"
          content={
            product?.tags?.join(", ") ||
            `${product.name}, kurs ishlari, diplom ishlari, taqdimotlar, slaydlar, referatlar, mustaqil ishlar, dars ishlanmalari, metodik qo'llanmalar, ilmiy maqolalar, laboratoriya ishlari, testlar, dissertatsiyalar, statistika hisobotlari, tarjimalar, lug'atlar, shartnomalar, huquqiy hujjatlar`
          }
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: product.name,
              image: product.images?.[0] || "/logo.png",
              description: product.desc || product.name,
              brand: {
                "@type": "Brand",
                name: "Hujjat24",
              },
              offers: {
                "@type": "Offer",
                priceCurrency: "UZS",
                price: product.price,
                availability: "https://schema.org/InStock",
                url: `https://hujjat24.uz/product/${product.slug}`,
              },
            }),
          }}
        />
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
                  className="md:basis-1/3 p-0 ml-3  basis-1/2 rounded-xl shadow-sm border lg:basis-1/5"
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
