import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import OAuthBox from "./oauth-box";
import { useRouter } from "next/router";
import FormInput from "@/components/form/input";

type LoginFields = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const form = useForm<LoginFields>();

  const { push } = useRouter();

  function handleSubmit(vals: LoginFields) {
    console.log(vals);
    push("/");
  }

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <FormInput label="Email" methods={form} name="email" fullWidth required />

      <FormInput
        label="Parol"
        methods={form}
        name="password"
        type="password"
        fullWidth
        required
      />

      <Button  type="submit">
        Keyingisi
      </Button>

      <OAuthBox />
    </form>
  );
}
