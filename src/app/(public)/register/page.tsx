import RegisterPage from "@/app/_components/pages/register/RegisterPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "register",
  description: "register page",
};

const Register = () => {
  return <RegisterPage />;
};

export default Register;
