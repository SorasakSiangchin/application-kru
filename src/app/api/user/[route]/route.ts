import { ResponseService } from "@/interface/responseService";
import { UserData } from "@/interface/userInterface";
import userService from "@/lib/user";
import { NextRequest, NextResponse } from "next/server";

// api/user
// api/user/login
// api/user/register
export async function POST(
  request: NextRequest,
  context: { params: { route: string } }
) {
  const route = context?.params?.route ?? "";

  const body = await request.json();

  if (route === "login") {
    return await login(body);
  } else if (route === "register") {
    return await register(body);
  }
}

async function login(data: any) {
  try {
    const result = await userService.login(data);

    const response: ResponseService<UserData> = {
      success: true,
      message: "",
      data: result,
    };

    return NextResponse.json(response);
  } catch (error: any) {
    const response: ResponseService<any> = {
      success: false,
      message: error,
      data: null,
    };

    return NextResponse.json(response, { status: 401 });
  }
}

async function register(data: any) {
  try {
    const result = await userService.register(data);

    const response: ResponseService<UserData> = {
      success: true,
      message: "",
      data: result,
    };

    return NextResponse.json(response);
  } catch (error: any) {
    const response: ResponseService<any> = {
      success: false,
      message: error,
      data: null,
    };

    return NextResponse.json(response, { status: 401 });
  }
}
