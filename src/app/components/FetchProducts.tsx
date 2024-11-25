import NotFoundPage from "../[locale]/not-found";

export async function fetchProducts(
  search = "",
  sortBy = "title",
  order = "asc"
) {
  const url = `https://dummyjson.com/products/search?q=${search || ""}${sortBy ? `&sortBy=${sortBy}` : ""}${order ? `&order=${order}` : ""}`;

  const response = await fetch(url);

  if (!response.ok) {
    console.error("Error fetching products:", response.statusText);
    return <NotFoundPage />;
  }

  const data = await response.json();
  if (!data.products) {
    throw new Error("No products found");
  }

  return data.products;
}
