
export const addProduct = (products, setProducts, newProduct, setNewProduct) => {
  const newProductId = products.length ? products[products.length - 1].id + 1 : 1;
  const productToAdd = { ...newProduct, id: newProductId, images: [newProduct.image] };
  
  setProducts([productToAdd, ...products]);

  setNewProduct({ title: "", description: "", price: "", image: "" });
};
