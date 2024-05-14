import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Header from "./Header";
import Social from "./Social";
import Link from "next/link";

const CardWrapper = ({ children, headerLabel, backButtonLable, backButtonHref, showSocial }) => {
  return (
    <Card className={"w-[24rem] shadow-md min-h-[32rem]"}>
      <CardHeader>
        <Header lable={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && <CardFooter><Social></Social></CardFooter>}
      <CardFooter><Link className=" text-center w-full font-semibold underline" href={backButtonHref}>{backButtonLable}</Link></CardFooter>
    </Card>
  );
};

export default CardWrapper;
