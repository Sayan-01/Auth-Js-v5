"use client";
import { Button } from "@/components/ui/button";
import CardWrapper from "./CardWrapper";
import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { BsExclamationTriangle } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";

const LoginForm = () => {
  const [error, setError] = useState("");

  const router = useRouter();

  const loginHandler = async (formData) => {
    const name = await formData.get("name");
    const password = await formData.get("password");
    if (!name || !password) setError("Filled all details");

    let res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ name, password }),
    });
    if (!res.ok) setError("Password Not match");
    if (res.ok) {
      router.refresh()
    }
  };
  return (
    <CardWrapper
      headerLabel={"welcome back"}
      backButtonLable={"Dont have an account ?"}
      backButtonHref={"/auth/register"}
      showSocial
    >
      <Card>
        <CardContent>
          <form action={loginHandler}>
            <Input
              className={"mt-6 "}
              type="name"
              placeholder="xyz"
              name="name"
            ></Input>
            <Input
              className="mt-6"
              type="password"
              placeholder="*******"
              name="password"
            ></Input>
            {error ? (
              <div className="mt-6 bg-destructive/15 px-3 py-2 border-destructive/30 border-2 rounded-lg flex items-center gap-x-2 text-sm text-destructive">
                <BsExclamationTriangle className=" h-4 w-4" /> {error}
              </div>
            ) : (
              ""
            )}
            
            <Button
              size="lg"
              type="submit"
              className=" w-full mt-6"
            >
              Log in
            </Button>
          </form>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default LoginForm;
