import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { User } from "../../../../models/user";
export const POST = async (req) => {
  await connectDb();
  let { name, email, password } = await req.json();
  let hashPass = await bcrypt.hash(password, 10);
  const newUser = User.create({ name, email, password: hashPass });
  return NextResponse.json({ mas: "sayana" });
};
