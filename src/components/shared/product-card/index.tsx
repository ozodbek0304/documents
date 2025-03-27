import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { formatMoney } from "@/lib/format-money";
import { Download } from "lucide-react";
import { Document } from "../product-list";
import {
  Eye,
  FileText,
  BookOpen,
  PresentationIcon,
  FileIcon,
  Star,
  Clock,
} from "lucide-react";

export default function ProductCard({ product }: { product: Document }) {
  const [animatedCards, setAnimatedCards] = useState<string[]>([]);

  // Animate cards on load
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < product.id.length) {
        setAnimatedCards((prev) => [...prev, product.id]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Mahsulot kattegoriya iconlari
  const getDocumentIcon = (type: string) => {
    switch (type) {
      case "kurs":
        return <FileText className="h-4 w-4" />;
      case "taqdimot":
        return <PresentationIcon className="h-4 w-4" />;
      case "referat":
        return <FileIcon className="h-4 w-4" />;
      case "kitob":
        return <BookOpen className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  // Kategoriya rangi uchun function
  const getDocumentColor = (type: string) => {
    switch (type) {
      case "kurs":
        return "text-amber-600 ";
      case "taqdimot":
        return "text-blue-600";
      case "referat":
        return "text-green-600";
      case "kitob":
        return "text-purple-600 ";
      default:
        return "text-amber-600 ";
    }
  };

  //  Download rangi uchun function
  const getDocumentTextColor = (type: string) => {
    switch (type) {
      case "kurs":
        return "text-amber-600 bg-amber-600/10";
      case "taqdimot":
        return "text-blue-600 bg-blue-600/10";
      case "referat":
        return "text-green-600 bg-green-600/10";
      case "kitob":
        return "text-purple-600 bg-purple-600/10";
      default:
        return "text-amber-600 bg-amber-600/10";
    }
  };
  //  Border rangi uchun function
  const getDocumentBorderColor = (type: string) => {
    switch (type) {
      case "kurs":
        return "border-amber-300";
      case "taqdimot":
        return "border-blue-300";
      case "referat":
        return "border-green-300";
      case "kitob":
        return "border-purple-300";
      default:
        return "border-amber-300";
    }
  };

  return (
    <Link
      href={"/product/1"}
      key={product.id}
      className={`group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
        animatedCards.includes(product.id)
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      } ${getDocumentBorderColor(product.type)} border-t-4`}
    >
      {/* Image with overlay */}
      <div className="relative h-48 overflow-hidden">
        <Image
          width={300}
          height={300}
          priority
          src={
            "https://d2co7bxjtnp5o.cloudfront.net/media/Images/file-202604--18--6--9_page-1_generate.jpg"
          }
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Format badge */}
        <div className="absolute right-3 top-2 z-10 rounded-full bg-white/90  px-3 py-0.5 text-xs font-bold  ">
          <span className={getDocumentColor(product.type)}>
            {product.format}
          </span>
        </div>
      </div>

      <div className="p-3">
        {/* Title */}
        <h3 className="mb-2 text-md font-medium text-gray-800 line-clamp-1">
          {product.title}
        </h3>

        {/* Category and rating */}
        <div className="mb-3 flex items-center justify-between">
          <span
            className={`inline-flex items-center rounded-md
               px-2.5 py-1 text-xs font-medium ${getDocumentTextColor(
                 product.type
               )}`}
          >
            {getDocumentIcon(product.type)}
            <span className="ml-1">{product.category}</span>
          </span>

          <div className="flex items-center">
            <Download
              className={`h-4 w-4 font-bold ${getDocumentColor(product.type)}`}
            />
            <span className="ml-1 text-xs font-medium text-gray-600">
              {product.rating}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        {/* Views and date */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <div className={`flex items-center ${getDocumentColor(product.type)}`}>
            <span className={"text-lg font-bold "}>
              {product.price.toLocaleString()}
            </span>
            <span className="ml-1 text-sm ">so'm</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Eye className="h-4 w-4" />
            <span className="ml-1 text-xs">{product.views} ko'rilgan</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
