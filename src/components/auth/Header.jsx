import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = { subsets: ["latin"], weight: ["600"] };
const Header = ({ lable }) => {
  
  return (
    <div className=" w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold ", font.className)}>🔐Auth</h1>
      <p>{lable}</p>
    </div>
  );
};

export default Header;
