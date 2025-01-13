import React from "react";
import NotFoundPage from "../[locale]/not-found";

export async function fetchPosts(search = "", sortBy = "title", order = "asc") {
  const localUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`;
  const dummyUrl = `https://dummyjson.com/posts/search?q=${search || ""}${sortBy ? `&sortBy=${sortBy}` : ""}${order ? `&order=${order}` : ""}`;

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
    if (error instanceof Error) {
      console.error("Error in fetchProducts:", error.message);
    } else {
      console.error("Unknown error in fetchProducts:", error);
    }
    return <NotFoundPage />;
  }
}
