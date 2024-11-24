export const handleDelete = (products, id, setProducts) => {
  const updatedProducts = products.filter((product) => product.id !== id);
  setProducts(updatedProducts);
};
