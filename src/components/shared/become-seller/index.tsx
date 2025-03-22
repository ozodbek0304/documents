import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React from "react";

export default function BecomeSeller() {
  return (
    <div className="border border-orange-400 rounded-md p-3 flex flex-col gap-2">
      <h3 className="text-lg">
        Siz ham huddi shu kabi mahsulotlaringizni yuklab va sotib daromad
        qilishingiz mumkin. <br /> <strong>Bu judayam oson</strong>
      </h3>

      <Button className="!bg-orange-400 !text-white w-full" size="default">
        <Check />
        Sotishni boshlash
      </Button>
    </div>
  );
}
