export interface Products {
  id: number;
  name: string;
  image_link?: string;
  description: string;
  price: string;
  image: string;
  category?: string;
}

interface ProductData {
  products: Products[];
}

const useProducts = async (): Promise<Products[]> => {
  try {
    const storeDataResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/store`,
      { next: { revalidate: 10 } }
    );

    if (!storeDataResponse.ok) {
      throw new Error(
        `Failed to fetch store data: ${storeDataResponse.status}`
      );
    }

    const storeProducts: ProductData = await storeDataResponse.json();
    console.log("Fetched store products:", storeProducts);

    return storeProducts.products;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default useProducts;
