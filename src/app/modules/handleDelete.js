export const handleDelete = (products, listName, id, setProducts) => {
  const updatedProducts = products.filter((product) => product.id !== id);
  setProducts(updatedProducts);
};
