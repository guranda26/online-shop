import { Product } from "../interfaces/products";

export type SetProducts = {
  (products: Product[]): void;
};

export type SetNewProduct = (product: Omit<Product, "id">) => void;

export type NewProduct = Omit<Product, "id"> & {
  image: string;
};
