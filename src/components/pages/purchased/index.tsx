"use clients";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadFile } from "@/lib/download";
import { PRODUCTS_PURCHAESD } from "@/lib/api-endpoints";
import { useGet } from "@/hooks/useGet";
import { fileType } from "@/views/home/search-page";
import { PurchasedDocument } from "@/types/products";
import { useRouter } from "next/router";
import { formatDate } from "date-fns";

const tableHead = [
  {
    id: 1,
    label: "Turi",
  },
  {
    id: 2,
    label: "Nomi",
  },
  {
    id: 3,
    label: "Kategoriyasi",
  },
  {
    id: 4,
    label: "Narxi",
  },
  {
    id: 5,
    label: "Xarid sanasi",
  },
  {
    id: 6,
    label: "Yuklab olish",
  },
];

function PurchasedPage() {
  const { data } = useGet<{ results: PurchasedDocument[] }>(
    `${PRODUCTS_PURCHAESD}`,
    {
      params: { page: 1, size: 50 },
    }
  );
  const { push } = useRouter();


  return (
    <div className="container mx-auto lg:px-0 px-3 py-12">
      <h1 className="font-bold text-2xl mb-5">Sotib olingan mahsulotlar</h1>
      <Table>
        <TableHeader>
          <TableRow>
            {tableHead.map((item) => (
              <TableHead
                key={item.id}
                className="text-left font-bold text-blue-600 last:text-center max-w-md"
              >
                {item.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.results?.map((item) => (
            <TableRow
              key={item.id}
              onClick={() => push(`/product/${item.slug}`)}
              className="cursor-pointer"
            >
              <TableCell>
                <Image
                  width={100}
                  height={100}
                  src={fileType[item.ext]}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
              </TableCell>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.amount} so'm</TableCell>
              <TableCell>{formatDate(item.created_at, "dd-MM-yyyy")}</TableCell>
              <TableCell className="text-center">
                <Button
                  onClick={() => {
                    if (item.file) {
                      downloadFile({
                        data: item.file,
                        name: item.name,
                        extension: item?.ext,
                      });
                    }
                  }}
                  variant={"ghost"}
                  className="cursor-pointer hover:text-blue-600"
                >
                  <Download size={18} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default PurchasedPage;
