import AuthLayout from "@/components/layout/auth-layout";
import ConfimForm from "@/views/auth/confirm-form";
import React from "react";

export default function confirm() {
  return (
    <AuthLayout title="Emailni tasdiqlash">
      <ConfimForm />
    </AuthLayout>
  );
}
