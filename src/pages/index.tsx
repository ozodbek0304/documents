import Layout from "@/components/layout";
import ProductList, { Document } from "@/components/shared/product-list";
import DocumentListingSkeleton from "@/components/skeletion/product-sekeletion";
import { Button } from "@/components/ui/button";
import { useGet } from "@/hooks/useGet";
import { PRODUCTS_HOME } from "@/lib/api-endpoints";
import Hero from "@/views/home/hero";
import { ArrowRight, LayoutList } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type DocumentHome = {
  products: Document[];
  color: string;
  name: string;
  slug: string;
  icon: string;
  id: number;
};

export default function Home() {
  const { data, isSuccess, isLoading } = useGet<DocumentHome[]>(PRODUCTS_HOME);
  const { push } = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).google) {
      (window as any).google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
        callback: (response: any) => {
          console.log("Google Token:", response.credential);
          signIn("google", { id_token: response.credential });
        },
        auto_select: true, // Avtomatik loginni yoqish
        prompt_parent_id: "google-one-tap", // One Tap-ni maxsus div-da chiqarish
        cancel_on_tap_outside: false,
      });

      // One Tap login taklifini chiqarish (yuqori o'ng burchakda)
      (window as any).google.accounts.id.prompt();
    }
  }, []);

  return (
    <Layout>
      <Hero />
      <div className="container mx-auto pt-12 sm:px-0 px-3 space-y-12">
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-2 gap-3 sm:gap-4">
            <DocumentListingSkeleton length={20} hiddenHead={true} />
          </div>
        ) : (
          isSuccess &&
          data?.length > 0 && (
            <React.Fragment>
              {data.map((item) => (
                <div className="space-y-4" key={item.slug}>
                  <Link
                    href={`/category/${item.slug}`}
                    className="flex items-center gap-3 sm:py-2 py-1 border-b border-border group hover:border-blue-500 transition-all duration-300"
                  >
                    <span className="sm:text-3xl text-2xl">{item.icon}</span>
                    <h2 className="sm:text-2xl text-xl font-bold">
                      {item.name}
                    </h2>
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
          )
        )}
      </div>
    </Layout>
  );
}
