export const handleDelete = (products, id, setProducts, setPosts) => {
  const updatedProducts = products.filter((product) => product.id !== id);
  setProducts(updatedProducts);
};
