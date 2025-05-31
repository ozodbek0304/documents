import Layout from "@/components/layout";
import ProductList from "@/components/shared/product-list";
import { Button } from "@/components/ui/button";
import { getRequest } from "@/hooks/useGet";
import { CATEGORIES_TOP, PRODUCTS_HOME } from "@/lib/api-endpoints";
import { Document } from "@/types/products";
import Hero, { CategoriesType } from "@/views/home/hero";
import { ArrowRight, LayoutList } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type DocumentHome = {
  products: Document[];
  color: string;
  name: string;
  slug: string;
  icon: string;
  id: number;
};

type Props = {
  data: DocumentHome[];
  categories: CategoriesType[];
};

export async function getStaticProps(context: any) {
  const headers = {
    Cookie: context.req ? context.req.headers.cookie : "",
  };

  let data = [];
  let categories = [];

  try {
    data = await getRequest(PRODUCTS_HOME, {
      headers: headers,
    });
  } catch (error: any) {
    console.log("Products error:", error);
    data = [];
  }

  try {
    categories = await getRequest(CATEGORIES_TOP, {
      headers: headers,
    });
  } catch (error: any) {
    console.log("Categories error:", error);
    categories = [];
  }

  return {
    props: {
      data,
      categories,
    },
    revalidate: 10,
  };
}

export default function Home({ data, categories }: Props) {
  const { push } = useRouter();

  return (
    <Layout>
      <Head>
        <title>
          Hujjat24 - Kurs ishlari, diplom ishlari, dars ishlanmalari va boshqa
          o'quv hujjatlar
        </title>
        <meta
          name="description"
          content="Hujjat24 - O'quvchilar va talabalar uchun kurs ishlari, diplom ishlari, referatlar, slaydlar, dissertatsiyalar va boshqa hujjatlarni toping va yuklab oling."
        />
        <meta
          name="keywords"
          content="Hujjat24, kurs ishlari, diplom ishlari, metodik qo'llanmalar, dissertatsiyalar, referatlar, laboratoriya ishlari"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hujjat24.uz" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hujjat24 - O'quv hujjatlaringiz manbai"
        />
        <meta
          property="og:description"
          content="Kurs ishlari, diplom ishlari, taqdimotlar, dissertatsiyalar va boshqa o'quv hujjatlarni toping va yuklab oling."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://hujjat24.uz" />
        <meta property="og:site_name" content="Hujjat24" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hujjat24 - O'quv hujjatlaringiz manbai"
        />
        <meta
          name="twitter:description"
          content="Kurs ishlari, diplom ishlari, taqdimotlar, dissertatsiyalar va boshqa o'quv hujjatlarni toping va yuklab oling."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>

      <Hero categories={categories} />
      <div className="container mx-auto pt-12 lg:px-0 px-3 space-y-12">
        {data?.length > 0 && (
          <React.Fragment>
            {data.map((item) => (
              <div className="space-y-4" key={item.slug}>
                <Link
                  href={`/category/${item.slug}`}
                  className="flex items-center gap-3 sm:py-2 py-1 border-b border-border group hover:border-blue-500 transition-all duration-300"
                >
                  <span className="sm:text-3xl text-2xl">{item.icon}</span>
                  <h1 className="sm:text-2xl text-xl font-bold">{item.name}</h1>
                  <ArrowRight className="sm:h-6 sm:w-6 w-4 h-4 ml-auto text-muted-foreground opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all duration-300" />
                </Link>
                <ProductList documents={item.products} />
              </div>
            ))}
            <div className="w-full my-5 flex justify-center">
              <Button
                onClick={() => push(`/category/${data?.[0]?.slug}`)}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600
       to-indigo-600 px-8 py-2 font-medium text-white shadow-md cursor-pointer transition-transform hover:scale-105"
              >
                <LayoutList size={18} /> Barchasini ko'rish
              </Button>
            </div>
          </React.Fragment>
        )}
      </div>
    </Layout>
  );
}
