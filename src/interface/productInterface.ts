import { CategoryData } from "./categoryInterface";

export interface ProductData {
  id: string;
  name: string;
  price: number;
  stock: number;
  imageUrl: string;
  detail: string;
  categoryId: string;
  category: CategoryData;
}

export interface ProductParam {
  searchName?: string;
  categoryId?: string;
  sortPrice?: string;
}
