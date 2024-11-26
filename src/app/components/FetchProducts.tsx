import NotFoundPage from "../[locale]/not-found";

export async function fetchProducts(
  search = "",
  sortBy = "title",
  order = "asc"
) {
  const localUrl = "http://localhost:3000/api/products";

  const dummyUrl = `http://dummyjson.com/products/search?q=${search || ""}${sortBy ? `&sortBy=${sortBy}` : ""}${order ? `&order=${order}` : ""}`;

  try {
    const localResponse = await fetch(localUrl);

    if (localResponse.ok) {
      const localData = await localResponse.json();

      console.log(localData);

      if (localData && localData.length > 0) {
        return localData;
      }
    }

    const dummyResponse = await fetch(dummyUrl);

    // const response = await fetch(url);

    if (!dummyResponse.ok) {
      console.error("Error fetching products:", dummyResponse.statusText);
      return <NotFoundPage />;
    }

    const dummyData = await dummyResponse.json();
    if (!dummyData.products) {
      throw new Error("No products found");
    }

    return dummyData.products;
  } catch (error) {
    console.error("Error in fetchProducts:", error.message);
    return <NotFoundPage />;
  }
}
