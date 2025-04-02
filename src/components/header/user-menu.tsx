"use client";
import React from "react";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import { useModal } from "@/hooks/use-modal";
import OAuthBox from "@/views/auth/oauth-box";

export default function UserMenu() {
  const { openModal } = useModal("login-modal");

  return (
    <div className="flex gap-2">
      <Button
        onClick={openModal}
        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600
       to-indigo-600 px-5 py-2 font-medium text-white shadow-md cursor-pointer transition-transform hover:scale-105"
      >
        <LogIn size={18} />
        Kirish
      </Button>
      <OAuthBox/>
    </div>
  );
}
