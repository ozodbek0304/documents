import { Button } from "@/components/ui/button";
import {
  BadgeDollarSign,
  BookOpen,
  ChartBarStacked,
  Download,
  Eye,
  File,
  HardDrive,
  Share2,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { fileColors } from "@/views/home/hero";
import { useModal } from "@/hooks/use-modal";
import Modal from "@/components/custom/modal";
import { DocumentPurchase } from "@/views/product-detail/payment";
import { Document } from "@/types/products";
import { useAuthStore } from "@/store/auth-store";
import { downloadFile } from "@/lib/download";

export const handleShare = (slug: string) => {
  const url = encodeURIComponent(`https://hujjat24.uz/product/${slug}`);
  const telegramUrl = `https://t.me/share/url?url=${url}`;
  window.open(telegramUrl, "_blank");
};

export default function ProductAction({ product }: { product: Document }) {
  const { openModal: paymentModal } = useModal();
  const { openModal: loginModal } = useModal("login-modal");
  const { token } = useAuthStore();

  return (
    <div className="w-full space-y-3">
      <div className="bg-white rounded-xl p-5 shadow-sm border ">
        <div className="w-full flex justify-between items-center mb-4">
          <h1 className="font-bold medium filter text-lg ">
            Hujjat ma'lumotlari
          </h1>
          <Button
            onClick={() => handleShare(product.slug)}
            variant="ghost"
            size="icon"
            className="hover:text-blue-500 cursor-pointer"
          >
            <Share2 size={20} />
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-slate-600 flex items-center gap-1">
              <ChartBarStacked className="w-5 h-5" /> <span>Kategoriya:</span>
            </div>
            <Link
              href={`/category/${product.category.slug}`}
              className={`font-medium hover:text-blue-500`}
            >
              {product.category.name}
            </Link>
          </div>
          <Separator />

          <div className="flex items-center justify-between">
            <div className="text-slate-600 flex items-center gap-1">
              <File className="w-5 h-5" /> <span>Format:</span>
            </div>
            <span
              className={`font-medium ${
                fileColors[product.ext]
              } text-white px-4  rounded-2xl`}
            >
              {product.ext}
            </span>
          </div>
          <Separator />

          <div className="flex items-center justify-between">
            <div className="text-slate-600 flex items-center gap-1">
              <BookOpen className="w-5 h-5" /> <span>Sahifalar:</span>
            </div>
            <span className="font-medium">{product.pages || 0} bet</span>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="text-slate-600 flex items-center gap-1">
              <Eye className="w-5 h-5" /> <span>Ko'rilgan:</span>
            </div>
            <span className="font-medium">{product.view_count || 0} marta</span>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="text-slate-600 flex items-center gap-1">
              <Download className="w-5 h-5" /> <span>Sotilgan:</span>
            </div>
            <span className="font-medium">{product.sold_count || 0} marta</span>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="text-slate-600 flex items-center gap-1">
              <HardDrive className="w-5 h-5" /> <span>Hajmi:</span>
            </div>
            <span className="font-medium">
              {" "}
              {(product.size / 1024 / 1024).toFixed(2)} MB
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-5 shadow-sm border space-y-2 ">
        <div className="flex items-center justify-between">
          <div className="text-slate-600 flex items-center gap-1">
            <BadgeDollarSign className="w-5 h-5" /> <span>Narxi:</span>
          </div>
          <span className={`font-bold px-4 text-2xl  rounded-2xl`}>
            {product.price.toLocaleString()} so'm
          </span>
        </div>
        <Separator />
        <Button
          onClick={() => {
            if (token) {
              if (product?.file_url) {
                downloadFile({
                  data: product.file_url,
                  name: product.name,
                  extension: product?.ext,
                });
              } else {
                paymentModal();
              }
            } else {
              loginModal();
            }
          }}
          className="w-full font-mediumI think hello nugget medium rounded-full bg-gradient-to-r from-blue-600
       to-indigo-600 px-5 py-2 text-white shadow-md cursor-pointer transition-transform hover:scale-105"
        >
          {product?.file_url ? "Yuklab olish" : "Hoziroq sotib olish"}
        </Button>
      </div>

      <Modal className="!max-w-[600px]">
        <DocumentPurchase product={product} />
      </Modal>
    </div>
  );
}
