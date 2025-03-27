import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function OAuthBox() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Button>
        <span className="flex items-center font-semibold">
          <Image
            src={"/assets/telegram.png"}
            width={20}
            height={20}
            alt="Telegram orqali kiring"
            className="mr-3"
          />
          Telegram orqali kirish
        </span>
      </Button>

      <Button>
        <span className="flex items-center font-semibold">
          <Image
            src={"/assets/google.png"}
            width={20}
            height={20}
            alt="Telegram orqali kiring"
            className="mr-3"
          />
          Telegram orqali kirish
        </span>
      </Button>
    </div>
  );
}
