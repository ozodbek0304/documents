import { Button } from "@/components/ui/button";
import { formatMoney } from "@/lib/utils";
import { Icon } from "@gravity-ui/uikit";
import Link from "next/link";
import React from "react";
import {
  ShoppingCart,
  ArrowDownToSquare,
  EyesLookLeft,
  BookOpen,
} from "@gravity-ui/icons";

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
            <Icon
              data={ArrowDownToSquare}
              className="text-blue-400"
              size={20}
            />
            <p>30 marta</p>
          </div>

          <div className="flex items-center gap-2 text-xl border rounded-md py-1 px-2">
            <Icon data={EyesLookLeft} className="text-blue-400" size={20} />
            <p>30 marta</p>
          </div>

          <div className="flex items-center gap-2 text-xl border rounded-md py-1 px-2">
            <Icon data={BookOpen} className="text-blue-400" size={20} />
            <p>17 bet</p>
          </div>
        </div>
        <Button size="xl" className="w-full" view="action">
          <Icon data={ShoppingCart} />
          Sotib olish
        </Button>
      </div>
    </aside>
  );
}
