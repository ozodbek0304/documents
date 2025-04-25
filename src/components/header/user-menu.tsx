"use client";
import React from "react";
import { Button } from "../ui/button";
import { LayoutList, LogIn, LogOut, User } from "lucide-react";
import { useModal } from "@/hooks/use-modal";
import OAuthBox from "@/views/auth/oauth-box";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { useAuthStore } from "@/store/auth-store";
import { toast } from "sonner";
import { useRouter } from "next/router";

export default function UserMenu() {
  const { openModal } = useModal("login-modal");
  const { token, clearToken } = useAuthStore();
  const { push } = useRouter();

  const functionLogOut = async () => {
    clearToken();
    toast.warning("Muavffaqiyatli chiqdingiz!");
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  return (
    <div className="flex gap-2">
      {token ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600
       to-indigo-600 px-4 py-2 font-medium text-white shadow-md cursor-pointer transition-transform hover:scale-105"
            >
              <User size={18} /> Profil
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioItem
              className="p-2 cursor-pointer hover:text-blue-600"
              value="1"
              onClick={(e) => {
                e.stopPropagation();
                push("/purchased");
              }}
            >
              <LayoutList size={18} /> Mening mahsulotlarim
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              onClick={functionLogOut}
              className="p-2 cursor-pointer hover:text-blue-600"
              value="2"
            >
              <LogOut size={18} />
              Chiqish
            </DropdownMenuRadioItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
          onClick={openModal}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600
       to-indigo-600 px-5 py-2 font-medium text-white shadow-md cursor-pointer transition-transform hover:scale-105"
        >
          <LogIn size={18} />
          Kirish
        </Button>
      )}

      <OAuthBox />
    </div>
  );
}
