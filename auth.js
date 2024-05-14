import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { User } from "./models/user";
import connectDb from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        name: {},
        password: {},
      },
      async authorize(credentials) {
        //er moddehe amara custom method likhbo jar maddhome authorization hobe
        const name = credentials.name;
        const password = credentials.password;

        if (!name || !password) throw new Error("Please fill all filds");

        await connectDb();

        const user = await User.findOne({ name: name }).select("+password");

        if (!user) throw new Error("User not found");

        const isAuth = bcrypt.compare(password , user.password) //ai line a email melano user ar pass ar sathe login ar somoy deoa pass ar coparison hocche

        if (!isAuth) {
          throw new Error("Password not match");
        } else return user;
      },
    }),
  ],
});
