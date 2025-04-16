import Image from "next/image";
import UserMenu from "./user-menu";
import Link from "next/link";
import XXH from "xxhashjs";
import { useGet } from "@/hooks/useGet";
import { GET_VIEW } from "@/lib/api-endpoints";


function generateAuthKey(
  secretKey = process.env.NEXT_PUBLIC_CLIENT_SECRET_KEY
) {
  const timestamp = Math.floor(Date.now() / 1000);
  const secretData = `${timestamp}${secretKey}`;
  const hash = XXH.h64(secretData, 0).toString(16);

  const authKey = `${timestamp}:${hash}`;
  return authKey;
}

export default function Header() {
  const {} = useGet(GET_VIEW, {
    config: {
      headers: {
        Auth: generateAuthKey(),
      },
    },
  });


   console.log(process.env.NEXT_PUBLIC_CLIENT_SECRET_KEY);
   
  return (
    <header className="fixed w-full z-40 bg-background top-0">
      <div className="py-2 shadow-sm">
        <div className="container mx-auto lg:px-0 px-3">
          <div className="flex items-center justify-between gap-2">
            <Link href={"/"}>
              <Image
                className="h-9"
                src={"/logo.png"}
                width={120}
                height={120}
                alt="logo"
              />
            </Link>
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
