import { Product } from "../interfaces/products";
import {
  SetNewProduct,
  SetProducts,
  NewProduct,
} from "../types/ProductDetails";

export const addProduct = (
  products: Product[],
  setProducts: SetProducts,
  newProduct: NewProduct,
  setNewProduct: SetNewProduct
) => {
  const newProductId = products.length
    ? products[products.length - 1].id + 1
    : 1;
  const productToAdd = {
    ...newProduct,
    id: newProductId,
    images: [newProduct.image] as [string],
  };

  setProducts([productToAdd, ...products]);

  setNewProduct({
    name: "",
    description: "",
    price: "",
    image: "",
  });
};
