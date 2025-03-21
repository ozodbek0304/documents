import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatMoney } from "@/lib/format-money";
import { Download } from "lucide-react";

const fileColors = {
  ".doc": "#007DFF",
  ".xls": "#509C62",
  ".xlsx": "#509C62",
  ".ppt": "#DC8452",
  ".pdf": "#E22C2F",
  ".pptx": "#DD7657",
};

export default function ProductCard() {
  return (
    <Link
      href={"/product/1"}
      className="max-w-sm mx-auto bg-white hover:shadow-md rounded-lg cursor-pointer border overflow-hidden border-gray-100"
    >
      <article title="Kurs ishi" className="p-3 relative">
        <Image
          src={
            "https://d2co7bxjtnp5o.cloudfront.net/media/Images/file-202604--18--6--9_page-1_generate.jpg"
          }
          width={300}
          height={300}
          priority
          alt="ffasda"
          className=" max-h-52 object-cover object-top rounded-lg"
        />
        <span
          className={cn(
            "absolute right-4 bottom-4 px-2 py-[2px] font-medium text-white rounded-md"
          )}
          style={{ backgroundColor: fileColors[".pdf"] }}
        >
          .pdf
        </span>
      </article>
      <div className="flex flex-col gap-2 p-3 bg-zinc-100">
        <p className="text-gray-700  font-normal leading-[20px] text-[14px] line-clamp-2">
          Depressiya va suitsidual xavfi mavjud mijozlarga maslahat berish
        </p>
        <div className="flex justify-between gap-2 items-center">
          <span className="text-slate-700 font-bold text-lg">
            {formatMoney(23000, "uzs")}
          </span>
          <Download/>
        </div>
      </div>
    </Link>
  );
}
