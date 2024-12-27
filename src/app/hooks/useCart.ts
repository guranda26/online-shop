'use client'

import { useEffect, useState } from 'react'

interface CartItem {
    id: number;
    created_at: string;
    product_id: number;
    user_id: string;
    stripe_product_id: string;
    stripe_price_id: string;
    products: Product;
    quantity: number;
  }
  
  interface Product {
    title_en: string;
    thumbnail: string;
    price: number;
  }
export const useCart = () => {

    const [cart, setCart] = useState<CartItem[]>()



useEffect(() => {
    fetch("http://localhost:3000/api/cart")
    .then(response => response.json())
    .then(data => setCart(data))
    .catch(error => console.error('Error fetching cart:', error))



},[])




  return {cart, setCart}
}
