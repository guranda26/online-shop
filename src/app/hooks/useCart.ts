"use client";

import { useEffect, useState } from "react";

interface CartItem {
  id: number;
  created_at: number;
  product_id: number;
  user_id: string;
  stripe_product_id: string;
  stripe_price_id: string;
  products: Product;
  quantity: number;
}

interface Product {
  name: string;
  image_link: string;
  price: number;
}
export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/cart`)
      .then((response) => response.json())
      .then((data) => setCart(data))
      .catch((error) => console.error("Error fetching cart:", error));
  }, []);

  return { cart, setCart };
};
