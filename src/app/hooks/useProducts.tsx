


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
  
  const data = await fetch('http://localhost:3000/api/products')
  const products: Products[] = await data.json()


  return products
};


export default useProducts;