import LoginBtn from "@/components/auth/LoginBtn";
import { auth } from "../../auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();

  return (
    <main className=" flex items-center justify-center  w-full h-screen bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500">
      <div className=" w-[24rem] justify-center bg-yellow-50 h-[32rem] p-[2rem] rounded-2xl flex flex-col items-center">
        <h1 className=" font-semibold text-4xl">Auth🔐</h1>
        {session ? (
          <>
            {" "}
            {/* <Image  
              src={session.user.image}
              height={2000}
              width={2000}
              alt="profile"
              className=" w-20 h-20 rounded-full my-6"
            ></Image> */}
            <h1>{session.user.name}</h1>
            <h1>{session.user.email}</h1>
            {/* <LoginBtn>
              <button
                className="border-2 border-zink-700 py-2 rounded-lg m-10 px-4"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </LoginBtn> */}
          </>
        ) : (
          <>
            <LoginBtn>
              <button className="border-2 border-zink-700 py-2 rounded-lg m-10 px-4">Log in</button>
            </LoginBtn>
          </>
        )}
      </div>
    </main>
  );
}
