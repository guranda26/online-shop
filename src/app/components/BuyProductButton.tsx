"use client";

import React from "react";

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

      if (!response.ok) {
        throw new Error("Failed to create Stripe Checkout session.");
      }

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      } else {
        console.error("No URL returned from API.");
      }
    } catch (error) {
      console.error("Error processing checkout:", error);
    }
  }

  return (
    <button
      onClick={handleBuyProduct}
      className="py-2 px-3 bg-[#e24a4a] hover:bg-[#b43e3e] transition-all-color hover:scale-105 rounded-md text-white w-[110px]"
    >
      Buy Now
    </button>
  );
};

export default BuyProductButton;
