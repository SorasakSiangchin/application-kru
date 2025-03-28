import categoryService from "@/lib/category";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = await categoryService.getCategories();

  return NextResponse.json(categories);
}
