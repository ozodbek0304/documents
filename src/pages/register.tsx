import AuthLayout from "@/components/layout/auth-layout";
import RegisterForm from "@/views/auth/register-form";
import React from "react";

export default function register() {
  return (
    <AuthLayout title="Tizimga kiring">
      <RegisterForm />
    </AuthLayout>
  );
}
