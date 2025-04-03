import { Share2, HardDrive, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParamInput from "@/components/param/input";
import { useRouter } from "next/router";
import { useGet } from "@/hooks/useGet";
import { PRODUCTS_SEARCH } from "@/lib/api-endpoints";
import Link from "next/link";
import Image from "next/image";
import { Document } from "@/types/products";

const fileType: { [key: string]: string } = {
  pdf: "/format-icon/pdf.webp",
  doc: "/format-icon/doc.png",
  docx: "/format-icon/docx.png",
  xls: "/format-icon/xls.png",
  xlsx: "/format-icon/xlsx.png",
  ppt: "/format-icon/ppt.png",
  pptx: "/format-icon/pptx.png",
};

export default function DocumentSearch() {
  const { query } = useRouter();
  const { data: document, isSuccess } = useGet<Document[]>(PRODUCTS_SEARCH, {
    params: { search: query?.search },
    options: { enabled: Boolean(query?.search) },
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 mt-2 text-center text-blue-600">
        Document Bazar
      </h1>

      <div className="mb-6">
        <ParamInput
          redirectPath="/search"
          fullWidth
          type="search"
          placeholder="Qidirish..."
          className="w-full rounded-full focus-visible:ring-1  px-6 h-12   "
        />
      </div>

      {/* Results count */}
      {isSuccess && (
        <p className="text-sm text-muted-foreground mb-4">
          Topildi {document.length} fayl
        </p>
      )}

      <div className="space-y-3">
        {isSuccess &&
          document?.length > 0 &&
          document.map((doc) => (
            <Link
              href={`/product/${doc.slug}`}
              key={doc.id}
              className="flex sm:items-center flex-col sm:flex-row sm:gap-3 gap-2 p-3 border cursor-pointer rounded-lg hover:bg-muted/50"
            >
              <div className="flex items-center gap-3">
                <div className=" rounded-md  flex flex-col">
                  <Image
                    src={fileType[doc.ext]}
                    width={40}
                    height={40}
                    alt={doc.name}
                    priority
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">{doc.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <BookOpen className={"h-4 w-4 text-gray-500"} />
                        <span className="text-xs font-medium">
                          {doc.pages || 0} sahifa
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <HardDrive className={"h-4 w-4 text-gray-500"} />
                        <span className="text-xs font-medium">
                          {(doc.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </div>
                    </div>
                    <div className={`sm:flex items-center hidden `}>
                      <span className="text-md font-bold">
                        {doc.price.toLocaleString()} so'm
                      </span>
                      <span className="ml-1 text-sm">so'm</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center gap-3">
                <div className={`sm:hidden items-center flex `}>
                  <span className="text-md font-bold">
                    {doc.price.toLocaleString()} so'm
                  </span>
                  <span className="ml-1 text-sm">so'm</span>
                </div>
                <Button variant="ghost" size="icon">
                  <Share2 size={16} />
                </Button>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
