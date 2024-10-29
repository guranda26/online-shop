export const editProduct = (products, setProducts, updatedProduct) => {
  const updatedProducts = products.map((product) =>
    product.id === updatedProduct.id
      ? { ...product, ...updatedProduct }
      : product
  );
  setProducts(updatedProducts);
};
