"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import CardWrapper from "./CardWrapper";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "../ui/card";
import { BsExclamationTriangle } from "react-icons/bs";

const RegisterForm = () => {
  const [error, setError] = useState("");

  const router = useRouter();
  const registerHandler = async (formData) => {
    const name = await formData.get("name");
    const email = await formData.get("email");
    const password = await formData.get("password");
    if (!name || !email || !password) setError("Filled all details");
    let res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
    console.log(res.status, res);

    if (res.ok === false) setError("User alredy exist");
    if (res.ok) router.push("/auth/login");
  };
  return (
    <CardWrapper
      headerLabel={"Creat an account"}
      backButtonLable={"Already have an account ?"}
      backButtonHref={"/auth/login"}
      showSocial
    >
      <Card>
        <CardContent>
          <form
            action={registerHandler}
            noValidate
          >
            <Input
              className="mt-6"
              type="text"
              placeholder="xyz"
              name="name"
            ></Input>
            <Input
              className={"mt-6 "}
              type="email"
              placeholder="xyz@gmail.com"
              name="email"
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
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default RegisterForm;

/**
 * const a = () => {
 *    let b = ["xyz", "abc"]
 *    c
 * }
 *
 */
