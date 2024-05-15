import LoginForm from "@/components/auth/LoginForm";
import React from "react";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

const LoginPage =async () => {
  const session = await auth();
  if (session?.user !== undefined) redirect("/");
  return <LoginForm/>
};

export default LoginPage;
