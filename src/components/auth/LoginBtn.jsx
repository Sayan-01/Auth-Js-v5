'use client'
import { useRouter } from "next/navigation";
import React from "react";

const LoginBtn = ({children, mode = 'redirect', asChild}) => {
  const router = useRouter();
  const onClick = ()=> {
    router.push('/auth/login')

  }
  if (mode == 'modal') {
    return <span>sayan</span>
  }
  return <span onClick={onClick}>{children}</span>;
};

export default LoginBtn;
