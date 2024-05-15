import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = { subsets: ["latin"], weight: ["600"] };
const Header = ({ lable }) => {
  
  return (
    <div className="relative w-full flex flex-col gap-y-4 items-center justify-center">
      <Link href={"/"} className="absolute top-[12px] left-0"><IoArrowBackSharp/></Link>
      <h1 className={cn("text-3xl font-semibold ", font.className)}>🔐Auth</h1>
      <p>{lable}</p>
    </div>
  );
};

export default Header;
