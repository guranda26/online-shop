"use client";

import React from "react";
import { createClient } from "../../utils/supabase/client";

interface BuyProductButtonProps {
  productId: number;
  productName: string;
  productPrice: string | number;
  productDescription?: string;
  productImage?: string;
}

const BuyProductButton = ({
  productId,
  productName,
  productPrice,
  productDescription,
  productImage,
}: BuyProductButtonProps) => {
  async function handleBuyProduct() {
    try {
      const response = await fetch("/api/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          productName,
          productPrice,
          productDescription,
          productImage,
        }),
      });

      // add item to supabase orders list
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { data, error } = await supabase
        .from("orders")
        .insert({
          product_id: productId,
          user_id: user?.id,
          product_name: productName,
          product_price: productPrice,
          product_description: productDescription,
          product_photo: productImage,
        })
        .single();

      if (!response.ok) {
        throw new Error("Failed to create Stripe Checkout session.");
      }

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      } else {
        console.error("No URL returned from API.");
      }

      if (data) {
        console.log(data);
      }
    } catch (error) {
      throw new Error("Error processing checkout:");
    }
  }

  return (
    <button
      className="py-2 px-3 bg-[#e24a4a] hover:bg-[#b43e3e]  transition-all-color hover:scale-105 rounded-md text-white w-[110px]"
      onClick={handleBuyProduct}
    >
      Buy Now
    </button>
  );
};

export default BuyProductButton;
