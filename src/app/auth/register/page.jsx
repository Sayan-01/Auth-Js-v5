import RegisterForm from "@/components/auth/RegisterForm";
import React from "react";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const session = await auth();
  
  if (session?.user !== undefined) redirect("/");
  return <RegisterForm/>
};

export default RegisterPage;
