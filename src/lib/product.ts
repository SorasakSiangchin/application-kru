import { ProductParam } from "@/interface/productInterface";
import { db } from "./db";

async function getProducts({
  searchName,
  categoryId,
  sortPrice,
}: ProductParam) {
  return await db.product.findMany({
    where: {
      name: {
        contains: searchName ? searchName : undefined,
      },
      categoryId: {
        equals: categoryId ? categoryId : undefined,
      },
    },
    orderBy: {
      price: sortPrice as any,
    },
    include: {
      category: true,
    },
  });
}

async function getProduct(id: string) {
  return await db.product.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });
}

async function createProduct(data: any) {
  return await db.product.create({
    data,
  });
}

async function updateProduct(id: string, data: any) {
  return await db.product.update({
    where: {
      id,
    },
    data,
  });
}

async function deleteProduct(id: string) {
  return await db.product.delete({
    where: {
      id,
    },
  });
}

const productService = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

export default productService;
