"use client";

import {  useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";
import Select from "./select";
import { useRouter } from "next/router";

 type PaginationProps = {
  totalPages?: number;
  paramName?: string;
  disabled?: boolean;
  page_sizes?: number[];
  pageSizeParamName?: string;
  changePageSize?: boolean;
  pageSize?: number;
  clearOthers?: boolean;
};

export default function ParamPagination({
  totalPages = 1,
  page_sizes = [20, 30, 50, 75, 100],
  paramName = "page",
  pageSizeParamName = "size",
  disabled = false,
  changePageSize = true,
  pageSize = 20,
  clearOthers,
}: PaginationProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  let currentPage = parseInt(searchParams.get(paramName) || "1", 20);
  currentPage =
    isNaN(currentPage) || currentPage < 1
      ? 1
      : Math.min(currentPage, totalPages);

  const childPages =
    typeof window !== "undefined" && window.innerWidth <= 640 ? 1 : 2;

  const updateSearchParams = (params: Record<string, string | number>) => {
    const currentQuery = clearOthers ? {} : { ...router.query };

    Object.entries(params).forEach(([key, value]) => {
      currentQuery[key] = String(value);
    });

    router.push({
      pathname: router.pathname,
      query: currentQuery,
    });
  };

  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    pages.push(1);

    if (currentPage <= childPages + 3) {
      for (let i = 2; i <= Math.min(childPages + 4, totalPages); i++) {
        pages.push(i);
      }
      if (totalPages > 5) pages.push("...");
    } else if (currentPage >= totalPages - 3) {
      if (totalPages > 5) pages.push("...");
      for (
        let i = Math.max(2, totalPages - (childPages + 3));
        i < totalPages;
        i++
      ) {
        pages.push(i);
      }
    } else {
      pages.push("...");
      for (
        let i = currentPage - childPages;
        i <= currentPage + childPages;
        i++
      ) {
        pages.push(i);
      }
      pages.push("...");
    }

    if (totalPages > 1) pages.push(totalPages);
    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    updateSearchParams({ [paramName]: page });
  };

  const handlePrevious = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNext = () => {
    handlePageChange(currentPage + 1);
  };

  const pageNumbers =
    totalPages > 7
      ? getPageNumbers()
      : Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-4">
      <Pagination className="w-auto m-0">
        <PaginationContent className="flex items-center">
          <PaginationItem>
            <Button
              disabled={disabled || currentPage === 1}
              icon={<ChevronLeft width={20} />}
              variant="ghost"
              onClick={handlePrevious}
              size="icon"
              aria-label="Previous Page"
              className="w-6 h-6 mt-1 sm:m-0 sm:w-8 sm:h-8 "
            />
          </PaginationItem>
          {pageNumbers.map((page, index) =>
            typeof page === "number" ? (
              <PaginationItem key={page}>
                <PaginationLink
                  isActive={page === currentPage}
                  onClick={() => handlePageChange(page)}
                  className={cn(
                    "cursor-pointer",
                    disabled &&
                      "cursor-not-allowed pointer-events-none opacity-50",
                    "w-6 h-6 text-xs sm:text-sm sm:w-8 sm:h-8",
                    page === currentPage && "!border-blue-500 !text-primary"
                  )}
                  aria-current={page === currentPage ? "page" : undefined}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ) : (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis
                  className={cn(
                    disabled
                      ? "cursor-not-allowed pointer-events-none opacity-50"
                      : "",
                    "w-4 sm:w-auto"
                  )}
                />
              </PaginationItem>
            )
          )}
          <PaginationItem>
            <Button
              disabled={disabled || currentPage === totalPages}
              icon={<ChevronRight width={20} />}
              variant="ghost"
              onClick={handleNext}
              size="icon"
              aria-label="Next Page"
              className="w-6 h-6 mt-1 sm:m-0 sm:w-8 sm:h-8"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      {changePageSize && (
        <Select
          disabled={disabled}
          className="w-20 h-6 sm:h-8"
          label=""
          options={page_sizes?.map((size) => ({
            name: `${size}`,
            id: `${size}`,
          }))}
          value={searchParams.get(pageSizeParamName) || pageSize}
          setValue={(value) =>
            updateSearchParams({
              [pageSizeParamName]: +value,
              [paramName]: 1,
            })
          }
        />
      )}
    </div>
  );
}


