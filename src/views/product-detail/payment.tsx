"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check, Info, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Document } from "@/types/products";
import { usePost } from "@/hooks/usePost";
import ErrorMessage from "@/components/ui/error-message";
import { PAYMENT } from "@/lib/api-endpoints";
import { useModal } from "@/hooks/use-modal";
import { useRouter } from "next/router";

export function DocumentPurchase({ product }: { product: Document }) {
  const [paymentMethod, setPaymentMethod] = useState("1");
  const [error, setErrorr] = useState("");
  const { closeModal } = useModal();
  const { push } = useRouter();
  const { mutate, isPending } = usePost({
    onSuccess: (data) => {
      push(data?.payment_url);
      closeModal();
    },
  });

  const onSubmit = () => {
    if (paymentMethod) {
      mutate(PAYMENT, {
        provider: Number(paymentMethod),
        product_id: product.id,
      });
    } else {
      setErrorr("Iltimos to'lov turini tanlang");
    }
  };

  useEffect(() => {
    if (paymentMethod) {
      setErrorr("");
    }
  }, [paymentMethod]);

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Xaridingizni yakunlang</CardTitle>
        <CardDescription>
          Toʻlov usulini tanlang va xaridni yakunlang
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="font-medium">To'lov usuli</div>
          <RadioGroup
            defaultValue={paymentMethod}
            value={paymentMethod}
            onValueChange={setPaymentMethod}
            className="grid grid-cols-2 gap-4"
          >
            <div>
              <RadioGroupItem value="1" id="click" className="peer sr-only" />
              <Label
                htmlFor="click"
                className="flex  sm:w-[242px] sm:h-[113px] h-20  items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-purple-500 [&:has([data-state=checked])]:border-purple-500"
              >
                <Image
                  src="/payment/click.png"
                  alt="Click"
                  width={240}
                  priority
                  height={240}
                  className="w-full h-full object-cover rounded-md "
                />
              </Label>
            </div>
            <div>
              <RadioGroupItem disabled value="2" id="payme" className="peer sr-only" />
              <Label
                htmlFor="payme"
                className="flex flex-col sm:w-[242px] sm:h-[113px] h-20 items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-purple-500 [&:has([data-state=checked])]:border-purple-500"
              >
                <Image
                  src="/payment/payme.png"
                  alt="Payme"
                  width={240}
                  height={240}
                  className="w-full h-full object-cover rounded-md "
                  priority
                />
              </Label>
            </div>
          </RadioGroup>
          <ErrorMessage className="text-sm">{error}</ErrorMessage>
        </div>

        <div className="rounded-lg border bg-amber-50 p-4">
          <div className="flex gap-3">
            <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-medium text-amber-800">
                Xarid qilishdan oldin hujjat tafsilotlarini tekshiring.
              </p>
              <p className="text-sm text-amber-700">
                Sotib olingandan so'ng, suv belgisi o'chiriladi va siz hujjatni
                asl holatda yuklab olasiz.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-4 bg-gray-50">
          <div className="flex justify-between ">
            <span className="text-gray-600 font-medium sm:text-lg">
              Mahsulot narxi
            </span>
            <span className="font-medium sm:text-xl">
              {product.price.toLocaleString()} so'm
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-4">
        <Button
          onClick={onSubmit}
          loading={isPending}
          disabled={isPending}
          className="w-full gap-2 cursor-pointer"
        >
          <ShieldCheck className="h-4 w-4" />
          Sotib olish
        </Button>

        <div className="text-center text-sm text-gray-500 flex items-center justify-center gap-1">
          <Check className="h-4 w-4 text-green-500" />
          <span>Sotib olgandan keyin Suv belgisi o'chiriladi</span>
        </div>
      </CardFooter>
    </Card>
  );
}
