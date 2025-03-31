import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BookOpen, Download, HardDrive } from "lucide-react";
import { Document } from "../product-list";
import { Eye } from "lucide-react";
import { fileColors } from "@/views/home/hero";
import { cn } from "@/lib/utils";

const bgGradients: { [key: string]: string } = {
  doc: "from-blue-50 to-blue-100 border-blue-400",
  docx: "from-blue-50 to-blue-100 border-blue-400",
  xls: "from-green-50 to-green-100 border-green-400",
  xlsx: "from-green-50 to-green-100 border-green-400",
  ppt: "from-orange-50 to-orange-100 border-orange-400",
  pptx: "from-orange-50 to-orange-100 border-orange-400",
  pdf: "from-red-50 to-red-100 border-red-400",
};


export default function ProductCard({ product }: { product: Document }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      key={product.id}
      className={cn(
        `group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 
        hover:shadow-xl
      border-t-3`,
        bgGradients[product.ext]
      )}
    >
      {/* Image with overlay */}
      <div className="relative h-48 p-2 overflow-hidden">
        <Image
          width={300}
          height={300}
          priority
          src={product.poster}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Format badge */}
        <div
          className={cn(
            "absolute right-3 top-2 z-10 rounded-full  text-white px-3 py-0.5 text-xs font-bold ",
            fileColors[product.ext]
          )}
        >
          <span>{product.ext}</span>
        </div>
      </div>

      <div className="p-3 bg-gray-50 rounded-b-xl">
        {/* Title */}
        <h3 className="mb-3 text-sm font-semibold text-gray-800 line-clamp-2">
          {product.name}
        </h3>

        {/* File info */}
        <div className="mb-3 flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <BookOpen className={cn("h-4 w-4 text-gray-500")} />
            <span className="text-xs font-medium">
              {product.pages || 0} sahifa
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <HardDrive className={cn("h-4 w-4 text-gray-500")} />
            <span className="text-xs font-medium">
              {(product.size / 1024 / 1024).toFixed(2)} MB
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Eye className={cn("h-4 w-4 text-gray-500")} />
            <span className="text-xs font-medium">
              {product.view_count > 1000
                ? `${product.view_count / 1000} K`
                : product.view_count}
            </span>
          </div>
        </div>

        {/* Price and size */}
        <div className="flex items-center justify-between pt-2 border-t text-gray-700 border-gray-200">
          <div className={`flex items-center `}>
            <span className="text-lg font-bold">
              {product.price.toLocaleString()} so'm
            </span>
            <span className="ml-1 text-sm">so'm</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <Download className={cn("h-4 w-4")} />
            <span className="text-xs font-medium">{product.sold_count}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
