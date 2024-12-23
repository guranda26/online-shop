// src/hooks/useProducts.tsx
import { useState, useEffect } from "react";
import { fetchProducts } from "../components/FetchProducts";
import { Product } from "../interfaces/products";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = async () => {
    try {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    } catch (err) {
      console.error(err);
      setError("Error loading products");
    }
  };

  useEffect(() => {
    if (products.length === 0 && !error) {
      loadProducts();
    }
  }, []);

  return { products, setProducts, error, setError };
};
