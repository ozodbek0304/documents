import AuthLayout from "@/components/layout/auth-layout";
import LoginForm from "@/views/auth/login-form";
import React from "react";

export default function login() {
  return (
    <AuthLayout title="Kirish">
      <LoginForm />
    </AuthLayout>
  );
}
