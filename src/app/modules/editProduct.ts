import { Product } from "../interfaces/products";
import { SetProducts } from "../types/ProductDetails";

export const editProduct = (
  products: Product[],
  setProducts: SetProducts,
  updatedProduct: Partial<Product>
) => {
  const updatedProducts = products.map((product) =>
    product.id === updatedProduct.id
      ? { ...product, ...updatedProduct }
      : product
  );
  setProducts(updatedProducts);
};
