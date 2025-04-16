import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { fileColors } from "@/views/home/hero";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const tableHead = [
  {
    id: 1,
    label: "Rasm",
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
    label: "Turi",
  },
  {
    id: 7,
    label: "Yuklab olish",
  },
];

const data = [
  {
    id: 1,
    image_url: "/format-icon/pptx.png",
    title: "TAYYOR MAHSULOT VA UNING SOTILISHINI HISOBGA OLISH",
    category: "Mustaqil ishlar",
    price: "15000",
    sold_date: "2025-04-21",
    type: "xlsx",
  },
  {
    id: 2,
    image_url: "/format-icon/pptx.png",
    title: "TAYYOR MAHSULOT VA UNING SOTILISHINI HISOBGA OLISH",
    category: "Mustaqil ishlar",
    price: "15000",
    sold_date: "2025-04-21",
    type: "pdf",
  },
  {
    id: 3,
    image_url: "/format-icon/pptx.png",
    title: "TAYYOR MAHSULOT VA UNING SOTILISHINI HISOBGA OLISH",
    category: "Mustaqil ishlar",
    price: "15000",
    sold_date: "2025-04-21",
    type: "docx",
  },
];

function PurchasedPage() {
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
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Image
                  width={100}
                  height={100}
                  src={item.image_url}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded"
                />
              </TableCell>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.price} so'm</TableCell>
              <TableCell>{item.sold_date}</TableCell>
              <TableCell >
                <div
                  className={cn(
                    "inline-block rounded-full  text-white px-3 py-0.5 text-xs font-bold ",
                    fileColors[item.type]
                  )}
                >
                  <span>{item.type}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">
               <Button variant={"ghost"} className="cursor-pointer hover:text-blue-600">
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
