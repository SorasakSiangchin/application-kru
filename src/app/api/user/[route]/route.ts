import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  context: { params: { route: string } }
) {
  const id = context?.params?.route ?? "";

  const body = await request.json();
  return NextResponse.json(
    {
      body,
      id,
    },
    { status: 200 }
  );
}

export async function DELETE(
  request: NextRequest,
  context: { params: { route: string } }
) {
  const id = context?.params?.route ?? "";

  return NextResponse.json(
    {
      id,
    },
    { status: 200 }
  );
}
