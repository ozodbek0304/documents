import React from "react";
import { useForm, useWatch } from "react-hook-form";

import FormInputOTP from "@/components/form/input-otp";
import { usePost } from "@/hooks/usePost";
import { toast } from "sonner";
import { LOGIN_TELEGRAM } from "@/lib/api-endpoints";
import { useModal } from "@/hooks/use-modal";

type ConfimFields = {
  code: string;
};

export default function ConfimForm() {
  const form = useForm<ConfimFields>();
  const { closeModal } = useModal("login-modal");
  const { mutate, isPending } = usePost(LOGIN_TELEGRAM, {
    onSuccess: () => {
      toast.success("Successfully logged in");
      closeModal();
    },
  });

  const codeValue = useWatch({ control: form.control, name: "code" });

  function handleSubmit(vals: ConfimFields) {
    mutate(LOGIN_TELEGRAM, vals);
  }

  React.useEffect(() => {
    if (codeValue?.length === 6) {
      form.handleSubmit(handleSubmit)();
    }
  }, [codeValue]);

  return (
    <form
      className="flex flex-col gap-4 items-center"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <h1 className="font-bold text-2xl">Kodni Kiriting</h1>
      <div className="text-center">
        <a
          href="tg://resolve?domain=DocBazarBot"
          rel="noopener noreferrer"
          className="lowercase border-b cursor-pointer hover:text-blue-400"
        >
          @DocBazarBot
        </a>{" "}
        telegram botiga kiring va <br /> 2 daqiqalik kodingizni oling.
      </div>
      <FormInputOTP disabled={isPending} methods={form} name="code" />
    </form>
  );
}
