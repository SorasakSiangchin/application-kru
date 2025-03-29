import { ResponseService } from "@/interface/responseService";
import { UserData } from "@/interface/userInterface";
import userService from "@/lib/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const result = (await userService.getUsers()) as UserData[];

    const response: ResponseService<UserData[]> = {
      success: true,
      message: "",
      data: result,
    };

    return NextResponse.json(response);
  } catch (error: any) {
    const response: ResponseService<UserData[]> = {
      success: false,
      message: error,
      data: null,
    };

    return NextResponse.json(response, { status: 401 });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ body }, { status: 200 });
}
