import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "../../../auth";

const Social = () => {
  return (
    <div className=" flex items-center justify-center w-full gap-x-4">
      <Button
        // onClick={async () => await signIn("google")} //async korar fole jotokkhon na signIn hocche totokkhon btn disable thakbe
        variant="outline"
        size="lg"
        className="w-full border-2 border-slate-100/90 rounded-md shadow-md  active:shadow-none"
      >
        <FcGoogle className=" h-6 w-6" />
      </Button>
      <Button
        // onClick={async() => await signIn ("github")}
        variant="outline"
        size="lg"
        className="w-full rounded-md  border-2 border-slate-100/90 shadow-md active:shadow-none"
      >
        <FaGithub className=" h-6 w-6" />
      </Button>
    </div>
  );
};

export default Social;
