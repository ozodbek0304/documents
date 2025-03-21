import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 pb-6 bg-background mt-10 border-t">
      <div className="container mx-auto flex items-start flex-wrap gap-5 md:gap-20">
        <div className="flex-1 flex flex-col gap-2 pb-3">
          <Link href="/" className="hidden md:inline">
            <div className="flex items-center gap-1">
              <h2 className="hidden md:inline text-3xl  font-semibold text-primary">
                Brand
              </h2>
              <h2 className="hidden md:inline text-3xl  font-semibold text-primary">
                Logo
              </h2>
            </div>
          </Link>
          <div className="flex items-center gap-1">
            <span className="text-primary text-sm">+998 90 000 00 00</span>
          </div>
          <p>&#169; 2025 BrandName Barcha huquqlar himoyalangan</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-md font-semibold">Foydalanuvchilarga</h3>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              className="hover:underline text-muted-foreground text-sm"
            >
              Footer link 1
            </Link>
            <Link
              href="/"
              className="hover:underline text-muted-foreground text-sm"
            >
              Footer link 2
            </Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-md font-semibold">Foydalanuvchilarga</h3>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              className="hover:underline text-muted-foreground text-sm"
            >
              Footer link 3
            </Link>
            <Link
              href="/"
              className="hover:underline text-muted-foreground text-sm"
            >
              Footer link 4
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
