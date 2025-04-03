import Link from "next/link";
import { cn } from "@/lib/utils";
import { CategoriesType } from "@/views/home/hero";
import { useCatalogStore } from "@/store/catalogStorge";

interface CategorySidebarProps {
  categories: CategoriesType[];
  currentSlug: string;
}

export default function CategorySidebar({
  categories,
  currentSlug,
}: CategorySidebarProps) {
  const { toggleOpen } = useCatalogStore();

  return (
    <div>
      <nav className="space-y-1">
        {categories.map((category) => {
          return (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              onClick={toggleOpen}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 border py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                currentSlug === category.slug
                  ? "bg-accent border-blue-400 text-accent-foreground"
                  : "transparent"
              )}
            >
              <div
                className="flex h-7 w-7 items-center justify-center rounded-md"
                style={{
                  backgroundColor: category.color + "20",
                  color: category.color,
                }}
              >
                <span className="text-2xl">{category.icon}</span>
              </div>
              <span>{category.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
