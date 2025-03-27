import React, { HTMLAttributes } from "react";
import ProductCard from "../product-card";

type Props = {
  title?: string;
} & HTMLAttributes<HTMLDivElement>;


export interface Document {
  id: string
  title: string
  description: string
  price: number
  category: string
  format: string
  views: number
  image: string
  type: "kurs" | "taqdimot" | "referat" | "kitob"
  rating: number
  date: string
}

const documents: Document[] = [
  {
    id: "1",
    title: "Oligopoliya va monopolistik raqobat",
    description: "Iqtisodiyot fanidan kurs ishi. Oligopoliya va monopolistik raqobat mavzusida to'liq ma'lumot.",
    price: 23000,
    category: "Kurs ishlari",
    format: "pdf",
    views: 120,
    image: "/placeholder.svg?height=400&width=600",
    type: "kurs",
    rating: 4.8,
    date: "12.05.2023",
  },
  {
    id: "2",
    title: "Marketing strategiyalari",
    description: "Marketing fanidan taqdimot. Zamonaviy marketing strategiyalari haqida batafsil ma'lumot.",
    price: 15000,
    category: "Taqdimotlar",
    format: "ppt",
    views: 85,
    image: "/placeholder.svg?height=400&width=600",
    type: "taqdimot",
    rating: 4.5,
    date: "23.06.2023",
  },
  {
    id: "3",
    title: "Jahon adabiyoti tarixi",
    description: "Adabiyot fanidan referat. Jahon adabiyoti tarixi va uning rivojlanish bosqichlari.",
    price: 18000,
    category: "Referatlar",
    format: "doc",
    views: 67,
    image: "/placeholder.svg?height=400&width=600",
    type: "referat",
    rating: 4.2,
    date: "05.07.2023",
  },
  {
    id: "4",
    title: "Dasturlash asoslari",
    description: "Informatika fanidan o'quv qo'llanma. Dasturlash asoslari va algoritmlash.",
    price: 30000,
    category: "Kitoblar",
    format: "pdf",
    views: 210,
    image: "/placeholder.svg?height=400&width=600",
    type: "kitob",
    rating: 4.9,
    date: "18.04.2023",
  },
  {
    id: "5",
    title: "Moliya bozori tahlili",
    description: "Moliya fanidan kurs ishi. Moliya bozori va uning tahlili bo'yicha to'liq ma'lumot.",
    price: 25000,
    category: "Kurs ishlari",
    format: "pdf",
    views: 95,
    image: "/placeholder.svg?height=400&width=600",
    type: "kurs",
    rating: 4.6,
    date: "30.05.2023",
  },
  {
    id: "6",
    title: "Biznes rejani tuzish",
    description: "Biznes fanidan taqdimot. Biznes rejani tuzish va uni amalga oshirish bosqichlari.",
    price: 17000,
    category: "Taqdimotlar",
    format: "ppt",
    views: 78,
    image: "/placeholder.svg?height=400&width=600",
    type: "taqdimot",
    rating: 4.4,
    date: "14.06.2023",
  },
  {
    id: "7",
    title: "Ekologiya muammolari",
    description: "Ekologiya fanidan referat. Zamonaviy ekologik muammolar va ularning yechimlari.",
    price: 16000,
    category: "Referatlar",
    format: "doc",
    views: 62,
    image: "/placeholder.svg?height=400&width=600",
    type: "referat",
    rating: 4.3,
    date: "22.07.2023",
  },
  {
    id: "8",
    title: "Pedagogika asoslari",
    description: "Pedagogika fanidan o'quv qo'llanma. Pedagogika nazariyasi va amaliyoti.",
    price: 28000,
    category: "Kitoblar",
    format: "pdf",
    views: 185,
    image: "/placeholder.svg?height=400&width=600",
    type: "kitob",
    rating: 4.7,
    date: "09.03.2023",
  },
]

export default function ProductList({ title, ...props }: Props) {
  return (
    <section {...props}>
      {title ? <h2 className="text-2xl font-semibold">{title}</h2> : ""}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-2 gap-1 sm:gap-4">
        {documents.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </section>
  );
}
