import LoginBtn from "@/components/auth/LoginBtn";

export default function Home() {
  return (
    <main className=" flex items-center justify-center  w-full h-screen bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500">
      <div className=" w-[24rem] justify-center bg-yellow-50 h-[32rem] p-[2rem] rounded-2xl flex flex-col items-center">
        <h1 className=" font-semibold text-4xl">Auth🔐</h1>
        <LoginBtn>
          <button className="border-2 border-zink-700 py-2 rounded-lg m-10 px-4">Log in</button>
        </LoginBtn>
      </div>
    </main>
  );
}
