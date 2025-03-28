import productService from "@/lib/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const id = context?.params?.id ?? "";

  const product = await productService.getProduct(id);

  return NextResponse.json(product);
}

export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const id = context?.params?.id ?? "";

  const product = await productService.getProduct(id);

  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 401 });

  const body = await request.json();
  const updatedProduct = await productService.updateProduct(id, body);

  return NextResponse.json(updatedProduct);
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const id = context?.params?.id ?? "";

  const product = await productService.getProduct(id);

  if (!product) throw "Product not found";

  const deleteProduct = await productService.deleteProduct(id);

  return NextResponse.json(deleteProduct);
}
