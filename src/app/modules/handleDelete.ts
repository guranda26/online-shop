import { Product } from "../interfaces/products";
import { SetProducts } from "../types/ProductDetails";

export const handleDelete = (
  products: Product[],
  key: string,
  id: number,
  setProducts: SetProducts
) => {
  const updatedProducts = products.filter((product) => product.id !== id);
  setProducts(updatedProducts);
};
