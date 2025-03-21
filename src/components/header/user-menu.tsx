"use client";
import React from "react";
import { Button } from "../ui/button";
import { useModal } from "@/hooks/use-mobile";
import { LogIn } from "lucide-react";

export default function UserMenu() {
  const { openModal } = useModal();
  return (
    <div className="flex gap-2">
      <Button onClick={openModal}>
        <LogIn />
        Registratsiya / Kirish
      </Button>
    </div>
  );
}
