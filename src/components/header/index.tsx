import UserMenu from "./user-menu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full z-40 bg-background top-0">
      <div className="py-2 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center gap-2">
            <div className="logo-box block flex-1">
              <Link href={"/"} className="text-2xl flex font-bold items-center gap-2">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Doc
                </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                  Bazar
                </span>
              </Link>
            </div>
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
