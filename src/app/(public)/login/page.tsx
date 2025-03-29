import LoginPage from "@/app/_components/pages/login/LoginPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "login",
  description: "login page",
};

const Login = () => {
  return <LoginPage />;
};

export default Login;
