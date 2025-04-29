import { Share2, HardDrive, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParamInput from "@/components/param/input";
import { useRouter } from "next/router";
import { useGet } from "@/hooks/useGet";
import { PRODUCTS_SEARCH } from "@/lib/api-endpoints";
import Link from "next/link";
import Image from "next/image";
import { Document } from "@/types/products";
import ParamPagination from "@/components/custom/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { handleShare } from "@/components/shared/product-detail/product-action";

export const fileType: { [key: string]: string } = {
  pdf: "/format-icon/pdf.webp",
  doc: "/format-icon/doc.png",
  docx: "/format-icon/docx.png",
  xls: "/format-icon/xls.png",
  xlsx: "/format-icon/xlsx.png",
  ppt: "/format-icon/ppt.png",
  pptx: "/format-icon/pptx.png",
};

interface SearchPageProps {
  count: number;
  page: number;
  pages: number;
  results: Document[];
}

export default function DocumentSearch() {
  const { query } = useRouter();
  const { data, isSuccess, isFetching, isLoading } = useGet<SearchPageProps>(
    PRODUCTS_SEARCH,
    {
      params: query,
      options: { enabled: Boolean(query) },
    }
  );

  return (
    <div className="container mx-auto p-4">
      <div className="my-6">
        <ParamInput
          redirectPath="/search"
          fullWidth
          type="search"
          placeholder="Qidirish..."
          className="w-full rounded-full focus-visible:ring-1  px-6 h-12   "
        />
      </div>

      {/* Results count */}
      {isSuccess && data.count > 0 ? (
        <p className="text-sm text-muted-foreground mb-4">
          Topildi {data?.count || 0} fayl
        </p>
      ) : (
        <div className="w-full flex justify-center">
          {query?.search ? (
            <p className="text-sm text-muted-foreground mb-4">
              <i className="font-bold"> " {query?.search} "</i> bo'yicha
              ma'lumot topilmadi
            </p>
          ) : (
            <p className="text-sm text-muted-foreground mb-4">
              Ma'lumot topilmadi
            </p>
          )}
        </div>
      )}

      <div className="space-y-3">
        {isSuccess && data.count > 0 ? (
          <React.Fragment>
            {isFetching || isLoading
              ? Array.from({ length: 10 }).map((_, index) => (
                  <div
                    key={index}
                    className="border rounded-xl p-3 flex sm:items-center justify-between flex-col sm:flex-row sm:gap-3 gap-2"
                  >
                    <div className="flex sm:items-center justify-between gap-2 w-full">
                      <Skeleton className=" h-[52px] w-14" />
                      <div className="w-full flex flex-col gap-3">
                        <Skeleton className="sm:w-1/3 w-[85%] h-4" />
                        <div className="flex items-center gap-4">
                          <Skeleton className=" w-[100px] h-4" />
                          <Skeleton className=" w-[90px] h-4" />
                          <Skeleton className="hidden sm:block sm:w-[150px] h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4  sm:hidden">
                      <Skeleton className=" w-[100px] h-4" />
                      <Skeleton className=" w-[90px] h-4" />
                    </div>
                  </div>
                ))
              : data?.count > 0 &&
                data?.results?.map((doc) => (
                  <Link
                    href={`/product/${doc.slug}`}
                    key={doc.id}
                    className="flex sm:items-center justify-between flex-col sm:flex-row sm:gap-3 gap-2 p-3 border cursor-pointer rounded-lg hover:bg-muted/50"
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
                        <h1 className="font-medium">{doc.name}</h1>
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
                      <Button
                        onClick={() => handleShare(doc.slug)}
                        className="hover:text-blue-500 cursor-pointer"
                        variant="ghost"
                        size="icon"
                      >
                        <Share2 size={20} />
                      </Button>
                    </div>
                  </Link>
                ))}
          </React.Fragment>
        ) : null}

        {isSuccess && data?.pages > 1 ? (
          <div className="my-5 flex justify-center col-span-4">
            <ParamPagination totalPages={data?.pages} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
