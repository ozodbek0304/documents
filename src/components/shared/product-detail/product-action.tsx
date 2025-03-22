import { Button } from "@/components/ui/button";
import { formatMoney } from "@/lib/format-money";
import { ArrowDown, BookOpen, Eye, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ProductAction() {
  return (
    <aside className="p-3 rounded-md border">
      <div className="flex flex-col gap-3 items-start">
        <p className="font-semibold text-2xl text-blue-400">
          {formatMoney(45000, "uzs")}
        </p>

        <div className="flex items-center gap-2 text-xl">
          <p>Kategoriya:</p>
          <Link href={"/"} className="text-blue-400 underline">
            Kurs ishlari
          </Link>
        </div>

        <div className="flex gap-2 items-center py-2">
          <div className="flex items-center gap-2 text-xl border rounded-md py-1 px-2">
            <ArrowDown />
            <p>30 marta</p>
          </div>

          <div className="flex items-center gap-2 text-xl border rounded-md py-1 px-2">
            <Eye />
            <p>30 marta</p>
          </div>

          <div className="flex items-center gap-2 text-xl border rounded-md py-1 px-2">
            <BookOpen />
            <p>17 bet</p>
          </div>
        </div>
        <Button className="w-full">
          <ShoppingCart />
          Sotib olish
        </Button>
      </div>
    </aside>
  );
}
