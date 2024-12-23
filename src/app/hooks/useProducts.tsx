import { useState, useEffect } from "react";
import { fetchProducts } from "../components/FetchProducts";
import { Product } from "../interfaces/products";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true)

  const loadProducts = async () => {
    try {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setLoading(false)
    } catch (err) {
      console.error(err);
      setError("Error loading products");
      setLoading(false)
    }
  };

  useEffect(() => {
    if (products.length === 0 && !error) {
      loadProducts();
    }
  }, []);

  return { products, setProducts, error, setError, loading };
};
