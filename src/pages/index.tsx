import Layout from "@/components/layout";
import ProductList from "@/components/shared/product-list";
import Hero from "@/views/home/hero";



export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="container mx-auto pt-5">
        <ProductList />
      </div>
    </Layout>
  );
}
