import Image from "next/image";
import UserMenu from "./user-menu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full z-40 bg-background top-0">
      <div className="py-2 shadow-sm">
        <div className="container mx-auto lg:px-0 px-3">
          <div className="flex items-center justify-between gap-2">
            <Link href={"/"} >
              <Image className="h-9" src={"/logo.png"} width={120} height={120} alt="logo" />
            </Link>
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
