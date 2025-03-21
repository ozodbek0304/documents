import UserMenu from "./user-menu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full z-40 bg-[var(--g-color-base-background)] top-0">
      <div className="py-2 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center gap-2">
            <div className="logo-box block flex-1">
              <Link href={"/"} className="text-xl">
                Logo
              </Link>
            </div>
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
