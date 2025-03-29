import productService from "@/lib/product";
import { NextRequest, NextResponse } from "next/server";

// api/product?searchName=product&categoryId=2;
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const searchName = searchParams.get("searchName") || undefined;
  const categoryId = searchParams.get("categoryId") || undefined;
  const sortPrice = searchParams.get("sortPrice") || "asc";

  const products = await productService.getProducts({
    searchName,
    categoryId,
    sortPrice,
  });

  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const product = await productService.createProduct(body);

  return NextResponse.json(product);
}
