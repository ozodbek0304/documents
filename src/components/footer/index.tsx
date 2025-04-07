import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full lg:py-12 py-8 lg:px-0 px-3 pb-6 bg-background mt-10 border-t">
      <div className="container mx-auto flex items-start flex-wrap gap-5 md:gap-20">
        <div className="flex-1 flex flex-col gap-2 pb-3">
          <Link href={"/"}>
            <Image
              className="h-9"
              src={"/logo.png"}
              width={120}
              height={120}
              alt="logo"
            />
          </Link>
          <div className="flex items-center gap-1">
            <a href="tel:+998971640102">
              <span className="text-primary text-md hover:text-purple-600">
                +998 97 164 01 02
              </span>
            </a>
          </div>
          <p>&#169; 2025 Hujjat24 Barcha huquqlar himoyalangan</p>
        </div>
      </div>
    </footer>
  );
}
