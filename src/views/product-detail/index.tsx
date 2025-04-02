import React from "react";
import ProdcutImageSlider from "@/components/shared/product-detail/prodcut-image-slider";
import ProductAction from "@/components/shared/product-detail/product-action";
import { Document } from "@/components/shared/product-list";

export default function ProductDetail({ product }: { product: Document }) {

  return (
    <section className="pt-3 sm:pt-5 container mx-auto">
      <h1
        className="text-2xl font-medium"
        aria-label="Depressiya va suitsidual xavfi mavjud mijozlarga maslahat mavzusida kurs
        ishi"
      >
        {product.name}
      </h1>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-4">
        <div className="w-full sm:w-2/3">
          <ProdcutImageSlider images={product.images} />{" "}
        </div>
        <div className="w-full sm:w-1/3 flex flex-col gap-2">
          <ProductAction product={product} />
        </div>
      </div>
      <div className="border rounded-xl p-4 mt-5 shadow-sm">
        <h1 className="font-bold text-lg mb-3">Mahsulot tavsifi:</h1>
        <p>{product.desc}</p>
      </div>
    </section>
  );
}
