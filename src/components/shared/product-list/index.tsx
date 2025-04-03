import React, { HTMLAttributes } from "react";
import ProductCard from "../product-card";
import { Document } from "@/types/products";

type Props = {
  documents: Document[];
} & HTMLAttributes<HTMLDivElement>;


export default function ProductList({ documents }: Props) {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-2 gap-3 sm:gap-4">
        {documents.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </section>
  );
}
