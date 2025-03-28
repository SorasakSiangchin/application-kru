import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Hello World !" });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ body }, { status: 200 });
}
