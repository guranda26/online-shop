import { Product } from "../interfaces/products";

export type SetProducts = {
  (products: Product[]): void;
};
