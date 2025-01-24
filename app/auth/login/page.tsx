import LoginForm from "@/components/auth/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <div className="flex w-4xl h-screen items-center justify-center text-center border rounded-lg">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
