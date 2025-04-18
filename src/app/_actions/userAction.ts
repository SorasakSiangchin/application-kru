"use server";

import { SignJWT } from "jose";
import { ResponseService } from "@/interface/responseService";
import {
  LoginRequest,
  RegisterRequest,
  UserData,
} from "@/interface/userInterface";
import fetchInterceptor from "@/utils/fetchInterceptor";
import { cookies } from "next/headers";
import { JWT_COOKIE, JWT_DURATION, JWT_SECRETKEY } from "@/utils/constant";

export async function register(
  data: RegisterRequest
): Promise<ResponseService<UserData>> {
  const result = await fetchInterceptor.post("/api/user/register", data);

  return result;
}

export async function login(
  data: LoginRequest
): Promise<ResponseService<UserData>> {
  const result: ResponseService<UserData> = await fetchInterceptor.post(
    "/api/user/login",
    data
  );

  const token = await new SignJWT({ ...result.data })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(new Date(Date.now() + JWT_DURATION))
    .sign(new TextEncoder().encode(JWT_SECRETKEY));

  const cookieSession = await cookies();

  cookieSession.set(
    JWT_COOKIE,
    JSON.stringify({
      token,
      user: result.data,
    })
  );

  return result;
}
