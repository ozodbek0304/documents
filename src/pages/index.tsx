import ProductList from "@/components/shared/product-list";
import Hero from "@/views/home/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container pt-5">
        <ProductList />
      </div>
    </div>
  );
}
