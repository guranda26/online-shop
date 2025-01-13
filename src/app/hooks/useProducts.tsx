interface Products {
  id: number;
  name: string;
  image_link?: string;
  description: string;
  price: string;
  image: string;
  category?: string;
}

const useProducts = async (): Promise<Products[]> => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  const products: Products[] = await data.json();

  return products;
};

export default useProducts;
