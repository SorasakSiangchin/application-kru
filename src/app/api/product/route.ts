import productService from "@/lib/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const products = await productService.getProducts();

  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const product = await productService.createProduct(body);

  return NextResponse.json(product);
}
