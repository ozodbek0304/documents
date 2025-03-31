import React, { HTMLAttributes } from "react";
import ProductCard from "../product-card";

type Props = {
  documents: Document[];
} & HTMLAttributes<HTMLDivElement>;

export interface Document {
  id: string;
  name: string;
  desc: string;
  slug: string;
  price: number;
  category_id: string;
  category_name: string;
  category: {
    id: string;
    name: string;
    slug: string;
  };
  poster: string;
  ext: string;
  view_count: number;
  sold_count: number;
  size: number;
  pages: number;
  images: {
    id: number;
    image: string;
  }[];
}

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
