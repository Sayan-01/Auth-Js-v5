import { Button } from "@/components/ui/button";
import CardWrapper from "./CardWrapper";
import React from "react";
import { Card, CardContent} from "../ui/card";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel={"welcome back"}
      backButtonLable={"Dont have an account ?"}
      backButtonHref={"/auth/register"}
      showSocial
    >
      <Card>
        <CardContent>
          <Input className={'mt-6 '}
            type="name"
            placeholder="xyz"
            name="name"
          ></Input>
          <Input className='mt-6'
            type="password"
            placeholder="*******"
            name="password"
          ></Input>
          <Button
            size="lg"
            type="submit"
            className=" w-full mt-6"
          >
            Log in
          </Button>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default LoginForm;
