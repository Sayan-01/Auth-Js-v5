import { signIn } from "../../../../auth";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  let { name, password } = await req.json();

    await signIn("credentials", {
      name,
      password,
    });
    console.log("User login");

    return NextResponse.json({ massage: "User login" }, { status: 200 });

    // return NextResponse.json({ massage: error}, {status: 500})
  
  
};
