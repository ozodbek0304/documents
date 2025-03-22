"use client";
import React from "react";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import { useModal } from "@/hooks/use-modal";

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
