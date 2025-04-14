import Modal from "@/components/custom/modal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ConfimForm from "./confirm-form";
import { usePost } from "@/hooks/usePost";
import { LOGIN_EMAIL } from "@/lib/api-endpoints";
import { signIn, signOut, useSession } from "next-auth/react";
import { toast } from "sonner";

export default function OAuthBox() {
  const [state, setSetate] = useState<string>("");
  const { mutate, isPending } = usePost({
    onSuccess: (data) => {
      if (data?.access_token) {
        localStorage.setItem("token", data?.access_token);
      }
      toast.success("Muavffaqiyatli kirdingiz!");
      window.location.reload();
    },
  });
  const { data: session, status } = useSession();

  const handleGoogleLogin = async () => {
    await signOut({ redirect: false });
    const result = await signIn("google", {
      redirect: false,
      prompt: "select_account",
    });

    if (result?.error) {
      toast.error("Kirishda xatolik yuz berdi!");
    }
  };
   

  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      mutate(LOGIN_EMAIL, { email: session.user.email, auth_type: "google" });
    }
  }, [session, status]);

  return (
    <Modal
      size="md"
      modalKey="login-modal"
      className="bg-gradient-to-br max-w-[340px] from-slate-900  text-white border-none to-blue-900"
    >
      {state === "telegram" ? (
        <ConfimForm />
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 mt-4 ">
          <Button
            onClick={() => setSetate("telegram")}
            variant={"secondary"}
            className="w-full cursor-pointer"
          >
            <span className="flex items-center font-semibold">
              <Image
                src={"/assets/telegram.png"}
                width={20}
                height={20}
                priority
                alt="Telegram orqali kiring"
                className="mr-3"
              />
              Telegram orqali kirish
            </span>
          </Button>

          <Button
            loading={isPending}
            onClick={handleGoogleLogin}
            variant={"secondary"}
            className="w-full cursor-pointer"
          >
            <span className="flex items-center font-semibold">
              <Image
                src={"/assets/google.png"}
                width={20}
                height={20}
                priority
                alt="Telegram orqali kiring"
                className="mr-1"
              />
              Google orqali kirish
            </span>
          </Button>
        </div>
      )}
    </Modal>
  );
}
