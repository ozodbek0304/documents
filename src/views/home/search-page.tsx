import { Share2, HardDrive, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParamInput from "@/components/param/input";
import { useRouter } from "next/router";
import { useGet } from "@/hooks/useGet";
import { PRODUCTS_SEARCH } from "@/lib/api-endpoints";
import { Document } from "@/components/shared/product-list";
import Link from "next/link";

const fileType: { [key: string]: string } = {
  pdf: "📄",
  doc: "📝",
  docx: "📝",
  xls: "📊",
  xlsx: "📋",
  ppt: "🎯",
  pptx: "📽️",
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

      <div className="flex flex-col md:flex-row gap-4 mb-6">
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
              className="flex items-center p-3 border cursor-pointer rounded-lg hover:bg-muted/50"
            >
              <div className="p-1 bg-muted rounded-md mr-4">
                <span className="text-3xl">{fileType[doc.ext]}</span>
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
                  <div className={`flex items-center `}>
                    <span className="text-md font-bold">
                      {doc.price.toLocaleString()} so'm
                    </span>
                    <span className="ml-1 text-sm">so'm</span>
                  </div>
                </div>
              </div>
              <div>
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
