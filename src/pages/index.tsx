import Layout from "@/components/layout";
import ProductList, { Document } from "@/components/shared/product-list";
import { useGet } from "@/hooks/useGet";
import { PRODUCTS_HOME } from "@/lib/api-endpoints";
import Hero from "@/views/home/hero";
import { ArrowRight } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

type DocumentHome = {
  products: Document[];
  color: string;
  name: string;
  slug: string;
  icon: string;
  id: number;
};

export default function Home() {
  const { data, isSuccess } = useGet<DocumentHome[]>(PRODUCTS_HOME);

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
      <div className="container mx-auto pt-12 space-y-12">
        {isSuccess &&
          data?.length > 0 &&
          data.map((item) => (
            <div className="space-y-4">
              <Link
                key={item.slug}
                href={`/category/${item.slug}`}
                className="flex items-center gap-3 py-2 border-b border-border group hover:border-blue-500 transition-all duration-300"
              >
                <span className="text-3xl">{item.icon}</span>
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <ArrowRight className="h-6 w-6 ml-auto text-muted-foreground opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all duration-300" />
              </Link>
              <ProductList documents={item.products} />
            </div>
          ))}
      </div>
    </Layout>
  );
}
