import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import OAuthBox from "./oauth-box";
import FormPinInput from "@/components/form/form-pin-input";

type ConfimFields = {
  opt: string;
};

export default function ConfimForm() {
  const form = useForm<ConfimFields>();

  function handleSubmit(vals: ConfimFields) {
    console.log(vals);
  }

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <FormPinInput
        label="Tasdiqlash kodi"
        methods={form}
        name="opt"
        size="xl"
        length={5}
        fullWidth
        required
        wrapperClassName="flex items-center justify-between"
      />

      <Button view="action" size="xl" type="submit">
        Keyingisi
      </Button>

      <OAuthBox />
    </form>
  );
}
