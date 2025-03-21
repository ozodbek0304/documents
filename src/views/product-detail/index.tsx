import React from "react";
import ProdcutImageSlider from "@/components/shared/product-detail/prodcut-image-slider";
import ProductAction from "@/components/shared/product-detail/product-action";
import BecomeSeller from "@/components/shared/become-seller";
import SellerCard from "@/components/shared/seller-card";

export default function ProductDetail() {
  return (
    <section className="pt-3 sm:pt-5">
      <h1
        className="text-2xl font-medium"
        aria-label="Depressiya va suitsidual xavfi mavjud mijozlarga maslahat mavzusida kurs
        ishi"
      >
        Depressiya va suitsidual xavfi mavjud mijozlarga maslahat mavzusida kurs
        ishi
      </h1>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-4">
        <div className="w-full sm:w-2/3">
          <ProdcutImageSlider />
        </div>
        <div className="w-full sm:w-1/3 flex flex-col gap-2">
          <ProductAction />
          <SellerCard />
          <BecomeSeller />
        </div>
      </div>
    </section>
  );
}
