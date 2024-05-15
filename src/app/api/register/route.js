import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { User } from "../../../../models/user";

export const POST = async (req) => {
  await connectDb();
  let { name, email, password } = await req.json();
  let hashPass = await bcrypt.hash(password, 10);
  const user = await User.findOne({ name });
  if (user) return NextResponse.json({ error: "User already exist" }, { status: 200 });
  else {
    const newUser = User.create({ name, email, password: hashPass });
    return NextResponse.json({ massage: "User register" }, { status: 200 });
  }
};

