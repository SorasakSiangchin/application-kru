import { db } from "./db";

async function getCategories() {
  return await db.category.findMany();
}

const categoryService = {
  getCategories,
};

export default categoryService;
