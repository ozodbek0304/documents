import React, { HTMLAttributes } from "react";
import ProductCard from "../product-card";

type Props = {
  title?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function ProductList({ title, ...props }: Props) {
  return (
    <section {...props}>
      {title ? <h2 className="text-2xl font-semibold">{title}</h2> : ""}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-2 gap-1 sm:gap-4">
        {Array.from({ length: 100 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </section>
  );
}
